
function getParameterByName(url, name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(url);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


chrome.browserAction.onClicked.addListener(function (tab) {

    const baseUrl = "https://hub.attask.com/";
    var url;
    var guid = getParameterByName(tab.url, 'ID');
    var issue = (tab.url.indexOf("issue") != -1);
    var outputUrl;
    var text;
    var type;

    if (issue) {
        type = "issue";
    } else {
        type = "task"
    }

    url = baseUrl + "attask/api/" + type + "/" + guid + "?fields=referenceNumber";
    outputUrl = baseUrl + type + "/view?ID=";
    text = capitalizeFirstLetter(type) + ' ';


    var jqxhr = $.getJSON(url, function(json) {
        var output = text + json.data.referenceNumber + ', "' + json.data.name + '", ' + outputUrl + guid;

        var $test = $('#cliboardText');
        $test.text(output);
        $test.select();
        document.execCommand('copy');



    });


});

