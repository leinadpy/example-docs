import express from 'express';
const app = express();

/**
 * @module api
 */
/**
 * Index Routes
 * 
 * @name index
 * @path {GET} /
 * 
 */
app.get('/', (req, res) => res.send("Welcome"))

/**
 * Index Routes
 * 
 * @name users
 * @path {POST} /users
 * 
 */
app.post('/users', (req, res) => res.send("Welcome"))

/**
 * Products Routes
 * 
 * @name products
 * @path {DELETE} /products
 * 
 */
app.delete('/products', (req, res) => res.send("Welcome"))

/**
 * Login Routes
 * 
 * @name signin
 * @path {POST} /
 * 
 */
app.post('/signin', (req, res) => res.send("Welcome"))
