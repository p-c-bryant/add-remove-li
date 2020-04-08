const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');
const listUl = listDiv.querySelector('ul');

const upCaseLi = document.getElementsByTagName('li');

// Event handler to cap / uncap li elements when mouseover or mouseout
  listUl.addEventListener('click', (event) => {
      if (event.target.tagName == 'BUTTON'){
        if (event.target.className == 'remove') {
          let li = event.target.parentNode;
          let ul = li.parentNode;
          ul.removeChild(li);
        }
        if (event.target.className == 'up') {
          let li = event.target.parentNode;
          let prevLi = li.previousElementSibling;
          let ul = li.parentNode;
          
          if (prevLi) {
            ul.insertBefore(li, prevLi);
          }
        }
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


  
  
  
  
  
  
  