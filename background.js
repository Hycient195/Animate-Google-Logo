chrome.webRequest.onCompleted.addListener(
  function(details){
    console.log("This is the completed hander")
    console.log(details)

    if(details.url == "https://www.google.com/"){
      chrome.tabs.insertCSS(null, {file: "./styles.css"})
      chrome.tabs.executeScript(null,{ file: "./foreground.js"},
      ()=>{
        console.log("Loaded Foreground Page");
      }
      )
    }
  },{
    urls: []
  },
  []
)
