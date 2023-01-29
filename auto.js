class  vehicle {
    constructor (make, model, year,passingers,cargoroom){
    this.make=make
    this.model=model
    this.year=year
    this.passingers=passingers
    this.cargoroom= 100 }
    cargoroom () {
        if (this.passingers>=4){
           return cargoroom + 20%
           console.log {``};           
        }
        else {
            console.log {`no extra cargo` };

        }        
    }
    start ( ){
        console.log (`engine started`)

    }
    off (){
        console.log (`engine stop`)
    }
    

}