var element = <p className="bold">Tokyo Dog</p>;

var element = <ul>
  <li className="completed">Molly Moon</li>
  <li>Pie Mobile</li>
</ul>;

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

var source = 'http://i.imgur.com/nVPXKtz.jpg';
var element = <img src={source} alt = 'Saffron Spice' />;

var element = <input
  onChange={this.handleChange}
  type='text'
  value={this.state.searchTerm}
/>;

var food = 'Cheese';
var element = <p>{food} Wizards</p>;
