export default function Button({ title, image, link }) {
  return (
    <a href={link}>
      <button>
        <img src={image} alt={title}></img>
      </button>
    </a>
  );
}
