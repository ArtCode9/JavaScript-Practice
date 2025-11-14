'use strict'

// const btn = document.querySelector('.btnCountry');
const text = document.getElementById('text');

const request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.com/v3.1/name/portugal');
request.send();


request.addEventListener('load', function(){
 const [data] = JSON.parse(this.responseText);
 console.log(data);

   
});
// =======================================