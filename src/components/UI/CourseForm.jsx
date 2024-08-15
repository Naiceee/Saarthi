function CourseForm(props) {

  return (
    <>
      <h1 className="text-5xl p-10 text-center font-bold">Add New Course</h1>
      <form className="flex flex-col gap-2 items-center">
        <label className="p-2">
          Course Name:
          <input type="text" onChange={props.courseNameHandler} />
        </label>
        <label>
          Video Link:
          <input type="text" onChange={props.videoLinkHandler} />
        </label>
        <label>
          Teacher:
          <input type="text" onChange={props.teacherNameHandler}/>
        </label>
        <button type="submit" onClick={props.onSubmitHandler} className="btn">
          Add Course
        </button>
      </form>
    </>
  );
}

export default CourseForm;
