var PresidentsList = React.createClass({
  getInitialState: function(){
    return {
      presidents: ["Washington", "Adams","Jefferson"]
    }
  },
  addNewPresident: function(president){
    this.setState({
      presidents: this.state.presidents.concat([president])
    })
  },
  render: function() {
    return (
      <div>
        <AddPresident addNew={this.addNewPresident}/>
        <President lastNames={this.state.presidents}/>
      </div>
    );
  }
});

var AddPresident = React.createClass({
  getInitialState: function(){
    return {
      typedVal: ""
    }
  },
  getValue: function(e){
    this.setState({
      typedVal: e.target.value
    })
  },
  handleAddNewPresident: function(e){
    e.preventDefault();
    this.props.addNew(this.state.typedVal)
    this.setState({
      typedVal: ""
    })
    e.target.childNodes[0].focus();
  },
  render: function(){
    return (
    <div>
      <form onSubmit={this.handleAddNewPresident}>
        <input type="text" onChange={this.getValue} value={this.state.typedVal} autoFocus/>
        <input  type="submit" value="Add a President"/>
      </form>
    </div>
    )
  }
});

var President = React.createClass({
  render: function(){
    var list = this.props.lastNames.map(function(president, i){
      return (
        <li key ={i}>{president}</li>
        )
    })
    return (
      <div>
        <ul>
          {list}
        </ul>
      </div>
      )
  }
})

React.render(<PresidentsList/>, document.body)