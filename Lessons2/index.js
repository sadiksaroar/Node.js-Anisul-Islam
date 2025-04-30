const fs = require('fs');

fs.writeFile('demo1.txt', "Sadik IS demotived Know", (err) => {
    if(err){
        console.log(err);
    }else{
        console.log("successfuk");
    }
})