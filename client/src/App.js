import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HalloweenPage from "./HalloweenPage";
import Header from "./Header";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';



const theme = createTheme(
  {
    palette: {
      type: 'light',
      primary: {
        main: '#f57c00',
      },
      secondary: {
        main: '#000000',
      },
      background: {
        default: '#000000'
      }
    }
  }
);

function App() {
  const [plants, setPlants] = useState([])
  const [itemsToRender, setItemsToRender] = useState([])
  const [render, setRender] = useState(true);

  function handleDelete(id){
    fetch(`/costumes/${id}`, {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
            "Content-Type": "application/json"
        }
    })
    setRender(!render)
}



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
  }, [render]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
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
            handleDelete={handleDelete}
            />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;