export const CSHeader = ({ h1, date, img }) => {
  return (
    <header className="case_study_header fixed-narrow-grid" style={{ overflow: "hidden", height: "600px", borderRadius: "6px"}}>
      <div className="case_study_title inner-10-grid">
        <h1 className="ft-title-dt">{h1}</h1>
        <h5 className="ft-bodybd-dt">{date}</h5>
      </div>
      <img src={img} alt="" className="grid-full"/>
    </header>
  );
}





