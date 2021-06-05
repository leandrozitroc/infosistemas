import {Car, IreadCar,IcreateCar,IupdateCar,IdeleteCar,IindexCar} from '../entities'


export class createCar {
    constructor(private createcars:IcreateCar){}

    async execute(data:Car){
        await this.createcars.create(data)
    }
}

export class indexCars{
    constructor(private indexcars:IindexCar){}
    async execute(){
       await this.indexcars.index()
    }
}

export class readCars{
    constructor(private readcars:IreadCar){}
    async execute(id){
       await this.readcars.read(id)
    }
}

export class updateCars{
    constructor(private updatecars:IupdateCar){}
    async execute(id){
        await this.updatecars.update(id)
    }
}

export class deleteCars{
    constructor(private deletecars:IdeleteCar){}
    
    async execute(id){
        await this.deletecars.delete(id)
    }
}