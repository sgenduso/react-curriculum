# State

## Objectives

* Understand what `state` is in React and how to use it
* Use setState to change the state of components
* Combine props, events and state to build more robust react applications

## Introduction

Up until now, we have used react to display information staticly (there has been no dynamic updating of the DOM). In order to make our app dynamic, we need to introduce a way to re-render the DOM. Our tool to do that is state. When a component's state data changes, the render function will be called again to re-render the change in state. Let's see this in an example using `this.state`.

## How is it different than props?

You can read a great answer [here](https://github.com/uberVU/react-guide/blob/master/props-vs-state.md). Pay close attention to the chart as well as the portion discussing "Does this go inside props or state?"

## Using state to count clicks

```js
    var App = React.createClass({
      getInitialState: function(){
        return {
          count: 0
        }
      },
      count: function(){
        this.setState({
          count: this.state.count + 1
        })
      },
      render: function() {
        return (
          <div>
            <h1>{this.state.count}</h1>
            <button onClick={this.count}>Click me!</button>
          </div>
        );
      }
    });

    React.render(<App/>, document.body)
```

## Using state to display typing

```js
var App = React.createClass({
  getInitialState: function(){
    return {
      text: ""
    }
  },
  changeText: function(e){
    this.setState({
      text: e.target.value
    })
  },
  clearText: function(e){
    this.setState({
      text: ""
    })
    e.target.previousSibling.focus();
  },
  render: function() {
    return (
      <div>
        <h1>{this.props.children}</h1>
        <h2>{this.state.text}</h2>
        <input type="text" value={this.state.text} onChange={this.changeText} autoFocus/>
        <button onClick={this.clearText}>Clear Text</button>

      </div>
    );
  }
});

React.render(<App>Type in here!</App>, document.body)
```

## Using state to toggle information based on a checkbox 

```js
    var Checkbox = React.createClass({
      getInitialState: function(){
        return {
          isChecked: false
        }
      },
      toggleChecked: function(e){
        this.setState({
          isChecked: e.target.checked
        })
      },
      render: function(){
        return (
          <div>
            <h1>Is it checked? {this.state.isChecked ? "WOOHOO!" : "NAHHH"}</h1>
            <input type="checkbox" onChange={this.toggleChecked}/>
          </div>
        )
      }
    })

    React.render(<Checkbox/>, document.body)
```

## Passing State From Parent Components as Props to Children

As we've seen, state is a fantastic way of managing the changes to a component, but we can also use it to pass down data to children components as their props. Let's review this example:

```js
var Parent = React.createClass({
  getInitialState: function(){
    return {
      names: ["tom", "sarah"]
    }
  },
  render: function() {
    console.log("Parent's State: ", this.state)
    return (
      <div>
        <Child firstName={this.state.names}/>
      </div>
    );
  }
});

var Child = React.createClass({
  render: function() {
    console.log("Child's Props: ", this.props)
    return (
      <div>
        CHECK YOUR CHROME CONSOLE!
      </div>
    );
  }
});

React.render(<Parent/>, document.body)
```

Take a look at this example in the console and what do you see? The child's props are the same as the parent's state! How cool is that? This means that we can use the parent's state to manage any changes to the props of its children. We pass props to children through state and manipulate it by using the `setState` method.

## Questions

* What is state?
* What does the getInitialState method do? What does it return?
* What does the setState method do?
* What are the differences between state and props? When do you use each?

## Assignment

* Read [this](https://medium.com/react-tutorials/react-state-14a6d4f736f5) Tutorial
* Presidents Challenge
  - Create Three components, PresidentList, AddPresident and President. 
    + PresidentList should render a div with the AddPresident component and President Component 
    + AddPresident should render a div with a form. Inside the form there should be an text input and a button/input to submit the form. 
    + When the form is submitted, you should capture the value of what the user typed in an add it to an array called `presidents`.
    + The `presidents` array should start with the value of ["Washington", "Adams", "Jefferson"]
    + When you add a president, you will change the state of the array, which means that what you return will be a new array with the president you have just added. You may think the `.push` method will work, but remember what that method returns to you. You want to add additional items to an array, but return a new array with the added item. Using the `.concat` method will be far easier.
  - In order to capture form value you can use `e.target`. Take a look at the previous examples and [these docs](https://developer.mozilla.org/en-US/docs/Web/API/Event/target) for some more insight  

Here is what it should look like: 

[![Gyazo](https://i.gyazo.com/09ea982695533095e274db62a363db0c.gif)](https://gyazo.com/09ea982695533095e274db62a363db0c)
