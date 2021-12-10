import React, { useState } from "react";
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

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
    <Container className="new-costume-form" component="main" maxWidth="xs">
      <CssBaseline />
      <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
      <Typography component="h1" variant="h5">
            Add a Costume
      </Typography>
      <form>
        {/* <input 
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
          onChange={handleChange}/> */}
          <TextField
              value={formData.image}
              onChange={handleChange}
              margin="normal"
              required
              fullWidth
              id="image"
              label="Image URL"
              name="image"
              autoComplete="image"
              autoFocus
            />
          <TextField
              value={formData.person}
              onChange={handleChange}
              margin="normal"
              required
              fullWidth
              id="person"
              label="Creators name"
              name="person"
              autoComplete="person"
              autoFocus
            />
          <TextField
              value={formData.costume}
              onChange={handleChange}
              margin="normal"
              required
              fullWidth
              id="costume"
              label="Costume name"
              name="costume"
              autoComplete="costume"
              autoFocus
            />
        <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSubmit}
            >
              Add Costume
        </Button>
      </form>
      </Box>
      </Container>
      );
}

export default NewPlantForm;