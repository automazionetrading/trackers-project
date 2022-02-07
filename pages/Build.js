import { useState, useContext } from 'react';
import TrackerFeed from '../components/Tracker';
import BuildContext from '../lib/buildcontext';


/**
 * {
  trackers: [{
    name: 'Drink Water ',
    description: 'Track how much water you drink for 2 weeks',
    iterations: '15',
    timeframe: 'Bi-Weekly'
  }, {
    name: 'Exercise',
    description: 'Track how many days yoy exercise',
    iterations: '18',
    timeframe: 'monthly'
  }, {
    name: 'Gratitude',
    description: 'I want to thank everyone who helped me in my journey',
    iterations: '200',
    timeframe: 'Yearlly'
  }, {
    name: 'Meditation',
    description: 'I want to meditate for 2 weeks',
    iterations: '10',
    timeframe: 'Weekly'
  }]
}
 * 
 */

export default function Build() {
  const trackerData = useContext(BuildContext);

  return (
    <main>
      <h3>BUILD PAGE</h3>
      <TrackerFeed trackersList={trackerData} />
      <NewTracker />
    </main>
  );
}


function NewTracker() {
  const state = useState(false);
  return (
    <div className="tracker">
      <OnNewTracker />
    </div>


  )
}

const OnNewTracker = () => {
  const OnAddTracker = () => {
    console.log('TRIGGERED tracker');
    trackerData.append({
      name: 'ADDED TRACKER',
      description: 'ADDED DESCRIPTION',
      iterations: '25',
      timeframe: 'Bi-Weekly'
    })
  }

  return (
    <div className="tracker-card">
      <h3>Add New Tracker</h3>
      <form onSubmit={OnAddTracker()}>
        <label>Name</label>
        <input id="name" name="name" type="text" />
        <label>Description</label>
        <input id="description" name="description" type="text" />
        <label>Iterations</label>
        <input id="iteration" name="iterations" type="number" />
        <label>Timeframe</label>
        <input id="timeframe" name="timeframe" type="text" />
        <button className="btn">Submit</button>
      </form>
    </div>
  )
}
