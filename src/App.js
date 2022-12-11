import "./styles.css";
import { useState } from "react";

export default function App() {
  const [randoMeal, setRandoMeal] = useState({});

  function fetchRandomMeal() {
    fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
      .then((response) => response.json())
      .then(setRandoMeal);
  }

  return (
    <div className="App">
      <h1>
        <div>Random Recipe Finder</div>
      </h1>
      <p id="space"></p>
      <button onClick={() => fetchRandomMeal()}>Click Me!</button>
      <h2>Try This Random Recipe:</h2>
      {randoMeal.meals && (
        <div id="allRecipeInfo">
          <h3 id="meal">{randoMeal.meals[0].strMeal}</h3>
          <p id="image">
            <img src={randoMeal.meals[0].strMealThumb} alt="food" />
          </p>
          <h4>Instructions</h4>
          <p id="instructions">{randoMeal.meals[0].strInstructions}</p>
        </div>
      )}
    </div>
  );
}
