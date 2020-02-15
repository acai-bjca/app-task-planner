import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function TaskCard(props) {
  const classes = useStyles();
  
  //const taskC = this.props.taskC;
  console.log("Entro a tarea");
  console.log("Tarea objeto: "+ JSON.stringify(props.task));
  console.log("Descripcion objeto: "+ props.task.description);

  return (    
    <Card className={classes.root}>
      <CardActionArea>        
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.task.description}
          </Typography>
          <Typography variant="h6" color="textSecondary" component="p">
            {props.task.status} - {props.task.dueDate}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.task.responsible.name}<br/>
            {props.task.responsible.email}
          </Typography>
        </CardContent>
      </CardActionArea>      
    </Card>
  );
}