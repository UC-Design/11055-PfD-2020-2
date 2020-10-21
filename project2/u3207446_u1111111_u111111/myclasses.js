class bookCover {

    /* this class returns the bookcover for an isbn number in correct html using the openlibrary api*/

    constructor(isbn, size = 'S', key = 'isbn') {
        this.isbn = isbn;
        this.size = '-' + size;
        this.key = key + "/";
        /* visit https://openlibrary.org/dev/docs/api/covers */
        this.url_a = '<img src="http://covers.openlibrary.org/b/';
        this.url_b = '.jpg" />';
        this.number = 17;
    }

    display() {
        // return the correct html for this book cover
        return this.url_a + this.key + this.isbn + this.size + this.url_b;
    }

    getisbn() {
       return this.isbn; 
    }

}

////////////////////////////////////////////////////////////////////

class bookDetail {

      /* this class returns the book details for an isbn number in correct html using the openlibrary api*/

      constructor(isbn, size = 'S', key = 'isbn') {
        this.isbn = isbn;
        this.bc = new bookCover(isbn, size, key);
        /* visit https://openlibrary.org/dev/docs/api/books */
        this.bookUrl_a = 'https://openlibrary.org/api/books?bibkeys=';
        this.key = key.toUpperCase() + ":";
        this.bookUrl_b = '&format=json&jscmd=data';
        /* 'https://openlibrary.org/api/books?bibkeys=ISBN:0201558025&format=json' */
        this.detail = "";
    } 

    async getDetail() {
        let dets = await getBookDetail(this.bookUrl_a, this.key, this.isbn, this.bookUrl_b);
        this.detail = dets[this.key + this.isbn];


    }

    getCover(){
        return this.bc.display();
    }

    getTitle(){
        // get the book title from the json object
        return this.detail['title'];
    }

    getSubTitle(){
        // get the book sub-title from the json object
        if(this.detail['subtitle'] == null){
            return "Sorry not available"
        }
        else{
            return this.detail['subtitle'];
        }
        
    }

    getAuthor(){
        // get the author from the json object
        return this.detail['authors'][0]['name'];   
    }

    getPublisher(){
        // get the publisher from the json object
        return this.detail['publishers'][0]['name']; 
    }

    getNumberOfPages(){
        // get the number of pages from the json object
        if(this.detail['number_of_pages'] == null){
            return "Sorry Simon, not available :)"
        }
        else{
            return this.detail['number_of_pages'];
        }
    }

    getPublishDate(){
        // get the book publish date from the json object
        return this.detail['publish_date'];
    }

}

async function getBookDetail(url_a, key, isbn, url_b) {
    // get the url and put it into the this.detail property
    let url = url_a + key + isbn + url_b;

    try {
        const resp = await fetch(url);
        const jres = await resp.json();
        console.log(jres);

        return jres    
        
    } catch (err) {
        throw err;
    }

}

async function getMovieDetail(url_a, key, isbn, url_b) {
    // get the url and put it into the this.detail property
    let url = url_a + key + isbn + url_b;

    try {
        const resp = await fetch(url);
        const jres = await resp.json();
        console.log(jres);

        return jres    
        
    } catch (err) {
        throw err;
    }

}



//////////////////////////////////////////////////////////////////////








