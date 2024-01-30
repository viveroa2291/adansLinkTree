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

let token = 'EAAEpbBN4NYcBO8g84pgXUqRWQO4yiZBqHexFDtKoMKagCoZB65qF5DdwKxT8jDKRXBgbSdlCZAUR6ZAQULnZCtZCiYxHzPkBW9ZBYkim1X7H2Bm92sNaf8MFeki9u6zpxnqvBWWIV5QFIDHKlzqxw48fBZBlX6fXWr9Ofkwm8aGQE8TRhIyJFLoEoMoIZAuaHtBUCWLQ9Ad88lRoBkOaThus23WJNhHrWe2ZBWjGrgTBeGz3BEONOocv188oJLkZBPZBBhNQhG03X62E3IUZD';

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