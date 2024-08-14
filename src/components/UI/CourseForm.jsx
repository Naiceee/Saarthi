function CourseForm() {
  return (
    <>
      <h1>Add New Course</h1>
      <form className="flex flex-col gap-2 items-center">
        <label className="p-2">
            Course Name:   
            <input  type="text" />
        </label>
        <label>
            Video Link: 
            <input type="text" />
        </label>
        <label>
            Teacher: 
            <input type="text" />
        </label>
        <button type="submit" className="btn">Add Course</button>
      </form>
    </>
  );
}

export default CourseForm;
