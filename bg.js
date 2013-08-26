
function getParameterByName(url, name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(url);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}





chrome.browserAction.onClicked.addListener(function (tab) {


//    console.log("start");


    var guid = getParameterByName(tab.url, 'ID');

    var jqxhr = $.getJSON( "https://hub.attask.com/attask/api/issue/" + guid + "?fields=referenceNumber", function(json) {
        var output = 'Issue ' + json.data.referenceNumber + ', "' + json.data.name + '", ' + 'https://hub.attask.com/issue/view?ID=' + guid;
        alert(output);

    });
//        .done(function() { console.log( "second success" ); })
//        .fail(function() { console.log( "error" ); })
//        .always(function() { console.log( "complete" ); });



});

