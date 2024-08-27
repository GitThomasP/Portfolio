export default function projectsCard(img, title, description) {
  return (
    <>  
      <img src={img}></img>
      <h2>{title}</h2>
      <p>{description}</p>
    </>
  );

}