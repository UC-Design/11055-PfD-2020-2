/* Always write a comment at the top of your file saying what is for
you might even include your name and the date */

// Object orientation

/* writing a class

*/

class bookCover {

    /* this class returns the bookcover for an isbn number in correct html using the openlibrary api*/

    constructor(isbn, size = 'S', key = 'isbn') {
        this.isbn = isbn;
        this.size = '-' + size;
        this.key = key + "/";
        /* visit https://openlibrary.org/dev/docs/api/covers */
        this.url_a = '<img src="http://covers.openlibrary.org/b/'
        this.url_b = '.jpg" />'
    }

    size(val = "S") {
        this.size = '-' + val;
    }

    display() {

        // return the correct html for this book cover
        return this.url_a + this.key + this.isbn + this.size + this.url_b;
        
    }

}


class bookDetail {

    /* this class returns the book details for an isbn number in correct html using the openlibrary api*/

    constructor(isbn, size = 'S', key = 'isbn') {
        this.isbn = isbn;
        this.key = key.toUpperCase() + ":";
        this.bc = new bookCover(isbn, size, key);
        /* visit https://openlibrary.org/dev/docs/api/books */
        this.url_a = 'https://openlibrary.org/api/books?bibkeys=';
        this.url_b = '&format=json&jscmd=data';
        /* 'https://openlibrary.org/api/books?bibkeys=ISBN:0201558025&format=json' */
        this.detail = "";
    }

    size(val = "S") {
        this.bc.size(val);
    }

    cover() {
        return this.bc.display();
    }
    
    async getDetail() {

        let dets = await getBookDetail(this.url_a, this.key, this.isbn, this.url_b);
        this.detail = dets[this.key + this.isbn];

    }

    getAuthor() {
        // get the author from the json object, if more than one author - use a forloop
        return this.detail['authors'][0]['name'];
        
    }


}


async function getBookDetail(url_a, key, isbn, url_b) {
    // get the url and put it into the this.detail property
    let url = url_a + key + isbn + url_b;

    //error handling - expecting that something may cause an error, then we catch and report it
    
    //try these things as long as you don't get an error
    try {
        const resp = await fetch(url); //fetch info from url, then wait till it happens and put it in response
        const jres = await resp.json(); // use response to convert that to a json string, which will be converted to a json object which will be dropped into json response
        console.log(jres); //placed back in console

        return jres    //then returned back into object (above)
        
    } catch (err) {
        throw err;
    }

}