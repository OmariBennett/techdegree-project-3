'use strict';
const express = require('express');
const app = express();

//Serving static file to express
app.use(express.static('public'));

//GET / page
app.get('/', ( req, res )=> {
	res.render('index.html');
});

//This expression will evaluate to 3000 unless we're deploying the out to a production environment.
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> {
	console.log(`Sever is running port ${PORT}!`);
});