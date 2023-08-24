// Get display element
let display = document.getElementById('display'); 

// Get buttons as array
let buttons = Array.from(document.getElementsByClassName('button'));

// Loop through each button
buttons.map(button => {

  // Add click handler to button
  button.addEventListener('click', e => {

    // Check which button was clicked
    switch(e.target.innerText) {

      // Clear display  
      case 'C':
        display.innerText = '';
        break;
      
      // Delete one character
      case '←': 
        display.innerText = display.innerText.slice(0,-1);
        break;

      // Evaluate display text  
      case '=':
        try {
          display.innerText = eval(display.innerText); 
        } catch {
          display.innerText = 'Error'; 
        }
        break;

      // Default case - append button text
      default:
        display.innerText += e.target.innerText;
    }

  });

});