const carBunker = [];

export function createCar(brand, model, speed, year, price) {
   const car = {
      brand,
      model,
      speed,
      year,
      price
   };
   
   carBunker.push(car);
   
   return car;
}

export function getAllCars() {
   return carBunker;
}

// Only this module is allowed to touch the bunker array

export function deleteCar(index) {
  carBunker.splice(index, 1);
}