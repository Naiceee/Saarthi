import InfoCard from "../UI/InfoCard";

function Results() {
    return (
      <>
        <h2 className="text-5xl p-10 text-center font-bold">Results</h2>
        <div className="flex flex-col overflow-hidden justify-center gap-10 p-10 pt-2 sm:flex-row">
          <InfoCard title="Banner" />
          <InfoCard title="Banner" />
          <InfoCard title="Banner" />
          <InfoCard title="Banner" />
          <InfoCard title="Banner" />
        </div>
      </>
    );
}

export default Results;