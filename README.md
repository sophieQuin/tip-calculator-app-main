# Frontend Mentor - Tip calculator app solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person


## My process

I have started by studying the Figma representation of the application. Making note of what CSS properties will be needed to reproduce its design. 
The use of Flexbox to wrap the layout, opportunity to use grid to play with display, positioning...

HTML AND CSS

Since the writing element of the app is quite small, I have deleted content in order to play with the layout first while testing it on mobile version.

Once that was satisfactory, I moved to the next section. The process in this part was as follow, working HTML semantics and CSS at the same time :

- background color and SPLI TTER title
- White container (Bill container)
- Green container (Display container)

Once the above was working well with flexbox wrap, I started to work with the more detailed element of the app, with the following :

- the calculator section by creating a form.
- buttons
- grid for the display
- reset button

Once the layout, overall colors were satisfactory, I finalised this side of the project by applying all the final touch such as font-size while following the measurment on Figma.
Once done, I have tested the application over different media size.

JAVASCRIPT

I have located what information I needed and how to transform them into scripts.

Created all my variable and added some IDs in my HTML file where necessary in order to collect the information needed.


### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- JavaScript


### What I learned

It took me few days to complete this challenge. This is the second challenge I have done from frontendMentor, and it went a lot smoother than the first one (Sunnyside Agency).
I have learned from the previous challenge, by taking my time to plan ahead on how to approach and complete the task.
I was now more aware of the consequences of my positioning and styling when it comes to responsiveness. What works well and not so well.
I am more confident when it comes to HTML and CSS.

The javascript part was challenging. It is the first challenge (apart from the practice questions on Codecademy) where I had to go deep into DOM Manipulation. 
I have learned the following :

- how to access and manipulate value from an <input> element
- apply my knowledge of nested function
- apply my knowledge of event listeners
- to not use event as HTML attribute as it is considered bad practice
- learn how to apply number formating


### Continued development

There is room for improvement in what I have accomplished. I would think a function callback would be possible so I don't have to repeat my function whether we use a button or the custom field.



### Useful resources

W3schools (https://www.w3schools.com/Jsref/met_document_queryselector.asp) - It refresh my understanding that it only take the first matching element, therefore what I needed was QuerySelectorAll() to select my buttons on the keyboard section.

StackOverflow (https://stackoverflow.com/questions/11563638/how-do-i-get-the-value-of-text-input-field-using-javascript) - access value from an input. Therefore, I have added value attribute in one of my input so I can access the information to make my calculation.

Developper Mozilla (https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction) - A good refresher when it comes to DOM Manipulation. I have read through some events to see which one could help me access and manipulate the value from the customs field. That is how I have found Keyup event and used.




## Disclaimer

No tutorial has been used to finish the project.
To format the number in decimal, I have used a code I have found online
(https://www.codegrepper.com/code-examples/javascript/javascript+format+number+with+commas+and+decimal)

