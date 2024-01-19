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
var fb = document.getElementById('fb-follower'); 

let token = 'EAAEpbBN4NYcBO0uHboeAeVy2bERxoiDpZAUhiWg4leWSWb6ucxU27zGkvWMn9nmMV4fIHqsyTNxg6pfDPh57ZAI4T1mauvkY3G92XZBhNnv8OHZBiWkc8ncEqqNGlHbPume0tDOrF79jAnPrde0sh5K9kX1ScrlixGwdJDqCP7RZAwFDQS11m1hspOVLFCExGQTZCkBeFMFizTCad3yk3mGSCRWKCkMZCnyp0Gk6oMZBChoONuAbFtdhrSNMZCk2vehb2Q56ii65Ft1MZD';

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