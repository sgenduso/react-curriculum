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
        <h1>{this.state.text}</h1>
        <input type="text" value={this.state.text} onChange={this.changeText} autoFocus/>
        <button onClick={this.clearText}>Clear Text</button>

      </div>
    );
  }
});

React.render(<App>Type in here!</App>, document.body)