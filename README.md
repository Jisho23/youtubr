# YouTubr Example app

This is the code we built in class, but a bit more streamlined for readability. All components are now functional if they're stateless.

## Steps we took to build

1. Break the app into components
2. Build a static version of the app
3. Determine what should be stateful
4. Determine in which component each piece of state should live
5. Hard-code initial states
6. Add inverse data flow
7. Add server communication

## Adding API key

create a file in the `src` directory called `keys.js`.

Paste this code:

```js
export default {
  API_KEY: `<API Key here>`
};

```
Use the API key from class or your own to use.

## lodash debounce

Here's the ._debounce function we can add if we want to fetch each time we type a letter into the search bar.

```js
//_.debounce is passed a function and an amount of time (n) in milliseconds.
// it will return a copy of the passed in function that can only be called
// once per n seconds

const videoSearch = _.debounce(term => {
  this.videoSearch(term);
}, 200);

// videoSearch is now a function you can pass as the callback prop
```

To use it, you'll have to import the lodash library into your project.
