import {Car} from '.'
export class IcreateCar {
    create: (car:Car) => Promise<any>
}
export class IreadCar {
    read:(id) => Promise<any>
}
export class IupdateCar{
    update: (id) => Promise<any>
}
export class IdeleteCar{
    delete: (id) => Promise<any>
}
export class IindexCar{
    index: () => Promise<Car[]>    
} 