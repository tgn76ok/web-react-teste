import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {  CardActionArea, CardActions } from '@mui/material';

export default function MultiActionAreaCard(props) {
  return (
    <Card sx={{ maxWidth: 345 }} className='m-2'>
      <CardActionArea>
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            

            {props.Dia}º Dia – Caderno {props.Caderno} – Azul – Aplicação Regular

          </Typography>
          <Typography variant="body2" color="text.secondary">
          Você é do tamanho do seu sonho
          </Typography>
        </CardContent>
      </CardActionArea>

      
      <CardActions>
          <a href={props.LinkProva}>Prova</a>
          <a href={props.linkGabarito}>Gabarito</a>
          
        
      </CardActions>
    </Card>
  );
}