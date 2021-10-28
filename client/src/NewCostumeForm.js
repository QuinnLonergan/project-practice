import React, {useState} from "react";

function NewPlantForm({addCostume}) {
  const [formData, setFormData] = useState({
    name: '',
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
      <h2>New Plant</h2>
      <form>
        <input 
          type="text" 
          name="name" 
          placeholder="Costume name" 
          value={formData.name} 
          onChange={handleChange}/>
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
        <button type="submit" onClick={handleSubmit}>Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;