import { Request, Response } from "express";
import { Car } from "../../entities";
import {indexCars} from "../crudCars"

export class IndexCarsController {
    constructor(
      private indexcarsusecase: indexCars,
    ) {}
    
    async handle(request: Request, response:Response):Promise<any>{
        try{
            await this.indexcarsusecase.execute().then((result)=>{
                return response.status(200).json(result)
            })
             

        }catch(error){
            return response.status(400).json({
                message: error.message || 'Unexpected error.'
        })
        
    }
    }
}
