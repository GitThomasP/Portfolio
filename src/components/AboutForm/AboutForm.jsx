import "./AboutForm.css";

//Object destructuring i stedet for at skrive props.image, props.title, props.description
export default function AboutForm({image, title, description}) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}