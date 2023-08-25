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