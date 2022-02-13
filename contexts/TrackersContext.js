import { createContext, useState } from 'react';

// Dichiaro il context 
const TrackerContext = createContext([{}, () => { }]);

// creo un wrapper specifico per il context in modo che possa condividere lo stesso
// con i componenti figli. Quindi può prendere i dati dal form e aggiungerli al context 
// e poi aggiornare il context con la funzione dispatch
//. 

const TrackerContextProvider = (props) => {

  const [state, setState] = useState({
    // trackers: [{
    //   id: 1,
    //   name: 'Drink Water ',
    //   description: 'Track how much water you drink for 2 weeks',
    //   iterations: '15',
    //   timeframe: 'Bi-Weekly'
    // }],
    trackers: [],
    count: 0
  });

  return (
    <TrackerContext.Provider value={[state, setState]}>
      {props.children}
    </TrackerContext.Provider>
  );
}

export { TrackerContext, TrackerContextProvider };