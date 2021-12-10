---
createdDate: 2021-12-10
timeRequired: 1 Hour
topics: instruction,workshop, CSS, HTML
---

### Overview

In this workshop, you will be manipulating a header and three divs in different ways utilizing CSS animations.

To begin, navigate to `css/style.css` and begin working following along with the comments.

### Objective

By the end of this workshop, you will have four elements animating in different ways in the browser.

### Topics

> - HTML
> - CSS
> - CSS Animations

### Context

CSS animations are a topic that could take up a week of the course alone. In this workshop, we only glimpse the depth of their power. Many professional developers utilize libraries to provide them with animations for their elements due to how complex they can be to write. 

It is important to understand that CSS animations are created in *two parts*. 

First, you define their behavior in broad terms in the `@keyframes` At-Rule. 'Keyframes' refers to what occurs at every step as the animation progresses; this term is borrowed from the animation industry. 

Second, you apply your animations to the elements utilizing these animation props:

- animation-name
- animation-duration
- animation-delay
- animation-iteration-count
- animation-timing-function
- animation-direction

Though these can all be written shorthand with just `animation`.

This separation is to create modular functionality. You can reuse the same `@keyframes` and adjust its behavior per element it is applied to.

### Additional Resources

- [CSS-Tricks Animations Almanac Entry](https://css-tricks.com/almanac/properties/a/animation/)
- [Modern Javascript Tutoria's CSS Animations](https://javascript.info/css-animations)

