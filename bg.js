

var atTaskChromeExtension = {


    /**
     * Copy AtTask Issue Data from the current window
     */
    copyIssueData: function () {
        alert("hello world!");
        //document.body.bgColor='red'
    }
};


function copyIssueData() {
    alert('hello world!');
}



//atTaskChromeExtension.copyIssueData();
//document.addEventListener('DOMContentLoaded', function () {
//});





chrome.browserAction.onClicked.addListener(function (tab) {

    alert(tab.url);


    var tempNode = $("attaskChromeExtension_temp");
    tempNode.textValue = tab.url;
    tempNode.select();
    document.execCommand("copy");





//    var sandbox = tab.url;
//    document.execCommand('copy');
//    sandbox.val('');

    alert('worked');


});
