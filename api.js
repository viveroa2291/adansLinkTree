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

let token = 'EAAEpbBN4NYcBO4hFOurjfIQHytf6MBuZAHX8ZAfWZAu8IZBZAwdl75eqWzu8o4yWCKhUowIyXQl8t5EgadIj2OgfEa70oEWeATxUxCfrm2XZCTXEZCblNHID84XW7KZAfnEAynosxIOZCPQnAxZCDgfdZCg69XYeg2yXAs9ZBXhh2P8MgmQujl5l9Nan7OGL84pRbJZBmu6AR0aOuOk1P10EqsXouKbfLBKCZAbvIJqqcLFSCXaGZBsTb9iT8RQkZA6V8q2mvK8yA07uZAmxObTEZD';

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