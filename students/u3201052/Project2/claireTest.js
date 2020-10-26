/*
Author: Zanya Nadelle Bendebel & Claire McAuliffe
Date Created: 14/10/2020
*/
var isbnLength;

// var pageNum = 0


var pageNum = 0;
function changePage(){
    pageNum ++;
    console.log(pageNum);
}


// pageQty = isbnlist.length;
// console.log(pageQty)


fetchDetails()

async function fetchDetails(){
    var bookURL = "https://openlibrary.org/api/books?bibkeys=ISBN:"+ isbnlist +"&format=json&jscmd=data";
    const respBook = await fetch(bookURL);
    const jresBook = await respBook.json();
    console.log(jresBook);


    // movieURL = "https://api.themoviedb.org/3/search/movie?api_key=58ab3248432c80d6ffd196da87c220a3&query=" + "Tales+from+EarthSea"
    // const respMovie = await fetch(movieURL);
    // const jresMovie = await respMovie.json();
    // console.log(jresMovie)
    
    displayBook()

    function displayBook(){
        if (isbnlist[pageNum].toString().length == 10) {        // Check if ISBN number is 10 digits
            displayBookCover("bookCover", isbnlist[pageNum]);
            displayBookAttribute("bookTitle", jresBook["ISBN:" + isbnlist[pageNum]].title);
            displayBookAttribute("bookSubtitle", jresBook["ISBN:" + isbnlist[pageNum]].subtitle);
            displayBookAttribute("bookAuthor", jresBook["ISBN:" + isbnlist[pageNum]].authors[0].name);
            displayBookAttribute("bookPublisher", jresBook["ISBN:" + isbnlist[pageNum]].publishers[0].name);
            displayBookAttribute("bookPublishDate", jresBook["ISBN:" + isbnlist[pageNum]].publish_date);
        } else {                                                // ISBN number is 13 digits
            displayBookCover("bookCover", isbnlist[pageNum]);
            displayBookAttribute("bookTitle", jresBook[isbnlist[pageNum]].title);
            displayBookAttribute("bookAuthor", jresBook[isbnlist[pageNum]].authors[0].name);
            displayBookAttribute("bookPublisher", jresBook[isbnlist[pageNum]].publishers[0].name);
            displayBookAttribute("bookPublishDate", jresBook[isbnlist[pageNum]].publish_date);
        }
    }

}

// displayBooks()

function displayBookAttribute(className, classVariable){
    var displayAttribute = document.getElementsByClassName(className);
    displayAttribute[0].innerHTML = "<p>" + classVariable + "</p>";
}
function displayBookCover(className,imgISBN){
    var displayAttribute = document.getElementsByClassName(className);
    displayAttribute[0].innerHTML = "<img src= https://covers.openlibrary.org/b/isbn/" + imgISBN + "-M.jpg >";
}


// document.write(jresBook[isbnlist[1]].title);

