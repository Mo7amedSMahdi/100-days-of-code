# Frontend Mentor - Base Apparel coming soon page

## Overview

### The challenge

In this challenge I build out this coming soon page and get it looking as close to the design as possible.

I used ReactJS complete the challenge.

Your users should be able to:

- View the optimal layout for the site depending on their device's screen size.
- See hover states for all interactive elements on the page.
- Receive an error message when the form is submitted if:
  - The input field is empty.
  - The email address is not formatted correctly.

### Screenshot

![](./src/images/ScreenShot.png)
![](./src/images/ScreenShot1.png)

### Links

- Live Site URL: [Vercel](https://100-days-of-code-day-2.vercel.app/)

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

This is a nice, small project to practice handling user interactions and updating the DOM. Perfect for anyone who has learned the basics of JavaScript!

To see how you can add code snippets, see below:

```css
:root {
  /* Primary Colors */
  --clr-orange: hsl(25, 97%, 53%);

  /* Neutral colors */
  --clr-white: hsl(0, 0%, 100%);
  --clr-light-gray: hsl(217, 12%, 63%);
  --clr-medium-gray: hsl(216, 12%, 54%);
  --clr-light-dark-blue: hsl(213, 19%, 20%);
  --clr-dark-blue: hsl(213, 19%, 18%);
  --clr-very-dark-blue: hsl(216, 12%, 8%);

  /* Fonts */
  --font-primary: 'Overpass', sans-serif;

  font-size: 10px;
}
```

```js
const [page, setPage] = useState('rating');
const [rate, setRate] = useState(0);
const [rateList, setRateList] = useState(list);

const handleClick = (index) => {
  const newRateList = rateList.map((item) => {
    if (item.index === index) {
      item.selected = !item.selected;
    } else {
      item.selected = false;
    }
    return item;
  });
  setRateList(newRateList);
  setRate(index);
};

const handleSubmit = () => {
  console.log(rate);
  if (rate === 0) return;
  setPage('thankyou');
};
if (page === 'thankyou') return <ThankYouForm rating={rate} />;
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
