// application brain 

import { createCar, deleteCar } from "./bunker.js"; 
import { renderBunker } from "./ui.js";

const form = document.getElementById('car-form');
const bunkerList = document.getElementById('bunker-list');


form.addEventListener('submit', (event) =>{
      console.log('SUBMIT EVENT FIRED');
      event.preventDefault();

      const formData = new FormData(form);

      createCar(
         formData.get('brand'),
         formData.get('model'),
         formData.get('speed'),
         formData.get('year'),
         formData.get('price'),
      );

      form.reset();
      renderBunker();
});

bunkerList.addEventListener('click', (event) => {
   if (event.target.tagName === 'BUTTON') {
      const index = event.target.dataset.index;
      deleteCar(index);
      renderBunker();
   }
});