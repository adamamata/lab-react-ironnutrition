import './App.css';
import foodsData from './foods.json';
import { useState } from 'react';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import { v4 as uuidv4 } from 'uuid';


function App() {
  const [foods, setFoods] = useState(foodsData);

  const addFood = (newFood) => {
    const foodsCopy = [ ...foods ]; 
    foodsCopy.push(newFood);
    setFoods(foodsCopy);
  }
  
  const deleteFood = (foodName) => {
    const filtered = foods.filter((food) => food.name !== foodName);
    setFoods(filtered); 
  }

  return (
    <div className="App">
      <AddFoodForm addFood={addFood}/> 
      {foods.map(food => <FoodBox deleteFood={deleteFood} food={food} key={uuidv4} />)}
    </div>
  );
}

export default App;