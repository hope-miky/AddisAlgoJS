let fs = require('fs')
let data = new Array();

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
    //console.log(data);
}

function appender(tempdata) {
    //console.log(tempdata);
    data.push(tempdata);
    //console.log(data);
}

function main(path) {
    readCSV(path)
    console.log(data);
    return data;
}

module.exports = {
    readCSV: readCSV,
    main: main,
}