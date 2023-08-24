# Computools

Here are README files for the calculator and password generator HTML pages:

## Calculator

This is a simple calculator app created with HTML, CSS, and JavaScript.

### Features

- Performs basic arithmetic operations (addition, subtraction, multiplication, division)
- Clear button to delete entire calculation
- Backspace button to remove last digit
- Keyboard support for entering numbers
- Equals button to compute result
- Display area to view calculations
- Home button to return to main page

### JavaScript

The `calc.js` file contains the logic for the calculator. Key functions:

- `updateDisplay()` to update what digits are shown
- `operate()` to compute result of an operation
- `handleButtonPress()` to handle digit, operator, and other button clicks

### CSS 

The `style.css` file styles the calculator buttons, display, and layout.

### Assets

The `icons` folder contains the calculator icon image file.

## Password Generator

This generates a random password based on selected criteria.

### Features

- Generate button to create a new random password
- Options to select password length and include uppercase, lowercase, numbers, symbols
- Display area to show generated password
- Home button to return to main page  

### JavaScript

The `pass.js` file contains the logic for generating passwords. Key functions:

- `generateOne()` to generate a new password based on criteria
- `getRandom()` to get a random character for the password

### CSS

The `style.css` file styles the password interface.

### Assets

No external assets needed.
