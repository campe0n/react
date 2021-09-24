import "../index.css";

export default function Button({ title, image, link, text }) {
  return (
    <a href={link} className="icons">
      <img src={image} alt={title} className="icons"></img>
    </a>
  );
}
