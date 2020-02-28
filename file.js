let fs = require('fs')
let data = new Array(1, 5);

function readCSV(path) {

    let lineReader = require('readline').createInterface({
        input: require('fs').createReadStream(path)
    });

    lineReader.on('line', function(line) {
        line = line.split(",");
        line[0] = line[0].substr(1, line[0].length - 2);
        line[0] = line[0].replace('\t', '');
        line[0] = parseInt(line[0]);
        line[1] = parseInt(line[1]);
        appender(line);
        //console.log(data);
    });
    console.log(data);
    return data;
}

function appender(tempdata) {

    //console.log(data);
    data.push(2);
}

module.exports = {
    readCSV: readCSV,
}