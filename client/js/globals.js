async function Get(url) {
    let response = await fetch(url);
    console.log(response.status);
    console.log(response.statusText);
    if (response.ok) {
        let data = await response.json();
        return data;
    }
    return response;
}

async function Post(url, body) {
    fetch(url, {
        method: 'post',
        body: JSON.stringify(body)
    }).then(function (response) {
        return response.json();
    }).then(function (data) {
        console.log(data);
    });
}