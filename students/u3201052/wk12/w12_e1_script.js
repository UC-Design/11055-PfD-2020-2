/* Week 12 Exercise notes
u3201052
October 19 */

// Object orientation

/* writing a class

*/

// this is the list of isbn numbers we want information for
var isbnarr = ['0261102214', '9780547773704']; //array variables
// this is the list of books we are going to create
var bookarr = [] //this is the second array

// the normal for loop we have looked at so far
for (let i = 0; i < isbnarr.length; i++) { // isbnarr.length means 'length of isbn array'
    bookarr.push(new bookCover(isbnarr[i], "M")); //each of the isbn arrays will create new object from the book cover class, then bookcover class will have a new constructor
}

// the for (variable of iterable) will loop through each item in an array
for (x of bookarr) {
    document.write(x.display());
}