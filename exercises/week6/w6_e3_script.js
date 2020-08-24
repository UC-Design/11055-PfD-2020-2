/* Always write a comment at the top of your file saying what is for
you might even include your name and the date */

// Arrays and functions

// functions are just you removing duplicate code from your program

// you can write a function to save you writing lots of code
function printme(somethingtoprint) {
    document.write(somethingtoprint);
}

// note that these functions are a little dangerous - what happens if you send product("hello",3) ?
function product(number1, number2){
    return number1 * number2;
}

// you can use functions in functions, with the one inside being done before the one outside
printme(product(3,4));





/* create a function that will take an array and will print that array using the for loop we used before */




