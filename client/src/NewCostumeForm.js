import React, {useState} from "react";

function NewPlantForm({addCostume}) {
  const [formData, setFormData] = useState({
    costume: '',
    image: '',
    person: '',
  })

  function handleChange(e){
    const newCostume = e.target.name
    let value = e.target.value

    setFormData({
      ...formData,
      [newCostume]:value,
    })

    console.log(formData)
  }

  function handleSubmit(e){
    e.preventDefault()
    addCostume(formData)
  }

  return (
    <div className="new-costume-form">
      <h2>New Costume</h2>
      <form>
        <input 
          type="text" 
          name="image" 
          placeholder="Image URL" 
          value={formData.image}
          onChange={handleChange}/>
        <input 
          type="text" 
          name="person" 
          placeholder="Your name" 
          value={formData.person}
          onChange={handleChange}/>
          <input 
          type="text" 
          name="costume" 
          placeholder="Costume name" 
          value={formData.costume} 
          onChange={handleChange}/>
        <button type="submit" onClick={handleSubmit}>Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;