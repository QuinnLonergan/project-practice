import React from "react";
// import NewCostumeForm from "./NewCostumeForm";
import HalloweenList from "./HalloweenList";
// import Search from "./Search";

function HalloweenPage() {
  return (
    <main>
      {/* <NewPlantForm addPlant={addPlant}/>
      <Search setSearchItemInApp={setSearchItemInApp} 
      /> */}
      <HalloweenList itemsToRender={itemsToRender}/>
    </main>
  );
}

export default HalloweenPage;