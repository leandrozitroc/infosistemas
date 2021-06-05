import { Request, Response } from "express";
import {updateCars} from "../crudCars"

export class UpdateCarController {
    constructor(
      private updatecarusecase: updateCars,
    ) {}
    
    async handle(request: Request, response:Response):Promise<Response>{
        const id = request.params
        try{
            await this.updatecarusecase.execute(id)
            return response.status(200).send();  

        }catch(error){
            return response.status(400).json({
                message: error.message || 'Unexpected error.'
        })
        
    }
    }
}
