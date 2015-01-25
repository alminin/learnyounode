var http = require('http')
var bl = require('bl')
var results = []
var	count = 0

function printResults () {
	for (var i = 0; i < 3; i++)
		console.log(results[i])
}

function httpGet (index) {
	http.get(process.argv[2 + index], function (res) {
		res.pipe(bl(function (err, data) {
			if(err)
				return console.error(err)

			results[index] = data.toString()
			count++
			
			if (count == 3)
				printResults()
		}))
	})
}

for (var i = 0; i < 3; i++) {
	httpGet(i)
}
	

  /*var http = require('http');
    var urls = [process.argv[2], process.argv[3], process.argv[4]]; 
    var holder = [];
    var endCount = 0;
    for(var i in urls){     

        responseCount(i, urls[i])

    }

    function responseCount(count, url){
        http.get(url, function(res){
            res.setEncoding('utf8');                            

            var string = '';
            res.on('data', function(chunk){         

                string += chunk;

            });

            res.on('end', function(){
                holder[count] = string;
                endCount ++;
                if(endCount >= 3){
                    for(var i in holder){
                        console.log(holder[i]); 
                    }

                }
            })


        }).on('error', function(e) {
          console.log("Got error: " + e.message);
        }); 
    }*/

