import React, {Component, PropTypes} from 'react'
import TimeSlot from './TimeSlot'

class TimeSlotList extends Component {
    static propTypes = {
        slots: PropTypes.number.isRequired,
        onSlotClick: PropTypes.func.isRequired,
        occupiedSlotNumbers: PropTypes.object.isRequired
    }

    render() {
        let {slots, onSlotClick, occupiedSlotNumbers} = this.props;
        let timeSlots = [];
        while(slots > 0) {
            let slotNumber = slots--;
            let cls = occupiedSlotNumbers[slotNumber] ? 'occupied' : '';
            timeSlots.push((<TimeSlot occupiedCls={cls} slotNumber={slotNumber} key={slotNumber} onSlotClick={onSlotClick}/>))
        }
        return (
            <ul className="timeSlotList">
                { timeSlots }
            </ul>
        )
    }
}

export default TimeSlotList
