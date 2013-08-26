
function getParameterByName(url, name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(url);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}


console.log("start");


chrome.browserAction.onClicked.addListener(function (tab) {


    var guid = getParameterByName(tab.url, 'ID');

    var jqxhr = $.getJSON( "https://hub.attask.com/attask/api/issue/" + guid + "?fields=referenceNumber", function(json) {
        var output = 'Issue ' + json.data.referenceNumber + ', "' + json.data.name + '", ' + 'https://hub.attask.com/issue/view?ID=' + guid;

        var $test = $('#cliboardText');
        $test.text(output);
        $test.select();
        document.execCommand('copy');



    });
//        .done(function() { console.log( "second success" ); })
//        .fail(function() { console.log( "error" ); })
//        .always(function() { console.log( "complete" ); });






});

