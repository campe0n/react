import "../index.css";

export default function Resume() {
  return (
    <div class="deck">
      <h2>Resume</h2>
      <div className="handles">
        <h3>Full Stack Developer</h3>
        <div className="contactinfo">
          <div className="infoDiv">
            <p className="bold">Phone</p>
            <p>913-954-1199</p>
          </div>
          <div className="infoDiv">
            <p className="bold">Email</p>
            <p>melvinrf@Outlook.com</p>
          </div>
        </div>
      </div>
      <p>
        Full Stack developer with experience in Tailwind CSS. My greatest
        strengths are working alone and being resourceful. These strengths are
        helpful when it comes to writing and debugging code.
      </p>
      <h3>Experience</h3>
      <div className="xpRow">
        <div className="left">
          <p>2020-11 to Present</p>
        </div>
        <div className="right">
          <p className="bold">Domino's</p>
          <p>Delivery Expert</p>
          <ul>
            <li className="xpItem">Manage deliveries</li>
            <li className="xpItem">
              Maintain a healthy and inviting store state
            </li>
            <li className="xpItem">
              Help with other tasks such as cut line, boxes and stocking store
              items
            </li>
          </ul>
        </div>
      </div>
      <div className="xpRow">
        <div className="left">
          <p>2018-6 to 2020-6</p>
        </div>
        <div className="right">
          <p className="bold">You're The Boss</p>
          <p>Mover</p>
          <ul>
            <li className="xpItem">
              Move furniture quickly and without damage
            </li>
            <li className="xpItem">
              Drive moving vehicles from location to location
            </li>
            <li className="xpItem">
              Help with other tasks such as cut line, folding and stocking boxes
              and stocking storeitems
            </li>
          </ul>
        </div>
      </div>
      <h3>Education</h3>
      <div className="xpRow">
        <div className="left">
          <p>2018-2020</p>
        </div>
        <div className="right">
          <p className="bold">Kansas City Christian School</p>
          <ul>
            <li className="xpItem">High School Diploma, Prairie Village, KS</li>
          </ul>
        </div>
      </div>
      {/* <iframe
        title="Resume"
        src="../images/Resume V2.docx.pdf"
        height="1000"
        width="700"
      ></iframe> */}
    </div>
  );
}
