import "../index.css";

export default function Button({ title, image, link, text }) {
  return (
    <a href={link}>
      <button>
        <p>{title}</p>
      </button>
    </a>
  );
}
