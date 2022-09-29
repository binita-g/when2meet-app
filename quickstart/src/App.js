import React from "react";
import "./styles.css";
import ScheduleSelector from "react-schedule-selector";

class App extends React.Component {
  state = { schedule: [] };

  handleChange = (newSchedule) => {
    this.setState({ schedule: newSchedule });
  };

  render() {
    return (
      <div className="App">
        <h1>When2Meet</h1>
        <div class="schedules">
          <div class="cal">
            <ScheduleSelector
              selection={this.state.schedule}
              numDays={5}
              minTime={8}
              maxTime={22}
              hourlyChunks={1}
              onChange={this.handleChange}
            />
          </div>
          <div class="cal">
            <ScheduleSelector
              selection={this.state.schedule}
              numDays={5}
              minTime={8}
              maxTime={22}
              hourlyChunks={1}
              onChange={this.handleChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
