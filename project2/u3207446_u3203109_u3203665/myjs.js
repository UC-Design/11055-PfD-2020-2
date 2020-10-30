// This function is run here so that it runs in background as soon as page loads and the results
// are displayed quickly when a user clicks on DISPLAY button
main();

//A3.2 Create showhide function which hides Display button once clicked and reveals the result table
function showhide() {
  var display_button = document.getElementById("beforeresults");
  if (isbnlist.length != 0) {
    display_button.style.display = "none";
  }

  var display_table = document.getElementById("results");
  if (isbnlist.length == 0) {
    window.alert("\nFile exists but is empty.\n\nPlease fill in values to the file and refresh this page !");
  }
  else {
    display_table.style.display = "block";
  }
}


// This Main() function to do almost everything (Like create an array and fill isbn details into it)
async function main() {

  // Create an empty array to put in all details
  var bookarr = []

  // Loop it as many times as there are ISBNs on isbn lists
  for (let i = 0; i < isbnlist.length; i++) {
    // Create one object at a time and assign it to book variable
    let book = new isbnDetail(isbnlist[i]);
    // run getBookInfo() function and wait till it gets result
    await book.getBookInfo();
    // run getMovieInfo() function and wait till it gets result
    await book.getMovieInfo();

    // Push that object (with all info about isbn (book and movie) into Book array)
    bookarr.push(book);
  }

  // Checking if isbn list is not empty.
  if (isbnlist.length != 0) {

    var content = '';

    //This FOR loop will run as many times as isbn numbers provided
    for (x of bookarr) {

      // For displaying Cover Image on first column of a row of table
      if (x.getTitle() != "Not available</br>") {
        var cover = x.coverImageUrl
      }
      else { 
        var cover = "<img src='images/nocover.jpg' width='150' height='150' />" 
      }

      // For displaying Book Details on second column of a row of table
      if (x.getTitle() != "Not available</br>") {
        var bookDetails =
          "ISBN: " + x.isbn + "<br>" + x.getTitle() + x.getAuthor() + x.getPublisher() + x.getNumberOfPages() + x.getPublishDate() + "<a href='https://openlibrary.org/isbn/"+ x.isbn +"'>About this book</a>";
      } else {
        var bookDetails = "ISBN: " + x.isbn + "<br>" + "No further information about this ISBN available";
      }

      // For displaying Movie Details on third column of a row of table
      if (x.getMovieTitle() != "Movie Title: " + "Not available"+ "</br>") {
        var movieDetails = x.getMovieTitle() + x.getPopularity() + x.getReleaseDate() + x.getBudget() + x.getRevenue() + x.getRuntime() + "<a href='https://www.themoviedb.org/movie/"+ x.getMovieID() +"'>About this movie</a>"; 
      } else {
        var movieDetails = "No movie for this book yet"
      }

      // For each ISBN, adding row values on to a variable
      content += `<tr>
        <td>${cover}</td>
        <td>
          ${bookDetails}
        </td>
        <td>
          ${movieDetails}
        </td>
      </tr>`
    }

    // Appending the above created values to a row in table with ID rowWithDetails
    $(content).appendTo("#rowWithDetails");

  }

}