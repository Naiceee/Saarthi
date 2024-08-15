function CourseCard(props) {
    return (
      <div className="card card-compact w-[60%] m-auto card-bordered text-center p-10 carousel-item sm:w-[25%] mt-4">
        <h2>{props.courseName}</h2>
        <h2>{props.videoLink}</h2>
        <h2>{props.teacherName}</h2>
      </div>
    );
}

export default CourseCard;