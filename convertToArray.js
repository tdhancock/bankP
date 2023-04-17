const fs = require('fs');

let data = JSON.parse(fs.readFileSync('mcupws.json'));

let newData = []

for (let item in data){
    newData.push(data[item])
}

console.log(newData[0])

fs.writeFileSync('mcupws.json', JSON.stringify(newData, null, 2))