import { useState, useContext, useEffect } from 'react';
import TrackerFeed from '../components/Tracker';
import { TrackerContext } from '../contexts/trackersContext';



export default function Build() {

  const { trackers, count } = useContext(TrackerContext);
  trackers.push({
    name: 'Drink Water ',
    description: 'Track how much water you drink for 2 weeks',
    iterations: '15',
    timeframe: 'Bi-Weekly'
  });

  return (
    <main>
      <TrackerContext.Provider>
        <h3>BUILD PAGE</h3>
        <TrackerFeed trackersList={trackers} />
        <NewTracker target={trackers} />
      </TrackerContext.Provider>
    </main>
  );
}


function NewTracker({ target }) {
  return (
    <div className="tracker">
      <AddNewTracker trackArray={target} />
    </div>
  )
}

const AddNewTracker = ({ trackArray }) => {

  const OnAddTracker = () => {
    console.log('TRIGGERED tracker');
    trackArray.push({
      name: 'ADDED TRACKER',
      description: 'ADDED DESCRIPTION',
      iterations: '25',
      timeframe: 'Bi-Weekly'
    })
    console.log(trackArray);
  }

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
        <button className="btn" onClick={OnAddTracker}>Submit</button>
      </form>
    </div>
  )
}



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