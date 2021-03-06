// DOM traversal --> downside when we change the html order
const ul = document.body.firstElementChild.nextElementSibling; // body --> header --> ul
const firstLi = ul.firstElementChild; // Expected a first list item

console.log(firstLi);

// Manipulate DOM elements
const section = document.querySelector('section');
const button = document.querySelector('button');

// section.style.backgroundColor = 'blue';
section.className = 'red-bg';

button.addEventListener('click', () => {
    // Using className method
    // if (section.className === 'red-bg visible') {
    //     section.className = 'red-bg invisible';
    // } else {
    //     section.className = 'red-bg visible';
    // }

    // Using classList
    // section.classList.toggle('visible');
    section.classList.toggle('invisible');
});

// Get the h1 element & change it by getElementById
const h1 = document.getElementById('main-title');

h1.textContent = 'Some new title!';
h1.style.color = 'white';
h1.style.backgroundColor = 'black';

// Get the last item of the list
const li = document.querySelector('li:last-of-type');
li.textContent = li.textContent + ' (Changed)!';

// Select body of the document
const body = document.body;

// Select all items of the list
// const listItemElements = document.querySelectorAll('li');
const listItemElements = document.getElementsByTagName('li');

for (const listItemEl of listItemElements) {
    console.dir(listItemEl);
}