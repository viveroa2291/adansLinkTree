/* This code works for api's
let token = 'EAAEpbBN4NYcBO2ukuzFOEp59WZAZCxvbS1b7GmhUg91GnlKuy8ofLS3N5ToGSgovqnT2im38D6868JcSUyenQoGiSEgIsRS2c72BhSXwBNacHb2l6qZApJog4PmQSNOkXE69ZAKnN4JZCiXtOAJt8kSFtmirXKgZCJYL8ZAuHVmAUXsRU99UrDLNpfSjMdKNZAiJGIenNxnjsebZAjnHWs3aJOlgg5yZAw2OjBMOAJBxbpqZCP5W5ymSPW6u2V87X2U6uTRAQZDZD';

fetch('https://graph.facebook.com/me?fields=friends', {
    method: 'GET',
    headers: new Headers({
        'Authorization': `Bearer ${token}`, 
        'Content-Type': 'application/x-www-form-urlencoded'
    })
}).then(response => response.json())
  .then(json => {console.log(json);
    return json
})
  .then(data => console.log("This is the data: " + JSON.stringify(data, null, 2)));
*/

// Snapchat Key 
var fb = document.getElementById('fb-follower'); 

let token = 'EAAEpbBN4NYcBOZCLiaArRyU1NsZAMzCBgZCCUqkeEETELZCIcuFLMQppKbuaC7gGGFvuEOusZAcFNEEgFULRou5v7xv2Prxk3ZAWZBJGpWsva3nXlWfPPfTMQCGEFi3OQ6pZBgH3xuYT2ZCTq0oYPYQXgRN581xOi4ZCcIOwhAwJZBOdZAdJ6RW3SIaOybxdAhJQV9cZAUWWdZCLj7aoZBCwEDqUWt5C44DYrXoinAhiMsaWQqDx6a3GvY3hjJdUkaLMqTbFJGQZCEalo1F0t1YZD';

fetch('https://graph.facebook.com/me?fields=friends', {
    method: 'GET',
    headers: new Headers({
        'Authorization': `Bearer ${token}`, 
        'Content-Type': 'application/x-www-form-urlencoded'
    })
}).then(response => response.json())
  .then(json => {console.log(json);
    return json
})
  .then(data => {
    console.log("This is the data " + data);
    let totalCount = data.friends.summary.total_count;
    console.log("This is the total count " + totalCount);
    fb.innerHTML = totalCount;
  });