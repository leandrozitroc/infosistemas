import {knex} from "../data/knex"
import {IreadCar,IcreateCar,IupdateCar,IdeleteCar,IindexCar} from "../../domain/entities/"
import { Car, Icars } from "../../domain/entities"
import { request, response } from "express"


export class CarcreateRepo implements IcreateCar {
    
    async create (car: Car){
        const carcreate = new Icars(car)
        const save = knex.insert(carcreate)
                        .into("cars")
            
    }
}
export class CarreadRepo implements IreadCar {
        async read (id){
        const carread = knex.select().where({id:id})
        return carread

    }
}

export class CarupdateRepo implements IupdateCar {
    async update(id){
        const data = request.body
        const cardataupdate = knex.update(data).where({id:id}).from('cars')
        return response.status(200)

    }
}
export class CardeleteRepo implements IdeleteCar {
     async delete (id){
        const cardelete = knex.del().where({id:id}).from('cars')
        return response.status(200)

    }
}
export class CarindexRepo implements IindexCar {
        async index (){
        const indexCar = knex.select().from('cars')
        return indexCar
     }
}




