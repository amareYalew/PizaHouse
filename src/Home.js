import React, { useEffect,useState}from 'react'
import Recipes from './Components/PizaComponent/Recipes';

const Home = () => {

  const APP_ID = "7476e566";
  const APP_KEY = "c00a2e2ceb4cccfb20b49cbed5261c26";


  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  // data after submit
  const [query, setQuery] = useState("chicken");// chicken is came for satisfying first time fetch API 
    
 
  
//This function helps to stop every  time  the page do not refresh
 // b/s of [] the page not refreshing avery time;
  useEffect(() => {
    getRecipes();
    console.log("heloooooo")
  },[query]);// The page refresh only the query state touched by submit click button 

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json();
    setRecipes(data.hits)
    console.log(data.hits)
   
  }
  const updateSearch = e => {
    setSearch(e.target.value)
    console.log(search)
  }
  // This function save data search state after submit button click
  const getSearch = e => {
    e.preventDefault() // Stop Page refresh
    setQuery(search);
    setSearch("")// It is clean the search bar after search
  }

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
        <button className="search-button" type="submit">Search</button>
      </form>
      <div className="recipes">
      {recipes.map(recipe=>
        <Recipes
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}/>
        )}
        </div>
  </div>
  )   
}

export default Home