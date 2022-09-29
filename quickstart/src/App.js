import React from "react";
import "./styles.css";
import ScheduleSelector from "react-schedule-selector";

// Create React component for the scheduling view
class App extends React.Component {
  state = { schedule: [] };

  // Set state when schedules are changed
  handleChange = (newSchedule) => {
    this.setState({ schedule: newSchedule });
  };

  /* Return React app with two side-by-side calendar views. Show 5 days, 8am-9pm, in 1-hour increments. */
  render() {
    return (
      <div className="App">
        <h1>When2Meet</h1>
        <div class="schedules">
          <div class="cal">
            <h2>Your Availability</h2>
            <ScheduleSelector
              selection={this.state.schedule}
              numDays={5}
              minTime={8}
              maxTime={22}
              hourlyChunks={1}
              onChange={this.handleChange}
            />
          </div>
          <div class="cal" id="group">
            <h2>Group Availability</h2>
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
