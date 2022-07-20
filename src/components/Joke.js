function Card(props) {

  let badgeText 
  if (props.card.openSpots === 0) {
    badgeText = "Sold Out";
  } else if (props.card.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <section className="card" >
      <div className="card-section card-section-left">
        {badgeText && <div className="card-badge">{badgeText}</div>}
      <img className="cards-image" alt="logo" src={props.card.coverImg} />
      <div className="card-stats">
        <p>
          <img src={star} alt="logo" className="card-star" />
          {/* <span>{stats.rating}</span>
          <span>{stats.reviewCount}</span> */}
          • <span>{props.card.location}</span>
        </p>
        <p>{props.card.title}</p>
        <p>
          <strong>${props.card.price}</strong>/person
        </p>
      </div>
      </div>
     
    </section>
  );
}