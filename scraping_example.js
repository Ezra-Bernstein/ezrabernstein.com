let jsdom = require('jsdom').JSDOM,
 
// some hard coded html
html = ''+
'<!DOCTYPE html>'+
    '<html>'+
    '<head>'+
        '<title>Blank</title>'+
    '</head>'+
    '<body>'+
        '<p>Hello World</p>'+
    '</body>'+
'</html>',
 
// get the dom by calling the jsdom constructor, and giving it the html
dom = new jsdom(html),
 
// get the window object @ dom.window
window = dom.window,
 
// now just do whatever, just like in the browser
el = window.document.querySelectorAll('p')[0];
 
console.log(el.innerHTML); // hello World