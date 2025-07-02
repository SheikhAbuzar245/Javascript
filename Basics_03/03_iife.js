// Immediately Invoked Function Expressions (  IIFE )

// Semicolon is MUST 

(function one(){
    console.log(`DB Connected`);
})();



((name) => {
    console.log(`DB Connected ${name}`);
    
})("My SQL");