import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import TimeSlotList from './components/TimeSlotList'
import Modal from './components/Modal'
import slot from './reducers'

const store = createStore(slot);
const rootEl = document.getElementById('root');
const render = () => ReactDOM.render(
    <div>
        <TimeSlotList slots={8} occupiedSlotNumbers={store.getState().occupiedSlotNumbers}
                      onSlotClick={(slotNumber)=> store.dispatch({type: 'OPEN_MODAL', slotNumber})}/>
        <Modal modalActive={store.getState().modalActive} onSubmitClick={()=> store.dispatch({type: 'RESERVE_SLOT'})}/>
    </div>
    ,
    rootEl
);
render();
store.subscribe(render);
