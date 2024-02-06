let fs = require('fs');

fs.writeFile('data.txt', 'My Content', function(error){
    if (error) throw error;
    console.log('Changed')
})

fs.writeFile('data.txt', 'My Second Content', function(error){
    if (error) throw error;
    console.log('Successful')
})

fs.appendFile('data.txt', 'I love coding', function(error){
    if (error) throw error;
    console.log('I love coding')
})