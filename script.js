document.addEventListener('DOMContentLoaded', function () {
    document
        .getElementById('genShortUrl')
        .addEventListener('click', async function () {
            //console.log('Generate Short URL!!');
            const dataInput = document.getElementById('url').value;
            console.log(dataInput);
            fetch(
                'https://api.shrtco.de/v2/shorten?url=' +
                dataInput
            )
                .then(response => response.json())
                //.then(json => console.log(JSON.stringify(json.result.full_short_link)));
                .then(json => document.getElementById('result').value = json.result.full_short_link)
            });
    document
        .getElementById('copyShortUrl')
        .addEventListener('click', function () {
            //console.log('Copy Short URL!!!');
            const copyText = document.getElementById("result");
            copyText.select();
            copyText.setSelectionRange(0, 999);
            document.execCommand("copy");
            alert("Copied the text: " + copyText.value);
        });
});