export default function Button({ title, image, link, text }) {
  return (
    <a href={link}>
      <button>
        <img src={image} alt={title}></img>
      </button>
      <p>{text}</p>
    </a>
  );
}
