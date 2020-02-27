let fs = require('fs')

function readCSV(path) {
    let data = [];
    let lineReader = require('readline').createInterface({
        input: require('fs').createReadStream(path)
    });

    lineReader.on('line', function(line) {
        line = line.split(",")
        line[0] = line[0].substr(1, line[0].length - 2)
        line[0] = line[0].replace('\t', '')
        console.log(line);
    });


}

module.exports = {
    readCSV: readCSV,
}