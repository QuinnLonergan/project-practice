import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HalloweenPage from "./HalloweenPage";
import Header from "./Header";

function App() {
  const [count, setCount] = useState(0);
  const [plants, setPlants] = useState([])
  const [itemsToRender, setItemsToRender] = useState([])

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);


  useEffect(() => { 
    fetch("/costume")
    .then((r)=>r.json())
    .then((data) => {
      setPlants(data)
      setItemsToRender(data)
    })
  }, []);


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
            />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;