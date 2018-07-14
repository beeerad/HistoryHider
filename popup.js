function browsingdata(){
    chrome.browsingData.remove({
      "originTypes": {
        "protectedWeb": true, 
        "unprotectedWeb":true,
        "extension":true    
      }
    }, {
      "appcache": true, 
      "cache": true, 
      "cookies": true,
      "downloads": true,
      "fileSystems": true, 
      "formData": true, 
      "history": true, 
      "indexedDB": true, 
      "localStorage": true, 
      "pluginData": true, 
      "passwords": true, 
      "webSQL": true 
    }, function (){
        alert("Your history has been cleared!");
    });
}
window.onload=browsingdata;