import fake1 from "../../assets/people/fake1.jpeg"
import fake2 from "../../assets/people/fake2.jpeg"
import fake3 from "../../assets/people/fake3.jpeg"
import ReviewCard from "../UI/ReviewCard";

function Reviews() {
  return (
    <>
      <h2 className="text-5xl p-10 text-center font-bold">Reviews</h2>
      <div className="flex flex-col justify-center gap-10 p-10 pt-2 carousel rounded-box sm:flex-row">
        <div className="carousel-item">
          <ReviewCard
            name="John Doe"
            review="I couldn't have asked for a better mentor! The personalized guidance and support I received have significantly boosted my confidence and skills. The sessions were engaging and tailored to my needs. Highly recommend to anyone seeking quality mentorship."
            img={fake1}
          />
        </div>
        <div className="carousel-item">
          <ReviewCard
            name="Johnny James"
            review="An outstanding platform for anyone looking to advance their career. My mentor was incredibly knowledgeable and provided valuable insights that I wouldn't have found elsewhere. The flexible scheduling made it easy to fit into my busy routine. Worth every penny!"
            img={fake2}
          />
        </div>
        <div className="carousel-item">
          <ReviewCard
            name="Jack Jackson"
            review="This mentoring site has been a game-changer for me. The expertise and real-world advice I received have helped me navigate complex challenges in my field. The mentors are not only experienced but also genuinely invested in your success. A fantastic resource for professional growth."
            img={fake3}
          />
        </div>
      </div>
    </>
  );
}

export default Reviews;
