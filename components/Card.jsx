export default function Card(props) {
  let badge;
  
  if (props.openSpots === 0) {
    badge = 'SOLD OUT';
  } else if (props.location === 'Online') {
    badge = 'ONLINE';
  }

  return (
    <div>
      <div className="card">
        {badge && <p className="badge">{badge}</p>}
        <img src={`https://github.com/CharlesLee01/airbnb-clone/blob/main/images/${props.coverImg}`} className="card-img" />
        <div className="rating">
          <img src="https://github.com/CharlesLee01/airbnb-clone/blob/main/images/star.png" className="star-icon" />
          <span>
            {props.stats.rating}
            <span className="gray-text">
              ({props.stats.reviewCount}) • {props.location}
            </span>
          </span>
        </div>

        <p className="title">{props.title}</p>
        <p>
          <b>From ${props.price}</b> / person
        </p>
      </div>
    </div>
  );
}
