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

  const cars = getAllCars();

  cars.forEach((car, index) => {
    const div = document.createElement('div');
    div.className = 'car';

    div.innerHTML = `
         <div class="car-header">
            <span class="car-title">${car.brand} ${car.model}</span>
         </div>

         <div class="badges">
            <span class="badge ${getSpeedClass(car.speed)}">
               ${car.speed} km/h
            </span>

            <span class="badge ${getPriceClass(car.price)}">
               $${car.price}
            </span>
         </div>

         <div class="car-meta">Year: ${car.year}</div>
                     <button class="delete-btn" data-index="${index}">Delete</button>

         `;


    bunkerList.appendChild(div);
  });
}
