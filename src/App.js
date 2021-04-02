import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component'
import './App.css';

class App extends Component {
  constructor() {
    super();

    let icons = ["bar_chart","show_chart","pie_chart","bubble_chart","scatter_plot","leak_add","multiline_chart","bar_chart"];

    this.state = {
      kpis: [{
        name: "Paid Clicks by Application Type",
        type: "Bar Chart",
        id: "id1",
        net: 300000,
        score: 909000,
        icons: icons[0]
      }, 
      {
        name: "Paid Search Clicks per Hour by Website",
        type: "Line Chart",
        id: "id2",
        net: -1000,
        score: 6000,
        icons: icons[1]
      },
      {
        name: "Brand A Market Share",
        type: "Bubble Chart",
        id: "id3",
        net: 3.2,
        score: 2.2,
        icons: icons[3]
      },
      {
        name: "Total Investment vs Total ROI over Years of Investment",
        type: "Pie Chart",
        id: "id4",
        net: 33000000,
        score: 2000000,
        icons: icons[2]
      }, 
      {
        name: "Number of Orders vs Age",
        type: "Multi Chart",
        id: "id5",
        net: 5.5,
        score: 7,
        icons: icons[6]

      },
      {
        name: "Customer Behavior Spectrum",
        type: "Radar Chart",
        id: "id6",
        net: 6.0,
        score: -5,
        icons: [5]
      },
      {
        name: "Bulk Orders Placed vs Bulk Orders per Customer",
        type: "Scatter Chart",
        id: "id7",
        net: 4,
        score: 49,
        icons: icons[4]
      },
      {
        name: "Quantity Ordered",
        type: "Gran Chart",
        id: "id8",
        net: -12,
        score: 126,
        icons: icons[7]
      }],
      searchField: ''
    }
  }
  /*If you want to take data from an endpoint
  /*
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({kpi: users}));
  }
  */

  handleChange = (e) => {
    this.setState({searchField: e.target.value})
  }

  render() {
    //Just a quicker way to grab state values 
    const { kpis, searchField } = this.state;
    const filteredKpis = kpis.filter(kpi => 
      kpi.name.toLowerCase().includes(searchField.toLowerCase())
    )

    return (
      <div className="background">
        <br></br>
          <div className="justify-content-center" placeholder="Search">
            <SearchBox 
              searchbox placeholder="Search KPIs"
              handleChange = {this.handleChange}
            />
          </div>
          <br></br>
          <CardList kpis={filteredKpis}>
          </CardList>
          <br></br>
      </div>
    );
  };
}

export default App;
