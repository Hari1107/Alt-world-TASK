import TrafficLight from "./TrafficLight";

import "./styles.css";

const trafficStates = {
  red: {
    backgroundColor: "red",
    duration: 2000,
    next: "yellow"
  },
  yellow: {
    backgroundColor: "yellow",
    duration: 2000,
    next: "green"
  },
  green: {
    backgroundColor: "green",
    duration: 2000,
    next: "red"
  }
};

export default function App() {
  return (
    <div className="wrapper">
      <TrafficLight trafficStates={trafficStates} />
    </div>
  );
}
