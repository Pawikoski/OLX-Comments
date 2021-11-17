let isLoaded = false
let pageViews = null

// async function waitForLoad() {
//     if(document.querySelector("span[data-testid='page-view-text']") != null) {
//         console.log("page loaded!")
//         isLoaded = true
//     } else {
//         console.log("page not loaded yet")
//         waitForLoad();
//     }
//     await new Promise(r => setTimeout(r, 100));
// }

// while (!isLoaded) {
//     await waitForLoad();
// }

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
  
    notesBtn = '<i style="margin-right: 1em; height: 1em; width: 1em" class="far fa-comments"></i>';
    $(".css-sg1fy9 div").prepend(notesBtn);

    let pageViews = document.querySelector("span[data-testid='page-view-text']").textContent;
}