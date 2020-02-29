let d3 = require("d3")
let jsdom = require("jsdom");
const { JSDOM } = jsdom;

let document = new JSDOM(),
    svg = d3.select(document.body).append("svg");