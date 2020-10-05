import { Request, Response } from 'express';

import db from '../database/connection';

export class UserController{

    async index(req: Request, res: Response) {
      const users = await db.select().from('users').timeout(1000);   
      return res.json(users);
    } 

    async create(req: Request, res: Response) {
      const { name } = req.body;
      try {
        await db('users').insert({name});
        return res.status(201).send();        
      } catch(error) {
        return res.status(400).send();
      }      
    }
    delete(){}
    update(){}

    }
   
      
   

