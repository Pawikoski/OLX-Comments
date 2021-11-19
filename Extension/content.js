let isLoaded = false
let offerViews = null


if (document.URL.includes("d/oferta/")){
    waitForElementToDisplay("span[data-testid='page-view-text']",1000,9000);

}


function waitForElementToDisplay(selector, checkFrequencyInMs, timeoutInMs) {
  var startTimeInMs = Date.now();
  (function loopSearch() {
    if (document.querySelector(selector) != null) {
      callback();
      return;
    }
    else {
      setTimeout(function () {
        if (timeoutInMs && Date.now() - startTimeInMs > timeoutInMs)
          return;
        loopSearch();
      }, checkFrequencyInMs);
    }
  })();
}


function callback() {
  console.log("start");

  // https://bbbootstrap.com/snippets/bootstrap-comments-template-90811385

  let notesContainer = document.createElement("div");
  header = document.createElement("h3");
  header.setAttribute("class", "eu5v0x0");
  header.innerHTML = "Komentarze";
  notesContainer.append(header);
  notesContainer.setAttribute("class", "container justify-content-center mt-5 border-left border-right comment-box");

// <div class="d-flex justify-content-center py-2">
//    <div class="second py-2 px-2">
//      <span class="text1">Type your note, and hit enter to add it</span>
//      <div class="d-flex justify-content-between py-1 pt-2">
  //      <div>
  //        <span class="text2">Curtis</span>
  //      </div>
  //      <div>
  //        <span class="text3">Upvote?</span>
  //        <span class="thumbup">
  //          <i class="fa fa-thumbs-o-up"></i>
  //        </span>
  //        <span class="text4">3</span>
  //      </div>
//       </div>
//    </div>
// </div>

  function setComment(text, author, likes) {
    note = document.createElement("div");
    note.setAttribute("class", "d-flex justify-content-center py-2");

    noteChild = document.createElement("div");
    noteChild.setAttribute("class", "second py-2 px-2");

    let textOne = document.createElement("span");
    textOne.setAttribute("class", "text1");
    textOne.innerHTML = text;

    let divMain = document.createElement("div");
    divMain.setAttribute("class", "d-flex justify-content-between py-1 pt-2");

    let divAuthor = document.createElement("div");
    let spanAuthor = document.createElement("span");
    spanAuthor.setAttribute("class", "text2");
    spanAuthor.innerHTML = author;

    divAuthor.append(spanAuthor);
    divMain.append(divAuthor);

    divThumbs = document.createElement("div");

    spanOne = document.createElement("span");
    spanOne.setAttribute("class", "text3");
    spanOne.innerHTML = "Upvote";

    spanTwo = document.createElement("span");
    spanTwo.setAttribute("class", "thumbup");

    thumbsUpButton = document.createElement("i");
    thumbsUpButton.setAttribute("class", "fa fa-thumbs-o-up");

    spanTwo.append(thumbsUpButton);

    let spanThumbsCount = document.createElement("span");
    spanThumbsCount.setAttribute("class", "text4");
    spanThumbsCount.innerHTML = likes;

    divThumbs.append(spanOne);
    divThumbs.append(spanTwo);
    divThumbs.append(spanThumbsCount);


    noteChild.append(textOne);
    noteChild.append(divAuthor);
    noteChild.append(divThumbs);
    note.append(noteChild);

    return note;
  }

  notesContainer.append(setComment("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse laoreet finibus justo, non consectetur augue pretium quis. Mauris aliquet, dui id elementum rutrum, leo elit luctus velit, at tincidunt eros nunc vel erat. Fusce sollicitudin urna ligula, et suscipit orci semper in. Quisque et mi mauris. Integer interdum pulvinar ipsum, vitae varius orci vulputate vel. Quisque aliquet eu quam at eleifend. Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "author1", 69))
  notesContainer.append(setComment("Sed luctus sed urna eu blandit. Morbi viverra nibh id est suscipit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam ultrices viverra sodales. Quisque rutrum diam vitae fringilla molestie. Quisque finibus ut ex vulputate tristique. Aliquam mollis felis rhoncus velit mollis, sed pulvinar elit suscipit. Etiam commodo varius dictum. Vestibulum mattis purus in nisl efficitur varius laoreet vel odio. Nunc sed orci vel nunc euismod dictum sit amet ut ex.", "author2", 420))
  notesContainer.append(setComment("Phasellus varius mattis lacus, at rhoncus quam condimentum eget. Aliquam sed purus id felis porttitor pulvinar a sit amet nisi. Phasellus quis mi est. Proin posuere, lorem eu ornare interdum, odio turpis elementum leo, at fringilla purus ligula vel eros. Mauris nec metus et urna placerat faucibus id in libero. Donec ornare nec risus et tristique. Pellentesque lacinia euismod dolor vel efficitur. Nam vitae auctor diam. Praesent convallis rutrum lacus ut convallis. Nam ultricies purus ac pharetra hendrerit. Ut sollicitudin volutpat rhoncus. Vestibulum iaculis odio mauris, rutrum semper odio efficitur vitae.", "asdfsdf", 12312))

  // 
  
  let notesBtn = document.createElement("i");
  notesBtn.setAttribute("style", "margin-right: 1em; height: 1em; width: 1em");
  notesBtn.setAttribute("class", "far fa-comments");
  notesBtn.setAttribute("id", "notesBtn")


  $(".css-sg1fy9 div").prepend(notesBtn);


  let offerViews = $("span[data-testid='page-view-text']").text().match("[0-9]*$")[0];
  console.log(offerViews);

  let offerId = $(".css-9xy3gn-Text").text();
  offerId = offerId.match("[0-9]*$")[0];


  $('div[data-cy="ad_description"]').prepend(notesContainer);

  // console.log($(".comment-box").classList);

  let commentBoxClasses = document.querySelector(".comment-box").classList

  function hideCommentsBox() {
    commentBoxClasses.add("hidden");
  }
  
  function showCommentsBox() {
    commentBoxClasses.remove("hidden");
  }

  hideCommentsBox();
  $("#notesBtn").click(function(){
    if(commentBoxClasses.contains("hidden")){
      showCommentsBox();
    } else {
      hideCommentsBox();
    }
    console.log("halo");
  })


  // let form = document.createElement("form");

  // let contentField = document.createElement("input");
  // contentField.setAttribute("type", "text");
  // contentField.setAttribute("id", "contentField");
  // form.append(contentField);

  // let submitButton = document.createElement("input");
  // submitButton.setAttribute("value", "TEST");
  // submitButton.setAttribute("type", "button");
  // submitButton.setAttribute("id", "submitBtn");
  // form.append(submitButton);



  // $("#submitBtn").click(function() {
  //   let content = $("#contentField").val();

  //   var settings = {
  //     "url": "http://localhost:5000/notes/" + offerId + "?content=" + content + "&offer_views=" + offerViews,
  //     "method": "PUT",
  //     "timeout": 0,
  //   };
    
  //   $.ajax(settings).done(function (response) {
  //     console.log(response);
  //   });
  // });

}