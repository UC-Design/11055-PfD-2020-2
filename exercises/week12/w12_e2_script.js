/* Always write a comment at the top of your file saying what is for
you might even include your name and the date */

// Object orientation

/* writing a class

*/


// run the application
main();



// we need to be able to wait for processing to happen - so we need to make our function asynchronis
async function main() {

    // this is the list of isbn numbers we want information for
    var isbnarr = ['0261102214', '9780547773704'];
    // this is the list of books we are going to create
    var bookarr = []

    // the normal for loop we have looked at so far
    for (let i = 0; i < isbnarr.length; i++) {
        let book = new bookDetail(isbnarr[i], "M");
        await book.getDetail();
        bookarr.push(book);
    }

    //console.log(bookarr);

    // the for (variable of iterable) will loop through each item in an array
    for (x of bookarr) {
        document.write(x.cover());
        document.write(x.getAuthor()+"</br>");

    }
}











