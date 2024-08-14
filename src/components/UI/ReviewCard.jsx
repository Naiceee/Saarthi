function ReviewCard(props) {
  return (
    <div className="card bg-base-100 w-96 h-96 shadow-xl">
      <div className="card-body">
        <p>{props.review}</p>
        <div className="flex gap-5">
          <img className="h-12 rounded-full" src={props.img} alt="profile" />
          <h4 className="card-title">{props.name}</h4>
        </div>
      </div>
    </div>
  );
}

export default ReviewCard;
