// Get the h1 element & change it by getElementById
const h1 = document.getElementById('main-title');

h1.textContent = 'Some new title!';
h1.style.color = 'white';
h1.style.backgroundColor = 'black';

// Get the last item of the list
const li = document.querySelector('li:last-of-type');
li.textContent = li.textContent + ' (Changed)!';

const body = document.body;

// Select all items of the list
// const listItemElements = document.querySelectorAll('li');
const listItemElements = document.getElementsByTagName('li');

for (const listItemEl of listItemElements) {
    console.dir(listItemEl);
}