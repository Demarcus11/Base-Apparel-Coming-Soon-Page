# Frontend Mentor - Base Apparel coming soon page solution

This is a solution to the [Base Apparel coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

### Screenshot

![Desktop View](https://drive.google.com/uc?export=view&id=1Kuev-XDVSujURjpIWa-YQf2cf68uutcy)

![Mobile View](https://drive.google.com/uc?export=view&id=1dwOp8eBIUHf84ZhulymqXfTtk-ZpQdMR)

### Links

- Solution URL: [Solution](https://github.com/Demarcus11/Base-Apparel-Coming-Soon-Page.git)
- Live Site URL: [Live](https://demarcus11.github.io/Base-Apparel-Coming-Soon-Page/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- Mobile-first workflow

### What I learned

```js
function validateEmail() {
  const email = input.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Show error styles when email is invalid
  if (!emailRegex.test(email)) {
    errorMessage.textContent = "Please provide a valid email";
    input.style.borderColor = "red";
    errorIcon.style.display = "block";
    return false;
  }

  // Reset to base styles when user enters a valid email
  errorMessage.textContent = "";
  input.style.borderColor = "hsl(0, 36%, 70%)";
  errorIcon.style.display = "none";
  return true;
}

// If the input field is blank and the user clicks off the input, hide error styles
input.addEventListener("blur", function () {
  if (input.value.trim() === "") {
    errorMessage.textContent = "";
    input.style.borderColor = "hsl(0, 36%, 70%)";
    errorIcon.style.display = "none";
  }
});
```

## Author

- Frontend Mentor - [@Demarcus11](https://www.frontendmentor.io/profile/Demarcus11)
