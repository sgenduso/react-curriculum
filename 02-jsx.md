# JSX

* List advantages for using JSX

`helloworld.jsx`:

```js
React.render(
  <h1>Hello, world!</h1>,
  document.getElementById('hello')
);
```

### What is JSX?

Notice `helloworld.jsx` isn't JS, it is JSX.
JSX is JavaScript with some [React sugar](https://facebook.github.io/react/docs/jsx-in-depth.html) built into it.
JSX enables you to write HTML-esque code straight into your JS.
It is very similiar to other templating libraries.

Let's take a look at `helloworld.jsx` again`:
```js

React.render(
  <h1>Hello, world!</h1>,
  document.getElementById('example')
);
```
Notice `<h1>Hello, world!</h1>` is inserted into the middle of the code.
That looks like HTML! Not JS!

JSX is optional and React can actually be written in JS:

```js
React.render(
  React.createElement('h1', null, 'Hello, world!'),
  document.getElementById('example')
);
```

Most people agree the JSX version is much cleaner,
easier to read, and easier to write.
If you have a negative gut-reaction to JSX,
[just give it five minutes](https://signalvnoise.com/posts/3124-give-it-five-minutes).

## Things are breaking!

- Unexpected token <
	- make sure you have a type of "text/jsx" for your script tag
- Unexpected end of input at http://localhost:8080/hello%20world/helloworld.js:15:undefined
	- Make sure your component has a self closing tag
  - Make sure ALL of your tags close (even the self closing tags must have a /)

## Questions

  * What is JSX?
  * Why is it preferable to use JSX?
  * Is JSX a template language?
  * In our Hello World example, if you open the chrome developer tools you will see this warning in the console, "You are using the in-browser JSX transformer. Be sure to precompile your JSX for production - http://facebook.github.io/react/docs/tooling-integration.html#jsx". What does this mean? How do we handle this in production?

## Resources

* [Intro to React](http://developer.telerik.com/featured/introduction-to-the-react-javascript-framework/)
