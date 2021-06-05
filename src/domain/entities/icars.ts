export class Icars {
   
    
    id: number
    placa: string
    renavam: number
    chassi: string
    modelo: string
    marca: string
    ano: number
  
    constructor(props) {
      Object.assign(this, props);
    }   
}