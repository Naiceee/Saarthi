import Card from "../UI/Card";
import course1 from "../../assets/img/course1.jpg";
import course2 from "../../assets/img/course2.jpg";
import course3 from "../../assets/img/course3.jpg";

function Cards() {

    return (
      <>
        <h2 className="text-5xl p-10 text-center font-bold">OUR COURSES</h2>
        <div className="flex flex-col justify-center gap-10 p-10 pt-2 sm:flex-row">
          <Card img={course1} title={"Grade 11/12/Dropper"} />
          <Card img={course2} title={"Grade 11/12/Dropper"} />
          <Card img={course3} title={"FOUNDATION/INTERMEDIATE"} />
        </div>
      </>
    );
}

export default Cards;
