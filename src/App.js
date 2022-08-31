import './App.css';
import foodsData from './foods.json';
import { useState } from 'react';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';

function App() {
  const [foods, setFoods] = useState(foodsData);

  //addFood function
  const addFood = (newFood) => {
    const foodsCopy = [ ...foods ]; 
    foodsCopy.push(newFood);
    setFoods(foodsCopy);
  }
  
  return (
    <div className="App">
      <AddFoodForm addFood={addFood}/>
      {foods.map(food => <FoodBox food={food}/>)}
    </div>
  );
}

export default App;