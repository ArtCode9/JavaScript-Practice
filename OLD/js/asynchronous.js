'use strict'

// const btn = document.querySelector('.btnCountry');
// const text = document.getElementById('text');

// const request = new XMLHttpRequest();
// request.open('GET', 'https://restcountries.com/v3.1/name/portugal');
// request.send();


// request.addEventListener('load', function(){
//  const [data] = JSON.parse(this.responseText);
//  console.log(data);

   
// });
// =======================================
// for git remember : 1) git add .   2) git commit -m "your message"  3) git pull  4) git push


// const renderCountry = function (data){
   
// }

// const getCountryAndNeighbour = function (country) {
//    const request = new XMLHttpRequest();
   
//    request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//    request.send();

//    request.addEventListener('load', function () {
//        const  [data] = JSON.parse(this.responseText);
//        console.log(data);

//        renderCountry(data);
//    });

// };

// getCountryAndNeighbour();

// const getCountryData = function (country) {
//    //  country 1
//    fetch(`https://restcountries.com/v3.1/name/${country}`).then(response => response.json())
//             .then(data => {
//                renderCountry(data[0]);
//                const neighbour = data[0].borders[0];

//                if(!neighbour) return;

//                // country 2
//                return fetch
//             }).then(response => response.json())
//             .then(data => renderCountry(data, 'neighbour'));
// };
