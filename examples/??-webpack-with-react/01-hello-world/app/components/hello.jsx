var React = require('react');

var Hello = React.createClass({
  getInitialState: function() {
    return { who: 'world' };
  },

  handleChange: function(event) {
    var nextState = { who: event.target.value };
    this.setState(nextState);
  },

  render: function() {
    var greeting;

    if (this.state.who.trim() === '') {
      greeting = 'Hello?';
    } else {
      greeting = 'Hello ' + this.state.who;
    }

    return <div>
      <h1>{greeting}</h1>
      <input
        onChange={this.handleChange}
        type={'text'}
        value={this.state.who}
      />
    </div>;
  }
});

module.exports = Hello;
