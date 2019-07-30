var queryStr = decodeURIComponent(window.location.search);
queryStr = queryStr.substring(1);

// separate input from previous page
var queries = queryStr.split('&');
console.log(queries);

// show inputs
for (var i = 0; i < queries.length; i++) {
    var temp = queries[i].split('=');
    var tag = temp[0].charAt(0).toUpperCase() + temp[0].slice(1);
    var value = temp[1].split('+').join(' ');
    if (value.length == 0) {
        value = 'NA';
    }
    
    document.getElementById(tag).innerHTML += ' ' + tag + ': ' + value;
}

// redirect timer
var seconds = 10;


var timer = setInterval(function(){
    document.getElementById('redirect').innerHTML = 'Redirecting home in '+ seconds + ' ' + 'seconds';
    
    document.getElementById('redirect-progress').setAttribute('style', `width: ${(10-seconds) * 10}%`);
    document.getElementById('redirect-progress').setAttribute('aria-valuenow', `${(10-seconds) * 10}`);
    
    if (seconds == 0) {
            window.location.replace('index.html');
        }    
    
    seconds--;
}, 1000);