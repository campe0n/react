import "../index.css";

const styles = {
  p: {
    textAlign: "center",
  },
};

export default function About() {
  return (
    <div className="deck">
      <h2>About Me</h2>
      <p style={styles.p}>
        Hello, My name is Melvin. I'm a full stack developer.
      </p>
      <p style={styles.p}>
        Currently working on mobile first design. Website looks better on a
        phone.
      </p>
    </div>
  );
}
