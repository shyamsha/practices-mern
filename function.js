var a = function () {
    return 3
}
var a = function () {
    return 4
}
console.log(a())

function handleRequest() {
    if (this.readyState == 4 && this.status == 200) { //Explain this in a bit.
        console.log(JSON.parse(request.responseText));
    }
}

var url;
url = "https://api.unsplash.com/search/photos/?query=home"; //We are searching for the query home.
var request = new XMLHttpRequest();
request.onreadystatechange = handleRequest;
request.open('GET', url, true);
request.setRequestHeader('Authorization', 'Client-ID your-client-id'); // Unique client ID.
request.send();
