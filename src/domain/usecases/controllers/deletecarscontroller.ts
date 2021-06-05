import { Request, Response } from "express";
import {deleteCars} from "../crudCars"

export class DeleteCarController {
    constructor(
      private deletecarusecase: deleteCars,
    ) {}
    
    async handle(request: Request, response:Response):Promise<Response>{
        const id = request.params
        try{
            await this.deletecarusecase.execute(id)
            return response.status(200).send();  

        }catch(error){
            return response.status(400).json({
                message: error.message || 'Unexpected error.'
        })
        
    }
    }
}
