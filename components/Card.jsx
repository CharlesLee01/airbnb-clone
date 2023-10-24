export default function Card(props) {
  return (
    <div>
      <div className="card">
        <img src={`images/${props.coverImg}`} className="card-img" />
        <div className="rating">
          <img src={`images/star.png`} className="star-icon" />
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
