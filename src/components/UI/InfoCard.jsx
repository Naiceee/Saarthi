function InfoCard(props) {
    return (
      <div className="card card-compact w-[60%] m-auto h-72 card-bordered text-center p-10 carousel-item sm:w-[25%]">
        <h3 className="text-3xl font-semibold card-title self-center">
          {props.title}
        </h3>
        <p className="text-lg font-medium">{props.subtext}</p>
      </div>
    );
}

export default InfoCard;