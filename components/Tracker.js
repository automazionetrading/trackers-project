import * as Icon from 'react-feather';


export default function TrackerFeed({ trackersList }) {
  return trackersList ?
    trackersList.map((tracker) => <Tracker trackerData={tracker} key={tracker.name} />)
    : null;
}

/**
 * 
 * @param {trackerdata} json with name, description, iterations and timeframe
 * @returns 
 */

function Tracker({ trackerData }) {
  const name = trackerData.name;
  const description = trackerData.description;
  const iterations = parseInt(trackerData.iterations);
  const timeframe = trackerData.timeframe;

  return (
    <main className="tracker">
      <h3>{name}</h3>
      <div className="tracker-card">
        <div className="description">{description}</div>
        <div className="item-container">
          {[...Array(iterations)].map((_, i) => <span className="item"><Icon.Square key={i} /></span>)}
        </div>
        <p>{timeframe}</p>
      </div>
    </main>
  );


}