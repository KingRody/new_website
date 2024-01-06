const { default: ReactFullpage } = require("@fullpage/react-fullpage");

const Fullpage = () => (
  <ReactFullpage
    licenseKey="315633C4-FDAB4EFA-BBBFAFC7-CB4E9D7D"
    scrollingSpeed={1000}
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section">
            <p>Section 1 (welcome to fullpage.js)</p>
            <button onClick={() => fullpageApi.moveSectionDown()}>
              Click me to move down
            </button>
          </div>
          <div className="section">
            <p>Section 2</p>
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default Fullpage;
