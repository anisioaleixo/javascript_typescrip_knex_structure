import express from 'express'

import { UserController } from './controller/UserController';

const userController = new UserController();

const routes = express.Router();


routes
    //Initi da aplicação
    .get('/', (req,res)=>{
        res.json({
            "name": "javascript_typescrip_knex_structure",
            "repository": "https://github.com/anisioaleixo/javascript_typescrip_knex_structure.git",
            "author": "Anisio Aleixo",
        })
    })
    //.get('/users',userController.index)
    //.post('/users',userController.create)
    //.delete('/users/:id',userController.delete)
    //.put('/users/:id',userController.update)

export default routes;