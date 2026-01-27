// ui.js
import { getAllCars } from './bunker.js';

const bunkerList = document.getElementById('bunker-list');

function getSpeedClass(speed) {
  if (speed < 120) return 'speed-slow';
  if (speed < 200) return 'speed-medium';
  return 'speed-fast';
}

function getPriceClass(price) {
  if (price < 20000) return 'price-cheap';
  if (price < 60000) return 'price-normal';
  return 'price-expensive';
}

export function renderBunker() {
  bunkerList.innerHTML = '';


  cars.forEach((car, index) => {
    const div = document.createElement('div');
    div.className = 'car';

    div.innerHTML = `
         <strong>${index + 1}. ${car.brand} ${car.model}</strong>
         <p>Speed: ${car.speed} km/h</p>
         <p>Year: ${car.year}</p>
         <p>Price: ${car.price}</p>
         <button data-id="${car.id}">Delete</button>
         `;

    getAllCars();
    bunkerList.appendChild(div);
  });
}
