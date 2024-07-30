import React, { useState, useEffect, useMemo } from 'react'
import Header from '../components/Header/Header'
import Sidebar from '../components/Sidebar/Sidebar'
import Search from "../components/Search/Search"
import OrderBy from '../components/Sort/OrderBy'
import Card from '../components/Card/Card'
import Pagination from '../components/Pagination'
import Pagination2 from '../components/Pagination/Pagination'



function Home () {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState([])
  const [selectedCategory, setSelectedCategory] = useState("Dessert")
  const [isLoading, setLoading] = useState(true)
  const [userInput, setUserInput] = useState("")
  const [sortData, setSortData] = useState("name")
  const [selectValue, setSelectValue] = useState("name")
  const [currentPage, setCurrentPage] = useState(1)
  const [recordsPerPage, setRecordsPerPage] = useState(9)
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage

  const nPage = Math.ceil(data.length / recordsPerPage)
  const numbers = [...Array(nPage + 1).keys()].slice(1)




  useEffect(() => {
    fetch('https://themealdb.com/api/json/v1/1/categories.php')
      .then((res) => {
        return res.json()
      })
      .then((category) => {
        console.log(category)
        setCategory(category.categories)
      });
  }, []);

  useEffect(() => {
    fetch(`https://themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`)
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setData(data.meals)
      });
  }, []);

  // useEffect(() => {
  //   fetch(`https://themealdb.com/api/json/v1/1/search.php?s=${userInput}`)
  //     .then((res) => {
  //       return res.json()
  //     })
  //     .then((data) => {
  //       setData(data.meals)
  //     });
  // }, []);

useEffect(() => {
  handleData()
})


  const handleData = (selectedCategory) => {
    
    setLoading(false);
    let url = `https://themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`;
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
     
        setData(data.meals.slice(0, 100));
        setLoading(false);
       
    });

  }

  const handleSearch =  () => {
      setLoading(true);
      let url1 = `https://themealdb.com/api/json/v1/1/search.php?s=${userInput}`;
      fetch(url1)
      .then((res) => res.json())
      .then((data) => {
          setData(data.meals.slice(0, 100));
          setLoading(false);
      });
      let url2 = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${userInput}`;
      fetch(url2)
      .then((res) => res.json())
      .then((data) => {
          setData(data.meals.slice(0, 100));
          setLoading(false);
      });
      let url3 = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${userInput}`;
      fetch(url3)
      .then((res) => res.json())
      .then((data) => {
          setData(data.meals.slice(0, 100));
          setLoading(false);
      });
    
    
  }


  const handleSelect = (sortData) => {
    const name = [...data]
    const id = [...data]
    const sortName = [...name].sort((a, b) => a.strMeal.localeCompare(b.strMeal))
    const sortId = [...id].sort((a, b) => a.idMeal - b.idMeal)
    sortData === "id" ? setData(sortId) : setData(sortName)
  }


  const goToNextPage = () => {
    if(currentPage !== nPage) 
        setCurrentPage(currentPage + 1)

      

}

const goToPrevPage = () => {
    if(currentPage !== 1) 
        setCurrentPage(currentPage -1)
}




 

return (
    <div className="container">
    <Header />
    <div className="body__wrapper">
      <div className="body__left">
      <Sidebar category={category} handleData={handleData} selectedCategory={selectedCategory} setCurrentPage={setCurrentPage} currentPage={currentPage} />
      </div>
      <div className="body__right">
        <div className="filter__container">
        <Search setUserInput={setUserInput} handleSearch={handleSearch} />
        <OrderBy data={data} handleSelect={handleSelect} setSelectValue={setSelectValue}selectValue={selectValue} />
        </div>
         <Card data={data} firstIndex={firstIndex} lastIndex={lastIndex}/> 
         
        <Pagination2 numbers={numbers}goToNextPage={goToNextPage} goToPrevPage={goToPrevPage} nPage={nPage} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
       
      </div>
    </div>
 </div>
)

   
}

export default Home;