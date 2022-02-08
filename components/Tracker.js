import * as Icon from 'react-feather';
import useTrackerForm from '../hooks/useTrackerForm';




// Il componente prende solo un argomento, Questo argomento viene derivato dal context 
export default function TrackerFeed() {

  const { trackers, count, addTracker } = useTrackerForm();
  console.log("Sono nel TrackerFeed");
  console.log(trackers);
  const NewTracker = () => {

    return (
      <div className="tracker-card">
        <h3>Add New Tracker</h3>
        <form>
          <label>Name</label>
          <input id="name" name="name" type="text" />
          <label>Description</label>
          <input id="description" name="description" type="text" />
          <label>Iterations</label>
          <input id="iteration" name="iterations" type="number" />
          <label>Timeframe</label>
          <input id="timeframe" name="timeframe" type="text" />
          <button className="btn" onClick={addTracker}>Submit</button>
        </form>
      </div>
    )

  }
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
            {[...Array(iterations)].map((_, i) => <span className="item"><Icon.Circle key={name + i} /></span>)}
          </div>
          <p>{timeframe}</p>
        </div>
      </main>
    );

  }

  if (!trackers) {
    return (
      <div className="tracker-card">
        <h3>No trackers</h3>
        <p>You don't have any trackers yet. Add one by clicking the button below.</p>
        <NewTracker />
      </div>
    )
  } else {
    return (
      <>
        {trackers.map((tracker, i) => <Tracker trackerData={tracker} key={i} />)}
        <NewTracker />
      </>
    );
  }
}
