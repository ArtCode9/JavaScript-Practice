// Exporting modules

// this code here executed first before nay cart in the importing module

console.log(`Exporting modules`);

const shippingCost = 10; // these const are scoped to the current module basically so we can use them only here 
const cart = [];
export const games = [];

// keep in mind export always need to happen in top level cart
export const addToCart =  function (product, quantity)
{
   cart.push({ product , quantity });
   console.log(`${quantity} ${product} added to Cart.`)   
}

const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity as tq }; // i can change the name of const and export it


//  now we want to use default Exports when we only want to export one thing per modules
export default  function (ga, ver) {  // no name req
      games.push({ ga, ver});
      console.warn(`${ga} with the Version ${ver} is add in your playlist`);
}