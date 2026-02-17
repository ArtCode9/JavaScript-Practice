// exporting modules
 console.log(`Exporting data inside module`);

const shippingCart = 10;
export const cart = [];

export const addToCart = function(product, quantity) 
{
   cart.push({product , quantity});
   console.log(`${product} ${quantity} just add to your cart`);
};

const totalPrice = 235;
const totalQuantity = 23;

export { totalPrice as tp , totalQuantity as tq };

// default  function of module
export default function ( games , version) {
   cart.push({games , version});
   console.warn(`${games} ${version} added to cart`);
}