import React, {useState} from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';



function HalloweenCard({name, image, person, id, vote, handleDelete}) {

  function vote(voteCount){
    fetch("/costumes", {
      method: "UPDATE",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        vote: vote+1
      })
    })
  }




  return (
    <Grid item key={name} xs={12} sm={6} md={4} >
                <Card
                margin= 'auto'
                  sx={{ 
                    height: '100%', 
                    display: 'flex', 
                    flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    height= "550"
                    width='100%'
                    objectFit='cover'
                    image={image}
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {name}
                    </Typography>
                    <Typography>
                      Made by {person}
                    </Typography>
                    <Typography>
                      Votes: {vote}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Like</Button>
                    <Button size="small">Dislike</Button>
                    <Button size="small" onClick={() => {handleDelete(id)}}>Delete</Button>
                  </CardActions>
                </Card>
              </Grid>
  );
}

export default HalloweenCard;