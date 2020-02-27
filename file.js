let fs = require('fs')
var data = [];

function readCSV(path) {

    let lineReader = require('readline').createInterface({
        input: require('fs').createReadStream(path)
    });

    lineReader.on('line', function(line) {
        line = line.split(",")
        line[0] = line[0].substr(1, line[0].length - 2)
        line[0] = line[0].replace('\t', '')
        line[0] = parseInt(line[0])
        line[1] = parseInt(line[1])
        data.push(line)
            //console.log(line);

    });
    console.log(data);
    return data;
}

module.exports = {
    readCSV: readCSV,
    data: data,
}