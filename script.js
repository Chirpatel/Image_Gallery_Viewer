var input = document.getElementById("search");

input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("btnsearch").click();
    }
});



baseurl = "https://api.unsplash.com/"
var client_id ="X5xEy8z0z5cLE6s0rW8DRV442DqfB2X94QkD66DQEBY"
//var client_id = "jiioUkhRFVmCpHn9wTX_C5mqDS_2AQMdyUXwj-yKfJs"

async function call(url, params) {
    var resp = await axios.get(`${url}`, {
        params: params
    });
    //console.log(resp);
    return resp;
}
async function start() {
    var response = await call(baseurl + 'photos/random', {
        client_id: client_id,
        count: 30,
    })
    printr(response);
}

function printr(response) {
    //console.log('inprintr',response)
    for (let i = 0; i < response['data'].length; i++) {
        var elem = document.getElementById('base');
        var node = document.createElement('div');
        node.classList = "card";
        node.innerHTML = `<img class="card-img-top" src="${response['data'][i].urls.small}" alt="Card image cap">`
        elem.appendChild(node);
    }
}

start();

async function search() {
    var s = document.getElementById("search").value;
    //console.log(s);
    document.getElementById('base').innerHTML = ""
    for (let i = 1; i <= 3; i++) {
        var resp = await call(baseurl + `search/collections`, {
            page: i,
            query: s,
            client_id: client_id,
        });
        printsearch(resp);
    }
}

function printsearch(response) {
    for (let i = 0; i < response.data.results.length; i++) {
        var elem = document.getElementById('base');
        var node = document.createElement('div');
        node.classList = "card";
        node.innerHTML = `<img class="card-img-top" src="${response['data']['results'][i].cover_photo.urls.small}" alt="Card image cap">`
        elem.appendChild(node);
    }
}
data.results