//objeto
/* import express from 'express'; */
const express = require('express');
const morgan = require('morgan');
//servidor
const app = express();
//puerto
const port = 3000;

app.all('/main', (req, res, next)=> {
    console.log("Mira yo pase por aca...")
    next();
})

app.use(morgan('common'))

//rutas
//Ruta_1
app.get('/', (req, res)=> res.send("Bienvenidos al servidor por defecto"))
//Ruta_2
/* app.get('/home', (req, res)=> res.send("Bienvenidos!!Esta es la ruta Home!!!"))
//Ruta_3
app.get('/main', (req, res)=> res.send("Bienvenidos!!Esta es la ruta Main!!!"))
//Ruta_4
app.get('/contact', (req, res)=> res.send("Bienvenidos!!Esta es la ruta de Contact"))
//mensaje de la consola */

app.post('/home', (req, res)=> res.send("Bienvenidos al servidor del POST"))
app.put('/main', (req, res)=> res.send("Bienvenidos al servidor del PUT"))
app.delete('/contact', (req, res)=> res.send("Bienvenidos al servidor DELETE "))




app.listen(port, ()=> console.log(`Mira el servido esta activo y es el puerto ${port}`))

