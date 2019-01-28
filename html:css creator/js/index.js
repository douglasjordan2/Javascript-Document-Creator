// creates html elements
const create = name => {
  return document.createElement(name);
}

// an object to hold the basic html doc
const doc = {
  html: document.querySelector('html'),
  head: create('head'),
  title: create('title'),
  stylesheet: create('style'),
  body: create('body')
}

//  function to append elements to parent element
const append = (parent, child) => {
  return parent.appendChild(child);
}

const html = doc.html;
const head = doc.head;
const stylesheet = doc.stylesheet;
const title = doc.title;
const body = doc.body;

append(html, head);
append(head, title);
append(html, body);

// creates a stylesheet
const sheet = (function() {
  const style = stylesheet;
  append(style, document.createTextNode(""));
  append(head, style);
  return style.sheet;
})();

// object to hold styles
const styles = {
  '*': {
    name: '*',
    rules: 'box-sizing: border-box;'
  },
  'body': {
    name: 'body',
    rules: 'background-color: black;'
  }
};

// adds an id to an html element
const addId = (element, idname) => {
  return element.id = idname;
}

// get an element by its id
const getId = id => {
  return document.getElementById(id);
}

// adds a class
const addClass = (element, cssclass) => {
  return element.classList.add(cssclass)
}

// get an array of elements by class name
const getClassArr = cssclass => {
  return document.getElementsByClassName(cssclass);
}

// updates the html content 
const addHtml = (element, content) => {
  return element.innerHTML = `${content}`;
}

// example of creating an html element adding id, class, and content
doc.square = create('div');
const square = doc.square;
append(body, square);
addId(square, 'square');
addClass(square, 'square');
addHtml(square, "<h1>I am a red square</h1>")


// css specificity still applies, uncomment to see
/*
styles['square-id'] = {
  name: '#square',
  rules: 'background-color: blue; margin: 0 auto;'
}
*/

// updating html, uncomment
 /*
addHtml(square, "<h1>I am now blue</h1>");
*/

// adding style rules
styles['square-class'] = {
  name: '.square',
  rules: 'height: 700px; width: 700px; background-color: red;'
} 


// updating the body color, even though the rule was already declared. uncomment.
/*
styles['body'].rules += "background-color: green;"
*/




// keep at bottom of page so rules are already added and updated//

// function that inserts styling rules
const applyStyles = obj => {
  sheet.insertRule(`${obj.name} {${obj.rules}}`);
}

// runs the function to apply all style rules
for(let i = 0; i < Object.values(styles).length; i++) {
  applyStyles(Object.values(styles)[i]);
}