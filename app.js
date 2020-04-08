const list = document.querySelector('.list');
const toggleList = document.querySelector('#toggleList');

const ul = document.querySelector('ul');
const addItemButton = document.querySelector('.addItemButton');
const addItemInput = document.querySelector('.addItemInput');


const description = document.querySelector('.description');
const descriptionButton = document.querySelector('.description-button');

const listItems = ul.children;


function attachLiButtons (li) {
  let up = document.createElement('button');
  up.className = 'up';
  up.textContent = 'up';
  li.appendChild(up);
  
  let down = document.createElement('button');
  down.className = 'down';
  down.textContent = 'down';
  li.appendChild(down);
  
  let remove = document.createElement('button');
  remove.className = 'remove';
  remove.textContent = 'remove';
  li.appendChild(remove);
};

for (let i = 0; i < listItems.length; i++) {
    attachLiButtons(listItems[i]);
}

// Toggles list when Hide list button clicked
toggleList.addEventListener('click', () => {
    if (list.style.display == 'none') {
    list.style.display = 'block';
  } else {
    list.style.display = 'none';
  }
});


// Adds li to list with Add item button and input field
addItemButton.addEventListener('click', () => {   
   if (addItemInput.value) {
   ul.innerHTML += `<li>${addItemInput.value}</li>`
   
   let addedItem = ul.lastChild;
   attachLiButtons(addedItem);
   addItemInput.value = '';
   } else {
     alert('Add an item to the input field.');
   }
});


// Changes list description with Change list description buton and input field
descriptionButton.addEventListener('click', () => {
    let descriptionContent = document.querySelector('input.description').value;

    if (descriptionContent) {
      description.textContent = descriptionContent + ':';
    } else {
     alert('Add an item to the input field.');      
    }
});


// Perform action based on up, down, remove button click 

document.addEventListener('click', (event) => {
  let currentLi = event.target.parentNode;     

  if (event.target.className == 'up' && currentLi.previousElementSibling){
    ul.insertBefore(currentLi, currentLi.previousElementSibling);    
  } else if (event.target.className == 'down' && currentLi.nextElementSibling) {
    ul.insertBefore(currentLi.nextElementSibling, currentLi);    
  } else if (event.target.className == 'remove') {
    ul.removeChild(currentLi);    
  }
});



