function Card(props) {
    return (
      <div className="card bg-base-100 image-full w-96 shadow-xl">
        <figure>
          <img src={props.img} alt={props.title} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{props.title}</h2>
          <p>{props.description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Join Course</button>
          </div>
        </div>
      </div>
    );
}

export default Card;