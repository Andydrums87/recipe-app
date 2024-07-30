import React, { useState, useEffect, useMemo } from 'react'
import Header from '../components/Header/Header'
import Sidebar from '../components/Sidebar/Sidebar'
import Search from "../components/Search/Search"
import OrderBy from '../components/Sort/OrderBy'
import Card from '../components/Card/Card'


const Home = () => {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState([])
  const [selectedCategory, setSelectedCategory] = useState("Dessert")
  const [isLoading, setLoading] = useState(true)
  const [userInput, setUserInput] = useState("")
  const [sortData, setSortData] = useState("name")
  const [selectValue, setSelectValue] = useState("name")



  useEffect(() => {
    fetch('https://themealdb.com/api/json/v1/1/categories.php')
      .then((res) => {
        return res.json()
      })
      .then((category) => {
        console.log(category)
        setCategory(category.categories.slice(0, 6))
      });
  }, []);

  useEffect(() => {
    fetch(`https://themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`)
      .then((res) => {
        return res.json()
      })
      .then((data) => {
       setData(data.meals.slice(0, 6))
     
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
     
        setData(data.meals.slice(0, 12));
        // setSortData(data.meals.slice(0, 12))

        setLoading(false);
       
    });

  }

  const handleSearch =  () => {
      setLoading(true);
      let url1 = `https://themealdb.com/api/json/v1/1/search.php?s=${userInput}`;
      fetch(url1)
      .then((res) => res.json())
      .then((data) => {
          setData(data.meals.slice(0, 12));
          setLoading(false);
      });
      let url2 = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${userInput}`;
      fetch(url2)
      .then((res) => res.json())
      .then((data) => {
          setData(data.meals.slice(0, 12));
          setLoading(false);
      });
      let url3 = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${userInput}`;
      fetch(url3)
      .then((res) => res.json())
      .then((data) => {
          setData(data.meals.slice(0, 12));
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
 

return (
    <div className="container">
    <Header />
    <div className="body__wrapper">
      <div className="body__left">
      <Sidebar category={category} handleData={handleData} selectedCategory={selectedCategory} />
      </div>
      <div className="body__right">
        <div className="filter__container">
        <Search setUserInput={setUserInput} handleSearch={handleSearch} />
        <OrderBy data={data} handleSelect={handleSelect} setSelectValue={setSelectValue}selectValue={selectValue} />
        </div>
         <Card data={data}/> 

      </div>
    </div>
 </div>
)

   
}

export default Home;