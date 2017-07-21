// This is an anonymous function that wraps your code and localizes the variables
// to 'module1'
const module2 = (() => {

    // Since you loaded module1 before this, you can actually reference it here
    module1.greeting();

    // or create new functions
    function combineStrings (str1, str2) {
        let combined = str1.concat(str2);
        console.log(combined);
    }

    // again, just return the functions you want available outside of this module
    return {
        combineThese: combineStrings
    };

})();