import {CarcreateRepo,CarreadRepo, CarupdateRepo,CardeleteRepo,CarindexRepo} from "../../infra/repositories/"
import {createCar,readCars,updateCars,deleteCars,indexCars} from './crudCars'
import {CreateCarController, ReadCarController, UpdateCarController, IndexCarsController, DeleteCarController }
 from "./controllers/"

 //create car
const carCreateRepository = new CarcreateRepo()
const createcar = new createCar(carCreateRepository)
const createcarcontrol = new CreateCarController(createcar)

//read car
const carReadRepository = new CarreadRepo()
const readcar = new readCars(carReadRepository)
const readcarcontrol = new ReadCarController(readcar)

// update car

const carUpdateRepository = new CarupdateRepo()
const updatecar = new updateCars(carUpdateRepository)
const updatecarcontrol = new UpdateCarController(updatecar)

// delete car

const carDeleteRepository = new CardeleteRepo()
const deletecar = new deleteCars(carDeleteRepository)
const delecarcontrol = new DeleteCarController(deletecar)

// index cars

const carIndexRepository = new CarindexRepo()
const indexcar = new indexCars(carIndexRepository)
const indexcarcontrol = new IndexCarsController(indexcar)

export {createcarcontrol, readcarcontrol, updatecarcontrol, delecarcontrol, indexcarcontrol}



