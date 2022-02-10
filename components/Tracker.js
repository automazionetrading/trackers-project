import * as Icon from 'react-feather';
import useTrackerForm from '../hooks/useTrackerForm';
import toast from 'react-hot-toast';

// Il componente prende solo un argomento, Questo argomento viene derivato dal context 
export default function TrackerFeed() {

  const { trackers, count, removeTracker, addTracker } = useTrackerForm();

  //console.log(trackers);
  const submitTracker = e => {
    e.preventDefault();
    addTracker()
  }

  let emptyTracker = {
    name: "",
    description: "",
    iterations: "",
    timeframe: ""
  }


  const NewTracker = () => {

    function handleChange(e) {
      const val = e.target.value.toLowerCase();
      const { name, value } = e.target;
      if (e.target.name !== "iterations") {
        if (!val || val.length < 3) {
          return;
        } else {
          const { name, value } = e.target;
          emptyTracker[name] = value;
        }
      } else {
        emptyTracker[name] = value;
      }
    }

    function submitTracker(e) {
      if (emptyTracker.name.length < 3 ||
        emptyTracker.description.length < 3 ||
        parseInt(emptyTracker.iterations) < 1) {
        toast.error("Please check your entries");
        return;
      }
      e.preventDefault();
      addTracker(emptyTracker);
      toast.success("Tracker added");

    }

    return (
      <div className="tracker-form">
        <h3>Add New Tracker</h3>
        <form>
          <label>Name</label>
          <input id="name" name="name" type="text" onChange={handleChange} />
          <label>Description</label>
          <input id="description" name="description" type="text" onChange={handleChange} />
          <label>Iterations</label>
          <input id="iteration" name="iterations" type="number" onChange={handleChange} />
          <label>Timeframe</label>
          <input id="timeframe" name="timeframe" type="text" onChange={handleChange} />
          <button className="btn" onClick={submitTracker}>Submit</button>
        </form>
      </div>
    )
  }

  function Tracker({ trackerData }) {

    return (
      <main className="tracker">
        <h3>{trackerData.name}</h3>
        <div className="tracker-card">
          <div className="tracker-card-icons">
            <Icon.Edit size={20} />
            <Icon.MinusCircle size={20} onClick={removeTracker} />
          </div>
          <div className="description">{trackerData.description} </div>
          <div className="item-container">
            {[...Array(parseInt(trackerData.iterations))].map((_, i) => <span className="item" ><Icon.Circle /></span>)}
          </div>
          <p>{trackerData.timeframe}</p>
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
        <NewTracker />
        {trackers.map((tracker, i) => <Tracker trackerData={tracker} key={tracker + i} />)}
      </>
    );
  }
}
