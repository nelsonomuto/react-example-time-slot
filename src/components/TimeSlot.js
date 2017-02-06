import React, {Component, PropTypes} from 'react'

class TimeSlot extends Component {
    static propTypes = {
        occupiedCls: PropTypes.string,
        slotNumber: PropTypes.number.isRequired,
        onSlotClick: PropTypes.func.isRequired
    }
    onClickHandler = (slotNumber) => {
        this.props.onSlotClick(slotNumber);
    }
    render() {
        const {occupiedCls, slotNumber} = this.props;
        return (
            <li className={"timeSlot " + (occupiedCls || "")} onClick={ this.onClickHandler.bind(this, slotNumber) }>
                { getTime() }</li>
        )
    }
}
let slotIndex = 0;
function getTime() {
    let hour = slotIndex + 9;
    slotIndex++;
    if (hour < 12) return hour + 'am';
    if (hour === 12) return hour + 'pm';
    if(hour === 16) slotIndex = 0;
    return (hour - 12) + 'pm';
}

export default TimeSlot
