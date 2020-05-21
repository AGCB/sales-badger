import React from 'react';
import './mission.css';

function createInitialMissionState() {
  let mission = {
    "headerBold": "Our Culture",
    "headerBody": "At SalesBadger, we encourage everyone to grow and innovate, while having fun in the process.",
    "bodyUrl":"https://i.pinimg.com/favicons/7ab6efac2e7dabed1d02add43b9959881962387caaa51edaaa77beba.ico?6ae77ccf2b116cd9151061a74856008f",
    "bodyHeading":"Building For the Future",
    "bodyText":"We always challenge the status quo and work hard innovating on a product that not only works, but changes the game for our users",
    "bodyHeadingTwo":"Promoting Trust and Transparency",
    "bodyTextTwo":"We remain completely open, honest, and transparent with everyone. This has allowed us to build strong relationships with each other",
    "bodyHeadingThree":"Acheiving our very best",
    "bodyTextThree":"We believe the success of the company lies within our employees and we constantly challenge each other to learn and level up",
    "footerText": "If you are excited by our vision of the future, and want to solve meaningful problems, talk to us!",
    "footerButtonText": "Join the Team",
  }
  return mission;
}

function Mission() {
  const [ mission, setMission ] = React.useState(createInitialMissionState())

  return (
    <div className="mission">
      <div className="mission-header">
        <span>{mission.headerBold}</span>
      </div>
      <div className="mission-body">
        <span>{mission.headerBody}</span>
        <div className="mission-statements">
          <div className="mission-statement-one">
            <img
              className="mission-image"
              alt=""
              src={mission.bodyUrl} />
            <span className="mission-body-heading">{mission.bodyHeading}</span>
            <span className="body-text">{mission.bodyText}</span>

          </div>
          <div className="mission-statement-two">
            <img
              className="mission-image"
              alt=""
              src={mission.bodyUrl} />
            <span className="mission-body-heading">{mission.bodyHeadingTwo}</span>
            <span className="body-text">{mission.bodyTextTwo}</span>
          </div>
          <div className="mission-statement-three">
            <img
              className="mission-image"
              alt=""
              src={mission.bodyUrl} />
            <span className="mission-body-heading">{mission.bodyHeadingThree}</span>
            <span className="mission-body-text">{mission.bodyTextThree}</span>
          </div>
        </div>

      </div>
      <div className="mission-footer">
        <span className="mission-footer-text">{mission.footerText}</span>
        <button>{mission.footerButtonText}</button>
      </div>
    </div>
  )
}

export default Mission;
