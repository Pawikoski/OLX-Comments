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

  function showPopup(){
    $('.hover_bkgr_fricc').show();
    console.log("click");
  }

  // https://bbbootstrap.com/snippets/bootstrap-comments-template-90811385

  let notesContainer = document.createElement("div")
  notesContainer.setAttribute("class", "container justify-content-center mt-5 border-left border-right")

  function setComment(text) {
    note = document.createElement("div")
    note.setAttribute("class", "d-flex justify-content-center py-2")
    noteChild = document.createElement("div")
    noteChild.setAttribute("class", "second py-2 px-2")
    noteText = document.createElement("span")
    noteText.setAttribute("class", "text1")
    noteText.innerHTML = text

    noteChild.append(noteText);
    note.append(noteChild)

    return note
  }

  notesContainer.append(setComment("asdfdsaf"))
  notesContainer.append(setComment("123ijadsi"))

  // 
  
  let notesBtn = document.createElement("i");
  notesBtn.setAttribute("style", "margin-right: 1em; height: 1em; width: 1em");
  notesBtn.setAttribute("class", "far fa-comments");
  notesBtn.setAttribute("id", "notesBtn")




  $(".css-sg1fy9 div").prepend(notesBtn);

  $("#notesBtn").click(function(){
    console.log("you just clicked the button. Comments section in prrogresss.")
  })


  let offerViews = $("span[data-testid='page-view-text']").text().match("[0-9]*$")[0];
  console.log(offerViews);

  let offerId = $(".css-9xy3gn-Text").text();
  offerId = offerId.match("[0-9]*$")[0];

  console.log(offerId);


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


  $('div[data-cy="ad_description"]').prepend(notesContainer);

  $("#submitBtn").click(function() {
    let content = $("#contentField").val();

    var settings = {
      "url": "http://localhost:5000/notes/" + offerId + "?content=" + content + "&offer_views=" + offerViews,
      "method": "PUT",
      "timeout": 0,
    };
    
    $.ajax(settings).done(function (response) {
      console.log(response);
    });

  });


  // console.log()


  // let popup = '<div class="hover_bkgr_fricc hidden"><span class="helper"></span><div><div onclick="document.querySelector(\'.hover_bkgr_fricc\').classList.add(\'hidden\');" class="popupCloseButton">&times;</div><p>Add any HTML content<br />inside the popup box!</p></div></div>'
  // $("body").append(popup);



}