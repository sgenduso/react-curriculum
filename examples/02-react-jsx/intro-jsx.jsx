//Nested HTML tags
var element = <p className="bold">Tokyo Dog</p>;

var element = <ul>
  <li className="completed">Molly Moon</li>
  <li>Pie Mobile</li>
</ul>;

//Nested React component class
var Truck = React.createClass({
  render: function() {
    return <li>
      <a href='http://www.streetdonuts.com/'>Street Donuts</a>
    </li>;
  }
})

var Trucks = React.createClass({
  render: function() {
    return <ul>
      <Truck />
    </ul>;
  }
})

var element = <Trucks />;

//Single-line attribute expressions
var source = 'http://i.imgur.com/nVPXKtz.jpg';
var element = <img src={source} alt = 'Saffron Spice' />;

//Multi-line attribute expressions
var element = <input
  onChange={this.handleChange}
  type='text'
  value={this.state.searchTerm}
/>;

//Child expressions
var food = 'Cheese';
var element = <p>{food} Wizards</p>;

//Boolean attributes
var element1 = <input type='button' disabled />;
var element2 = <input type='button' disabled={true} />;
var element3 = <input type='button' disabled={false} />;

//Ternary attribute expressions
var isHealthy = false;
var element = <div className={isHealthy ? 'hide' : 'show'} />;

//Ternary child expressions
var isHealthy = false;
var element = <div>
  {isHealthy ? <p>Yuck!</p> : <p>Delicious!</p>}
</div>

var isHealthy = false;
var message;

if (isHealthy) {
  message = <p>Yuck!</p>;
}
else {
  message = <p>Delicious!</p>;
}

var element = <div>
  {message}
</div>;
