'use strict';

var PFParser = require('pdf2json/pdfparser');

var pdfParser = new PFParser();

console.info(pdfParser);

var pdfFilePath = 'a.pdf';

pdfParser.loadPDF(pdfFilePath);