import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HalloweenPage from "./HalloweenPage";
import Header from "./Header";

function App() {
  const [count, setCount] = useState(0);
  const [plants, setPlants] = useState([])
  const [itemsToRender, setItemsToRender] = useState([])
  // const [searchItem, setSearchItem] = useState('')


  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  function addCostume(formData){
    console.log(formData.costume)
    fetch("/costumes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        person: formData.person,
        img_url: formData.image,
        name: formData.costume
      })
    })
    .then((r)=>r.json())
    .then((data) => {
      setPlants([...plants, data])
    })
  }


  useEffect(() => { 
    fetch("/costumes")
    .then((r)=>r.json())
    .then((data) => {
      setPlants(data)
      setItemsToRender(data)
    })
  }, []);

  // function setSearchItemInApp(searchItem){
  //   setSearchItem(searchItem)
  // }


// useEffect(() => {
//   let searchedPlants = plants.filter((plant) => {
//     return plant.name.includes(searchItem)
//   })
//   setItemsToRender(searchedPlants)
// }, [searchItem, plants])

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/testing">
            <h1>Test Route</h1>
          </Route>
          <Route path="/">
            <HalloweenPage 
            itemsToRender={itemsToRender}
            addCostume={addCostume}
            />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;