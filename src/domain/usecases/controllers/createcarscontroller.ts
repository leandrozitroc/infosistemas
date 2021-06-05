import { Request, Response } from "express";
import {createCar} from "../crudCars"

export class CreateCarController {
    constructor(
      private createcarusecase: createCar,
    ) {}
    
    async handle(request: Request, response:Response):Promise<Response>{
        const {id, placa, renavam, marca, modelo, ano} = request.body
        try{
            await this.createcarusecase.execute({
                id, placa, renavam, marca, modelo, ano
            })
            return response.status(201).send();  

        }catch(error){
            return response.status(400).json({
                message: error.message || 'Unexpected error.'
        })
        
    }
    }
}
