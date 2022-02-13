import { useContext } from 'react';
import { TrackerContext } from '../contexts/trackersContext';


const useTrackerForm = () => {
  // Salvo il context
  const [state, setState] = useContext(TrackerContext);


  // funzione per aggiungere il tracker
  const addTracker = receivedTracker => {

    const newTracker = {
      id: receivedTracker.id,
      name: receivedTracker.name,
      description: receivedTracker.description,
      iterations: receivedTracker.iterations,
      timeframe: receivedTracker.timeframe,
    };

    // console.log(receivedTracker);
    // Aggiungo il tracker alla lista dei tracker
    setState({ trackers: [newTracker, ...state.trackers], count: state.trackers.length });


  };

  //funzione per togliere un tracker
  function removeTracker(trackerToRemove) {
    const newTrackers = state.trackers.filter((tracker) => tracker.id !== trackerToRemove.id);
    console.log('Poppo il tracker numero: ', trackerToRemove.id, "  dalla lista : ", state.trackers);
    setState({ count: newTrackers.lenght, trackers: newTrackers });
  }


  return {
    trackers: state.trackers,
    count: state.count,
    addTracker,
    removeTracker
  };
}
export default useTrackerForm;