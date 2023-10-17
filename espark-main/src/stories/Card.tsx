import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {Button} from "./Button"
interface MediaCardProps {
     /**
     * image
     */
    name:string;
    /**
     * image
     */
    source:string;
    /**
     * Text
     */
    children:string;
    
  }
  
export default function MediaCard({name,source,children}:MediaCardProps) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={source}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {children}
        </Typography>
      </CardContent>
      <CardActions>
      </CardActions>
   
      <Button type='outlined'  label='test' action={async()=>{console.log("test")}} /> 
      <Button type='filled'  label='test' action={async()=>{console.log("test")}} />
   
    </Card>
  );
}