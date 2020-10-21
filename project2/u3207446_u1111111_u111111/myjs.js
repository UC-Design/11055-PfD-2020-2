function showhide() {
  var x = document.getElementById("beforeresults");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

  var y = document.getElementById("results");
  if (y.style.display === "none") {
    y.style.display = "block";
  } else {
    y.style.display = "none";
  }
}


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
  var isbnarr = ['9783833301490','0395496802','9780439173636', '9780547773704', '0689828292'];
  // this is the list of books we are going to create
  var bookarr = []

  // the normal for loop we have looked at so far
  for (let i = 0; i < isbnarr.length; i++) {
      let book = new bookDetail(isbnarr[i], "S");
      await book.getDetail();
      bookarr.push(book);
  }


    // the for (variable of iterable) will loop through each item in an array
    var content = '';
    for (x of bookarr) {

      // console.log(x.getCover());
      // console.log(x.getAuthor());
      // console.log(x.getPublisher());
      // console.log(x.getNumberOfPages());
      // console.log(x.getPublishDate());
      // console.log(x.getTitle());
      // console.log(x.getSubTitle());

      // content += "<div class='row'>" +
      //   "<div class='col-3'>"+x.getCover()+"</div>" +
      //   "<div class='col-5'>"+"Subtitle: "+ x.getSubTitle() +"</div>" +
      //   "<div class='col-4'>Cat</div>" +
      //   "</div>";

      content +=  "<tr>" +
                  "<td>"+x.getCover()+"</td>" +
                  "<td>"
                    + "Title: "         +x.getTitle()+"<br>"
                    + "Author: "        +x.getAuthor()+"<br>"
                    + "Pulisher: "      +x.getPublisher()+"<br>"
                    + "No. of Pages: "  +x.getNumberOfPages()+"<br>"
                    + "Publish Date: "  +x.getPublishDate()+"<br>"
                    
                  +"</td>" +
                  "<td>"+"Still trying to figure out how :("+"</td>" +
                  "</tr>";
    }

    $( content ).appendTo( "#rowWithDetails" );
}











