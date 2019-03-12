var https = require("https");

function fetchAnagram(callback) {
    https.get('https://latelier.co/kata/mission1.txt', (resp) => {
        let data ='';
    resp.on('data', (chunk) => {
        data += chunk;
    });
    resp.on('end', () => {
        var array = data.split("\n");
        callback(null, array);
    });
    }).on("error", (err) => {
        callback("Error: " + err.message);
    });
}

fetchAnagram(function (err, array){
    let test= new Array();
    var atelier = "atelier".split("").sort().join();
    if (err) {
        console.log(err);
        return;
    }
    for(var i = 0; i < array.length;i++) {
        for (var z = 0; z < array.length; z++)
        {
            let word =array[i] + array[z];
            if (Contains(atelier, word))
            {
                console.log(word);
                test.push(word);
            }                
        }
    };

});

function Contains (matchString, testString)
{
    testString = testString.split("").sort().join();

    if(matchString != testString)
     return false;
     return true;
}
fetchAnagram;
