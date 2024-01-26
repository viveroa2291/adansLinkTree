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

let token = 'EAAEpbBN4NYcBOZCFg6ZCvkSeE16FJnjidXP4iRFKgs8G2oYpHMtweA40xYc6uNRo5ANAOacm3QHZCvAxXWLFmVhB3oVFMh8HjiPsZBqObV6mJ8oAySB1yuC3AaWr3gGwp0QoP7oly7stx6tcf3PbVHL4ViNie5Rg2dQs9ZCKqz4bbQfVtZCt6VcgKnsDGlHLpOIBEz8odD9lycqDw45nr2YiTYGOZBMRyCV6zox49oCYrvi1od8QyGuAzVcPhW0cTkGS3UGoZAXD8ZCoZD';

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