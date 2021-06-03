class Vehicle {
  constructor(make,model,year){
    this.make = make;
    this.model = model;
    this.year = year;
  }
  honk(){
    return 'Beep';
  }
  toString(){
    const {make,model,year} = this;
    return `The vehicle is a ${make} ${model} from ${year}`;
  }
};



let myFirstVehicle = new Vehicle('Honda',"Monster Truck",1999);

class Car extends Vehicle {
  constructor(make,model,year){
    super(make,model,year);
    this.numWheels = 4;
    
  }
}

let myFirstCar = new Car('toyota','corrola',1997); 

class motorCycle extends Vehicle {
  constructor(make,model,year){
   super(make,model,year);
   this.numWheels = 2;
  }
  revEngine() {
    return 'VROOM!!!!'
  }
}

let myFirstBike = new motorCycle('Honda','NightHawk',2000);



class Garage {
 constructor(capacity){
   this.vehicles = [];
   this.capacity = capacity;
   
 };
add(newVehicle){
 const {vehicles,capacity} = this;
 if((newVehicle instanceof Vehicle)){
   vehicles.push(newVehicle);
 } else {return 'Vehicles Only Please'};
 if(vehicles.length >= capacity){
   return 'sorry we are full';
 }
 
}




}


let newGarage = new Garage(2);


