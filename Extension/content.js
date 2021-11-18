let isLoaded = false
let pageViews = null


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



    let pageViews = $("span[data-testid='page-view-text']").text();
    console.log(pageViews);

    let popup = '<div class="hover_bkgr_fricc hidden"><span class="helper"></span><div><div onclick="document.querySelector(\'.hover_bkgr_fricc\').classList.add(\'hidden\');" class="popupCloseButton">&times;</div><p>Add any HTML content<br />inside the popup box!</p></div></div>'
    $("body").append(popup);



}