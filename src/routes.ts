import express from 'express'

import { UserController } from './controller/UserController';

const userController = new UserController();

const routes = express.Router();


routes.get('/', (req,res)=>{
    res.json({
        "name": "javascript_typescrip_knex_structure",
        "repository": "https://github.com/anisioaleixo/javascript_typescrip_knex_structure.git",
        "author": "Anisio Aleixo",
    })
});

export default routes;