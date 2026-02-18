// ex:1 Authentication + Role + Email verified
let isLoggedIn = true;
let role = "admin";
let isEmailVerified = true;

if(isLoggedIn) {
   if(isEmailVerified) {
      if(role === "admin") {
         console.log(`Full access granted`);
      } else {
         console.log(`Limited access`);
      }
   } else {
      console.log(`Verify your email first`);
   }
} else {
   console.log(`Please login`);
}
//-------------------------------------------------------------------
// ex2:  E-commerce Checkout Validation
let cartTotal = 150;
let hasShippingAddress = true;
let paymentMethod = "card";

if(cartTotal > 0) {
   if(hasShippingAddress) {
      if(paymentMethod === "card") {
         console.warn(`Processing card payment....`);
      } else {
         console.warn(`Unsupported payment method`);
      }
   }else {
      console.log(`Add shipping address`);
   }
} else {
   console.log("Cart is Empty");
}
//-------------------------------------------------------------------
// ex3: Age + License + Insurance(driving permission)
let age = 22;
let hasLicense = true;
let hasInsurance = false;

if(age >= 18) {
   if(hasLicense) {
      if(hasInsurance) {
         console.log(`You can legally drive`);
      } else {
         console.log(`Insurance required`);
      }
   } else {
      console.log(`License required`);
   }
} else {
   console.log(`too young to drive`);
}
//-------------------------------------------------------------------
// ex4: salary tax calculation
let salary = 6000;
let isResident = true;

if(salary > 0) {
   if(isResident) {
      if(salary <= 3000) {
         console.log("Tax: 5%");
      } else {
         if(salary <= 7000) {
            console.log(`Tax: 10%`);
         }else {  
            console.log(`Tax: 20%`);
         }
      }
   } else {
      console.log(`Flat Tax: 25%`);
   }
} else {
   console.log(`Invalid salary`);
}
//-------------------------------------------------------------------
// ex5: Server access control (IP + Token + expiration)
let ipAllowed = true;
let token = "abc123";
let tokenExpired = false;

if(ipAllowed) {
   if(token) {
      if(!tokenExpired) {
         console.log(`Access to api granted`);
      } else {
         console.log(`Token expired`);
      }
   } else {
      console.log(`token missing`);
   }
} else {
   console.log(`IP not allowed`);
}
//-------------------------------------------------------------------
// ex6: student grading system
let score = 85;
let attendance = 90;

if(score >= 50) {
   if(attendance >= 75) {
      if(score >= 90) {
         console.log(`Grade : A`);
      } else if (score >= 75) {
         console.log(`Grade : B`);
      } else {
         console.log(`Grade : c`);
      }
   } else {
      console.log(`Failed due to attendance`);
   }
} else {
   console.log(`Failed due to low score`);
}
//-------------------------------------------------------------------
// ex7: Bank withdrawal validation
let balance = 1000;
let withdrawalAmount = 300;
let dailyLimit = 500;

if(withdrawalAmount > 0) {
   if(withdrawalAmount <= balance) {
      if(withdrawalAmount <= dailyLimit) {
         console.log(`Withdrawal successful`);
      } else {
         console.log(`Exceeds daily limit`);
      }
   } else {
      console.log(`insufficient balance`);
   }
} else {
   console.log(`Invalid amount`);
}
//-------------------------------------------------------------------
// ex8: Subscription Access (Plan + expiry + Feature)
let plan = "pro";
let isExpired = false;
let feature = "analytics";

if(!isExpired) {
   if(plan === "pro") {
      if(feature === "analytics") {
         console.log("Access to analytics granted");
      } else {
         console.log(`Feature not available`);
      }
   } else {
      console.log(`Upgrade required`);
   }
} else {
   console.log(`Subscription expired`);
}
//-------------------------------------------------------------------
// ex9: Multi-Step Form validation
let username = "John";
let password = "123456";
let confirmPassword = "123456";

if(username) {
   if(password.length >= 6) {
      if(password === confirmPassword) {
         console.log(`registration Successful`);
      } else {
         console.log(`Password do not match`);
      }
   }  else {
      console.log(`Password too short Must be 6 char`);
   }
} else {
   console.log(`Username Not found`);
}
//-------------------------------------------------------------------
// ex10: Product Discount system (VIP + Quantity + Coupon)
let isVIP = true;
let quantity = 5;
let couponCode = "SAVE10";

if (quantity > 0) {
   if(isVIP) {
      if (couponCode === "SAVE10") {
         console.log("total discount: 20%");
      } else {
         console.log(`VIP discount : 10%`);
      }
   } else {
      if(couponCode === "SAVE10") {
         console.log(`Discount: 10`);
      } else {
         console.log(`No Discount`);
      }
   }
} else {
   console.log(`Invalid quantity`);
}
