//el import es si usamos modulos
import express from "express"
import fetch from 'node-fetch'
import cors from 'cors';

const app = express()
app.use(cors());

try{
    app.listen(4000, () => {
        console.log('Servidor encendido');
    })
}catch (err) {
    console.error('Fallo al cargar el server')
}

let response = await fetch('https://api.scryfall.com/cards/random');
let json = await response.json();
console.log(json);

app.get('/', async (req, res) => {
    let response = await fetch('https://api.scryfall.com/cards/random');
    let json = await response.json();
    res.json(json);
});







