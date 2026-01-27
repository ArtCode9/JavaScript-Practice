const STORAGE_KEY = 'carBunker';

let carBunker = loadFromStorage();

// ----------------- helper ----------------------
function saveToStorage() {
   localStorage.setItem(STORAGE_KEY, JSON.stringify(carBunker)); 

   //  JSON.stringify = convert JS to String
   // localStorage = only store string
}

function loadFromStorage(){
   const stored = localStorage.getItem(STORAGE_KEY);
   return stored ? JSON.parse(stored) : [];

   //  JSON.parse = convert String to JS
}

// const carBunker = [];

export function createCar(brand, model, speed, year, price) {
   const car = {
      id: crypto.randomUUID(), // this tag give each car a real ID
      brand,
      model,
      speed: Number(speed),
      year: Number(year),
      price: Number(price)
   };
   
   carBunker.push(car);
   saveToStorage();
   
   return car;
}

export function getAllCars() {
   return [...carBunker]; // prevent external mutation and protect your state
}

export function deleteCar(id){
   carBunker = carBunker.filter(car => car.id !== id);
   saveToStorage();
}

// Only this module is allowed to touch the bunker array

export function clearBunker () {
   carBunker = [];
   saveToStorage();
}