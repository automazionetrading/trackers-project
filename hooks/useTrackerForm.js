import { useContext } from 'react';
import { TrackerContext } from '../contexts/trackersContext';


const useTrackerForm = () => {
  // Salvo il contesto. 
  const [state, setState] = useContext(TrackerContext);
  
  console.log("Sono nel useTrackerForm");

  function addTracker() {

    const newTracker = {
      name: "name",
      description: " description",
      iterations: 42,
      timeframe: "timeframe"
    }
    console.log("MEW TRACKER:");
    console.log(newTracker);

    // Aggiungo il tracker alla lista dei tracker
    state.trackers.push(newTracker);

    // Aggiorno il contenuto del context
    setState({ trackers: state.trackers });
    setState({ count: state.count + 1 });
    console.log(state.TrackerContext);
  };

  return {
    trackers: state.trackers,
    count: state.dataStore,
    addTracker,
  }
};

export default useTrackerForm;