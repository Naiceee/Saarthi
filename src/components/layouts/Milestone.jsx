import InfoCard from "../UI/InfoCard";

function Milestone() {
    return (
      <>
        <h2 className="text-5xl p-10 text-center font-bold">MileStone</h2>
        <div className="flex justify-center gap-10 p-10 pt-2">
          <InfoCard title="1000+" subtext="Video Lectures" />
          <InfoCard title="8000+" subtext="Practice Papers" />
          <InfoCard title="2000+" subtext="Happy Students" />
        </div>
      </>
    );
}

export default Milestone;