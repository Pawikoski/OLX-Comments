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

  let form = document.createElement("div");
  form.setAttribute("class", "d-flex justify-content-center pt-3 pb-2")

  let inputText = document.createElement("input");
  inputText.setAttribute("type", "text");
  inputText.setAttribute("id", "content");
  inputText.setAttribute("placeholder", "+ Dodaj komentarz");
  inputText.setAttribute("class", "form-control addtxt");
  
  let inputSubmit = document.createElement("input");
  inputSubmit.setAttribute("type", "button")
  inputSubmit.setAttribute("id", "submit")
  inputSubmit.setAttribute("value", "+")
  inputSubmit.setAttribute("class", "btn btn-primary")

  form.append(inputText)
  form.append(inputSubmit)
  notesContainer.append(form)


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

    let divThumbs = document.createElement("div");

    let spanTwo = document.createElement("span");
    spanTwo.setAttribute("class", "thumbup");

    let thumbsBox = document.createElement("div");

    let thumbsUpButton = document.createElement("i");
    thumbsUpButton.setAttribute("class", "far fa-thumbs-up");

    let thumbsDownButton = document.createElement("i");
    thumbsDownButton.setAttribute("class", "far fa-thumbs-down");

    thumbsBox.append(thumbsUpButton);
    thumbsBox.append(thumbsDownButton);

    spanTwo.append(thumbsBox);

    let spanThumbsCount = document.createElement("span");
    spanThumbsCount.setAttribute("class", "text4");
    spanThumbsCount.innerHTML = likes;

    divThumbs.append(spanTwo);
    divThumbs.append(spanThumbsCount);

    divMain.append(divThumbs)
    divMain.append(divAuthor)

    noteChild.append(textOne);
    noteChild.append(divMain);
    note.append(noteChild);

    return note;
  }

  
  
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


  let commentBoxClasses = document.querySelector(".comment-box").classList

  function hideCommentsBox() {
    commentBoxClasses.add("hidden");
  }
  
  function showCommentsBox() {
    commentBoxClasses.remove("hidden");
  }

  let commentsRetrieved = false

  hideCommentsBox();
  $("#notesBtn").click(function(){
    if(commentBoxClasses.contains("hidden")){
      if(!commentsRetrieved){
        var settings = {
          "url": "http://localhost:5000/notes/" + offerId,
          "method": "GET",
          "timeout": 0,
        };
        
        $.ajax(settings).done(function (response) {
          for(i=0;i<response.length;i++){
            commentsRetrieved = true
            notesContainer.append(setComment(response[i]['content'], 'author', 'likes'));
          }
        });
      }
      //  else {
      //   for(i=0;i<commentsRetrieved.length;i++){
      //     notesContainer.append(setComment(commentsRetrieved[i]['content'], 'author', 'likes'));
      //   }

      showCommentsBox();
    } else {
      hideCommentsBox();
    }
    console.log("halo");
  })



  submitBtn = document.querySelector("#submit");
  submitBtn.addEventListener("click", function(){
    let content = document.querySelector("#content").value
    let settings = {
          "url": "http://localhost:5000/notes/" + offerId + "?content=" + content + "&offer_views=" + offerViews,
          "method": "PUT",
          "timeout": 0,
        };
        
    $.ajax(settings).done(function (response) {
      console.log(response);
      // console.log(response);
    });
  });


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

  //   
  // });

}