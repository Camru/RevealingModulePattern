// This is an anonymous function that wraps your code and localizes the variables
// to 'module1'
const module1 = (() => {

    function sayHello () {
        console.log("hello Daniel");
    }

    function getData () {
        let data = [1, 2, 3, 4, 5];

        return data;
    }

    // "reveal" your functions by returning an object with references to them 
    // the key name is whatever you want, the value is the name of the function
    return {
        greeting: sayHello,
        getData: getData
    };


})();