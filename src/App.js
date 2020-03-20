import React from "react";

import "./App.css";
import Pie from "./components/charts/pie";
import NumberTemplate from "./components/numbers/number";
import Bullet from "./components/charts/bullet";


const REFRESH_RATE = 60000;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      greeting: "",
      name: "",
      wisconsinData: "",
      wisconsinChartData: []
    };
  }

  componentDidMount() {
    this.getScrapingData();
  }

  getScrapingData() {
    console.log('getScrapingData executed')
    fetch(`/api/data`)
      .then(response => response.json())
      .then(response => {
        let pieChartData = this.createChartData(response);
        console.log(`pieChartData ${JSON.stringify(pieChartData)}`);

        this.setState({
          wisconsinData: response,
          wisconsinChartData: pieChartData
        });
      });
  }

  createChartData(data) {
    let results = [];

    let { ["state"]: _, ...numbericData } = data;
    Object.keys(numbericData).forEach(key => {
      let record = this.getChartObject(data, key);
      if (record !== null) {
        results.push(record);
      }
    });

    // scheduling defined time data fetch
    setTimeout(this.getScrapingData.bind(this), REFRESH_RATE)
    return results;
  }

  getChartObject(data, key) {
    let record = {
      id: "",
      label: "",
      value: "",
      color: ""
    };

    if (data[key] <= 0) {
      return null;
    } else {
      record = {
        id: key,
        value: data[key]
      };
    }

    switch (key) {
      case "activeCases":
        record.label = `Active Cases: ${data[key]}`;
        record.color = "hsl(204, 70%, 50%)";
        break;

      case "totalDeaths":
        record.label = `Deceased count: ${data[key]}`;
        record.color = "hsl(59, 70%, 50%)";
        break;

      case "totalRecovered":
          record.label = `Recovered count: ${data[key]}`;
          record.color = "hsl(71, 70%, 50%)";
        break;

      default:
        return null;
    }
    return record;
  }

  render() {
    return (
      <div className="App">
        <div style={{margin: '10px', fontSize: '16px', fontFamily: 'fantasy', fontWeight: 'bolder'}}>
          Wisconsin COVID-19 Live Status
        </div>
        {this.state.wisconsinChartData.length > 0 && (
          <div>
            <Pie data={this.state.wisconsinChartData} />

            <div style={{'flex': 2, marginTop: '80px'}}>
              <Bullet data={[{
                id: "WI", 
                ranges: [0, 50, 100, 150, (this.state.wisconsinData.totalCases + 25)],
                measures: [this.state.wisconsinData.totalDeaths],
                markers: [this.state.wisconsinData.totalCases]
                }]} />
            </div>     
          {/* <div style={{'flex': 1, display: 'flex', margin: '50px'}}>
            
            <div style={{backgroundColor: '#21a521'}}>
                <NumberTemplate label="Total Recovered" value={this.state.wisconsinData.totalRecovered} />
              </div>

              <div style={{'flex': 1, backgroundColor: '#8a8a8a'}}>
                <NumberTemplate label="Total Deceased" value={this.state.wisconsinData.totalDeaths} />
              </div>
          </div> */}
          </div>
          
        )}
      </div>

      /* <div className="App">
        <ResponsivePie
          data={this.state.wisconsinChartData}
          margin={{ top: 1.5, right: 1.5, bottom: 1.5, left: 1.5 }}
          innerRadius={0.5}
        />
        <header className="App-header">
          <p>{this.state.wisconsinData.totalCases}</p>

          
        </header>
      </div> */
    );
  }
}

export default App;
