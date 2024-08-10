function ReviewCard(props) {
  return (
    <div className="card bg-base-100 w-[80%] m-auto h-96 shadow-xl sm:w-72">
      <div className="card-body">
        <div className="overflow-auto h-[75%]">
          <p>{props.review}</p>
        </div>
        <div className="flex gap-5">
          <img className="h-12 rounded-full" src={props.img} alt="profile" />
          <h4 className="card-title">{props.name}</h4>
        </div>
      </div>
    </div>
  );
}

export default ReviewCard;
