import holidaySearch from "../images/holidaysearch.PNG";
import eventPlanning from "../images/eventplanning.PNG";
import workdayscheduler from "../images/workdayscheduler.PNG";

const styles = {
  mainDiv: {
    backgroundColor: "black",
    margin: 0,
    padding: 0,
  },
  a: {
    width: "30%",
    height: "30%",
  },
};

export default function Project() {
  return (
    <div style={styles.mainDiv}>
      <a
        href="https://github.com/gannacon/Project_1"
        class="projectImage"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={holidaySearch}
          alt="Image of holiday search."
          style={styles.a}
        />
      </a>
      <a
        href="https://github.com/brownnicholasj/the-event-planning"
        class="projectImage"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={eventPlanning}
          alt="Image of event planning."
          style={styles.a}
        />
      </a>
      <a
        href="https://github.com/campe0n/dplanner_mf"
        class="projectImage"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={workdayscheduler}
          alt="Image of work day scheduler."
          style={styles.a}
        />
      </a>
    </div>
  );
}
