// import card1 from "../images/card1.png";
import star from "../images/star.svg";
// import data from "../data";

function Card(props) {

  let badgeText 
  if (props.openSpots === 0) {
    badgeText = "Sold Out";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <section className="card" >
      <div className="card-section card-section-left">
        {badgeText && <div className="card-badge">{badgeText}</div>}
      <img className="cards-image" alt="logo" src={props.coverImg} />
      <div className="card-stats">
        <p>
          <img src={star} alt="logo" className="card-star" />
          <span>{props.stats.rating}</span>
          <span>{props.stats.reviewCount}</span>
          • <span>{props.location}</span>
        </p>
        <p>{props.title}</p>
        <p>
          <strong>${props.price}</strong>/person
        </p>
      </div>
      </div>
     
    </section>
  );
}

export default Card;

