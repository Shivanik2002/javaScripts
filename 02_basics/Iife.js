// Immediately Invoked Function Experssions IIFE)

(function chai(){
    console.log('DB CONNECTED');
})();

// IIFE using an arrow function
(() => {
    console.log("DB CONNECTED");
    // const name = "Shivi";
    // console.log("Hello, " + name);
})();

((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})("Shivi");
