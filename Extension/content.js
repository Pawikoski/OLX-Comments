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
    console.log("click")
  }
  
  notesBtn = '<i onclick="document.querySelector(\'.hover_bkgr_fricc\').classList.remove(\'hidden\');" style="margin-right: 1em; height: 1em; width: 1em" class="far fa-comments"></i>';
  $(".css-sg1fy9 div").prepend(notesBtn);



  let offerViews = $("span[data-testid='page-view-text']").text();
  console.log(offerViews);

  let offerId = $(".css-9xy3gn-Text").text();

  console.log(offerId);


  let form = document.createElement("form");

  let contentField = document.createElement("input");
  contentField.setAttribute("type", "text");
  contentField.setAttribute("id", "contentField");
  form.append(contentField);

  let submitButton = document.createElement("input");
  submitButton.setAttribute("value", "TEST");
  submitButton.setAttribute("type", "button");
  submitButton.setAttribute("id", "submitBtn");
  form.append(submitButton);


  $('div[data-cy="ad_description"]').prepend(form);

  $("#submitBtn").click(function() {
    console.log($("#contentInput").val())
  });

  // var settings = {
  //   "url": "http://localhost:5000/notes/1?content=postman1&offer_views=12",
  //   "method": "PUT",
  //   "timeout": 0,
  // };
  
  // $.ajax(settings).done(function (response) {
  //   console.log(response);
  // });


  // console.log()


  // let popup = '<div class="hover_bkgr_fricc hidden"><span class="helper"></span><div><div onclick="document.querySelector(\'.hover_bkgr_fricc\').classList.add(\'hidden\');" class="popupCloseButton">&times;</div><p>Add any HTML content<br />inside the popup box!</p></div></div>'
  // $("body").append(popup);



}