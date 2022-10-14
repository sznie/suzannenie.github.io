var reader = new XMLHttpRequest() || new ActiveXObject('MSXML2.XMLHTTP');
var converter = new showdown.Converter();

function openblog (name) {
    console.log("opening " + name);
    var path = "blog/" + name + ".md";

    reader.open('get', path, true); 
    reader.onreadystatechange = displayContents;
    reader.send(null);
}

function displayContents() {
    if(reader.readyState==4) {
        var el = document.getElementById('content');
        console.log(reader.responseText);
        var html = converter.makeHtml(reader.responseText);
        // console.log(html);
        el.innerHTML = html;
    }
}