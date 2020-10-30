
// Object isbnDetail to store everything for a particular ISBN
class isbnDetail {

    // A constructor for this class
    constructor(isbn) {
        this.isbn = isbn;
        this.coverImageUrl = coverImage(isbn);
    }

    // a getBookInfo function to assign returned json values to book_dets and add "ISBN:" with isbn number and store it in bookDetail variable
    async getBookInfo() {
        let book_dets = await getBookDetail(this.isbn);
        this.bookDetail = book_dets["ISBN:" + this.isbn];
    }

    // a getMovieInfo function to assign returned json values to movie_dets and store it in movieDetail variable
    async getMovieInfo() {
        let movie_dets = await getMovieDetail(this.isbn);
        this.movieDetail = movie_dets;
    }


    // Here we start fetching Book details //

    // Get the book title from the json object
    getTitle() {
        // Check book details are undefined or not and run ELSE if it has some value
        if (this.bookDetail == undefined) {
            return "Not available</br>";
        }
        else {
            return "Book Title: " + this.bookDetail['title'] + "</br>";
        }
    }

    // Get the book sub-title from the json object
    getSubTitle() {
        // Check book details are undefined or not and run ELSE if it has some value
        if (this.bookDetail == undefined) {
            return "Sorry not available" + "</br>";
        }
        else {
            return this.bookDetail['subtitle'] + "</br>";
        }
    }

    // Get the author from the json object
    getAuthor() {
        // Check book details are undefined or not and run ELSE if it has some value
        if (this.bookDetail == undefined) {
            return "Sorry not available" + "</br>";
        }
        else {
            return "Author: " + this.bookDetail['authors'][0]['name'] + "</br>";
        }

    }

    // get the publisher from the json object
    getPublisher() {
        // Check book details are undefined or not and run ELSE if it has some value
        if (this.bookDetail == undefined) {
            return "Sorry not available" + "</br>";
        }
        else {
            return "Publisher: " + this.bookDetail['publishers'][0]['name'] + "</br>";
        }
    }

    // get the number of pages from the json object
    getNumberOfPages() {
        // Check book details are undefined or not and run ELSE if it has some value
        if (this.bookDetail == undefined) {
            return "No. of Pages: Not available for this book" + "</br>";
        }
        else {
            return "No. of Pages: " + this.bookDetail['number_of_pages'] + "</br>";
        }
    }

    // get the book publish date from the json object
    getPublishDate() {
        // Check book details are undefined or not and run ELSE if it has some value
        if (this.bookDetail == undefined) {
            return "Sorry not available" + "</br>";
        }
        else {
            return "Published on: " + this.bookDetail['publish_date'] + "</br>";
        }
    }

    // Here we start fetching Movies details //

    // get the movie ID from the json object
    getMovieID() {
        // Check movie details are undefined or not and run ELSE if it has some value
        if (this.movieDetail == false) {
            return "";
        }
        else {
            return this.movieDetail.id;
        }
    }

    // get the movie title from the json object
    getMovieTitle() {
        // Check movie details are undefined or not and run ELSE if it has some value
        if (this.movieDetail == false) {
            return "Movie Title: " + "Not available" + "</br>";
        }
        else {
            return "Movie Title: " + this.movieDetail.title + "</br>";
        }
    }

    // get the movie release date from the json object
    getReleaseDate() {
        // Check movie details are undefined or not and run ELSE if it has some value
        if (this.movieDetail == false) {
            return "Release Date: " + "Not available" + "</br>";
        }
        else {
            return "Release Date: " + this.movieDetail.release_date + "</br>";
        }
    }

    // get the movie popularity from the json object
    getPopularity() {
        // Check movie details are undefined or not and run ELSE if it has some value
        if (this.movieDetail == false) {
            return "Popularity: " + "Not available" + "</br>";
        }
        else {
            return "Popularity: " + this.movieDetail.popularity + " out of  100" + "</br>";
        }
    }

    // get the production budget from the json object
    getBudget() {
        // Check movie details are undefined or not and run ELSE if it has some value
        if (this.movieDetail == false) {
            return "Budget: " + "Not available" + "</br>";
        }
        else {
            return "Budget: $" + this.movieDetail.budget + "</br>";
        }
    }

    // get the movie revenue from the json object
    getRevenue() {
        // Check movie details are undefined or not and run ELSE if it has some value
        if (this.movieDetail == false) {
            return "Revenue: " + "Not available" + "</br>";
        }
        else {
            return "Revenue: $" + this.movieDetail.revenue + "</br>";
        }
    }

    // get the movie runtime from the json object
    getRuntime() {
        // Check movie details are undefined or not and run ELSE if it has some value
        if (this.movieDetail == false) {
            return "Runtime: " + "Not available" + "</br>";
        }
        else {
            return "Runtime: " + this.movieDetail.runtime + " minutes" + "</br>";
        }
    }

}


// Function to return cover image url
function coverImage(isbn) {
    url_a = '<img src="http://covers.openlibrary.org/b/isbn/';
    size = "-M";
    url_b = '.jpg" />';

    // Combining these values to create a final image url
    return url_a + isbn + size + url_b;

}

// Function which returns back Book details in JSON format
async function getBookDetail(isbn) {

    var url_a = 'https://openlibrary.org/api/books?bibkeys=ISBN:';
    var url_b = '&format=json&jscmd=data';

    // Combining these values to create a final image url
    let url = url_a + isbn + url_b;

    try {
        // assigning fetched values to resp constant
        const resp = await fetch(url);
        // assigning retrieved json values to jres constant
        const jres = await resp.json();

        // The use of this is, if the jres length is zero, return back empty without error 
        if (!Object.keys(jres).length) {
            return "";
        }

        //returning json with all details needed of a book
        return jres;

    } catch (err) {
        throw err;
    }
}

// Function which returns back Movie details in JSON format
async function getMovieDetail(isbn) {

    // Creating url to find details of a book
    var url_a = 'https://openlibrary.org/api/books?bibkeys=ISBN:';
    var url_b = '&format=json&jscmd=data';

    // Combining these values to create a final image url
    let url = url_a + isbn + url_b;

    // assigning fetched values to resp constant
    var resp = await fetch(url);
    // assigning retrieved json values to jres constant
    var jres = await resp.json();

    // The use of this is, if the jres length is zero, return back empty without error 
    if (!Object.keys(jres).length) {
        return "";
    }

    // Creating url to find details of a movie using title of book
    url = 'https://api.themoviedb.org/3/search/movie?api_key=50d0cc89089c60f5c082a82e7839396b&query=' + jres["ISBN:" + isbn].title;

    // overriding resp constant with fetched values
    resp = await fetch(url);
    // overriding jres with retrieved json values
    jres = await resp.json();

    // The use of this is, if the jres length is zero, return back empty without error 
    if (jres.results.length == 0) {
        return "";
    }
    else {
        // Creating url to find details of a movie using movie ID
        url = 'https://api.themoviedb.org/3/movie/' + jres.results[0].id + '?api_key=50d0cc89089c60f5c082a82e7839396b';

        // overriding resp constant with fetched values
        resp = await fetch(url);
        // overriding jres with retrieved json values
        jres = await resp.json();

        // Returning json with all needed details of a movie
        return jres;
    }

}