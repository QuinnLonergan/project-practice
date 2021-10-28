import React from "react";
import NewCostumeForm from "./NewCostumeForm";
import HalloweenList from "./HalloweenList";
// import Search from "./Search";

function HalloweenPage({itemsToRender, addCostume}) {
  return (
    <main>
      {/* <NewPlantForm addPlant={addPlant}/>
      <Search setSearchItemInApp={setSearchItemInApp} 
      /> */}
      <NewCostumeForm addCostume={addCostume}/>
      <HalloweenList itemsToRender={itemsToRender}/>
    </main>
  );
}

export default HalloweenPage;