import { useState, useContext, useEffect } from 'react';
import TrackerFeed from '../components/Tracker';
import { TrackerContextProvider } from '../contexts/trackersContext';



export default function Build() {

  return (
    <main className="tracker-page">
      <TrackerContextProvider>
        <TrackerFeed />
      </TrackerContextProvider>
    </main >
  );
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