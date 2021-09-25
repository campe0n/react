import "../index.css";

export default function Button({ title, image, link, text }) {
  return (
    <a href={link}>
      <button>{title}</button>
    </a>
  );
}
