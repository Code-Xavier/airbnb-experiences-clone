// import card1 from "../images/card1.png";
import star from "../images/star.svg";
// import data from "../data";

function Card({
  id,
  title,
  description,
  price,
  coverImg,
  stats,
  location,
  openSpots,
}) {
  return (
    <section className="card" >
      <div className="card-section card-section-left">
      <img className="cards-image" alt="logo" src={coverImg} />
      <div className="card-stats">
        <p>
          <img src={star} alt="logo" className="card-star" />
          {/* <span>{stats.rating}</span>
          <span>{stats.reviewCount}</span> */}
          • <span>{location}</span>
        </p>
        <p>{title}</p>
        <p>
          <strong>${price}</strong>/person
        </p>
      </div>
      </div>
     
    </section>
  );
}

export default Card;

/* <img className="cards-image" alt="logo" src={props.img} />
      <div className="card-stats">
        <p>
          <img src={props.star} alt="logo" className="card-star"/>
          <span>{props.rating}</span>
          <span>{props.reviewCount}</span>  • <span>{props.country}</span> 
        </p>
        <p>{props.title}</p>
        <p><strong>${props.price}</strong>/person</p>
      </div> */
