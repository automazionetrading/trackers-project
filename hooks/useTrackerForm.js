import { useContext } from 'react';
import { TrackerContext } from '../contexts/trackersContext';


const useTrackerForm = () => {
  // Salvo il context
  const [state, setState] = useContext(TrackerContext);


  // funzione per aggiungere il tracker
  const addTracker = receivedTracker => {
    const newTracker = {
      name: receivedTracker.name,
      description: receivedTracker.description,
      iterations: receivedTracker.iterations,
      timeframe: receivedTracker.timeframe
    };
    // Aggiungo il tracker alla lista dei tracker
    setState({ count: state.trackers.lenght, trackers: [newTracker, ...state.trackers] });
    // return {
    //   trackers: state.trackers,
    //   count: state.count,
    // };
  };

  //funzione per togliere un tracker
  const removeTracker = index => {
    const newTrackers = state.trackers.filter((tracker, name) => name !== name);
    setState({ count: state.trackers.lenght, trackers: newTrackers });
  }


  return {
    trackers: state.trackers,
    count: state.count,
    addTracker,
    removeTracker
  };
}
export default useTrackerForm;