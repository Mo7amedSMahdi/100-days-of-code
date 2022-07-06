# Frontend Mentor - Product preview card component solution

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover and focus states for interactive elements

### Screenshot

![](./src/images/desktop-preview.jpg)
![](./src/images/ScreenShot-desktop.png)
![](./src/images/ScreenShot-mobile.png)

### Links

- Live Site URL: [](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/)
- JS library

### What I learned

In this Challenge I learn how to design a product card using flexbox and react, Also I learn how to window size in react and how to create react custom hooks.

To see how you can add code snippets, see below:

```html
<h1>Some HTML code I'm proud of</h1>
```

```css
.card-content .category-title p {
  font-size: 1.125rem;
  font-weight: 500;
  letter-spacing: 0.2rem;
  text-transform: uppercase;
  color: var(--clr-dark-grayish-blue);
}

.card-content .prodect-title h2 {
  font-family: var(--font-secondary);
  font-size: 2.3rem;
  font-weight: 700;
  color: var(--clr-very-dark-blue);
}

.card-content .product-desc p {
  font-size: 1.125rem;
  font-weight: 500;
  color: var(--clr-dark-grayish-blue);
}

.card-actions {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  gap: 1rem;
}
```

```js
const [CardImage, SetCardImage] = useState(CardImageMobile);
const size = useWindowSize();

useEffect(() => {
  if (size.width > 768) {
    SetCardImage(CardImageDesktop);
  } else {
    SetCardImage(CardImageMobile);
  }
}, [size.width]);
```

## Author

- Github - [Mohammed Salah](https://github.com/Mo7amedSMahdi)
- Frontend Mentor - [@Mo7amedSMahdi](https://www.frontendmentor.io/profile/Mo7amedSMahdi)
- Twitter - [@devMo7amed](https://twitter.com/devMo7amed)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../issues/).

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments

- Hat tip to anyone whose code was used
- Microverse program
- My standup team
- Microverse team
- My family's support
- Frontend Mentor [](https://www.frontendmentor.io)
