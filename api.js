/*
window.fbAsyncInit = function() {
    FB.init({
        appId      : '327019136562567',
        cookie     : true,
        xfbml      : true,
        version    : 'v17.0'
    });
};
*/

/*
const request = new Request('https://graph.facebook.com/', {
    method: 'GET'
})
*/ 

// const response = await fetch('https://graph.facebook.com/')
// {response } = fetch ({request})

    const url = 'http://worldtimeapi.org/api/timezone/America/New_York';

async function getData() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
}
getData()
/*
FB.api(
    '/me',
    'GET',
    {"fields":"id,name"},
    function(response) {
        if (response && !response.error) {
            console.log('User ID: ' + response.id);
            console.log('User Name: ' + response.name);
    }
});
*/