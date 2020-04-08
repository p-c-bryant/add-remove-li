const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');
const removeItemButton = document.querySelector('button.removeItemButton');

const upCaseLi = document.getElementsByTagName('li');

// Event handler to cap / uncap li elements when mouseover or mouseout
  listDiv.addEventListener('mouseover', (event) => {
      if (event.target.tagName == 'LI'){
        event.target.textContent = event.target.textContent.toUpperCase();
      }
  });
  
  listDiv.addEventListener('mouseout', (event) => {
          if (event.target.tagName == 'LI'){
            event.target.textContent = event.target.textContent.toLowerCase();
          }
                            });

// Event handler to toggle content on button click
toggleList.addEventListener('click', () => {
  if (listDiv.style.display == 'none') {
    toggleList.textContent = 'Hide list';
    listDiv.style.display = 'block';
  } else {
    toggleList.textContent = 'Show list';                        
    listDiv.style.display = 'none';
  }                         
});

// Event handler to add content to P element based on user input
descriptionButton.addEventListener('click', () => {
  descriptionP.innerHTML = descriptionInput.value + ':';
  descriptionInput.value = '';
});

// Event handler to add li element to end of ul based on user input
addItemButton.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.createElement('li');
  li.textContent = addItemInput.value;
  ul.appendChild(li);
  addItemInput.value = '';
});

// Event handler to remove li from end of ul   
removeItemButton.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.querySelector('li:last-child');
  ul.removeChild(li);
});  
  
  
  
  
  
  
  