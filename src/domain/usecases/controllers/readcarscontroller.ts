import { Request, Response } from "express";
import {readCars} from "../crudCars"

export class ReadCarController {
    constructor(
      private readcarusecase: readCars,
    ) {}
    
    async handle(request: Request, response:Response):Promise<Response>{
        const id = request.params
        try{
            await this.readcarusecase.execute(id).then((result)=>{
                return response.status(200).json(result); 
            })
           

        }catch(error){
            return response.status(400).json({
                message: error.message || 'Unexpected error.'
        })
        
    }
    }
}
