let occupiedSlotNumbers = {};
let currentSlot = -1;
export default (state = {occupiedSlotNumbers}, action) => {
    switch (action.type) {
        case 'OPEN_MODAL':
            currentSlot = action.slotNumber;
            return {modalActive: true, occupiedSlotNumbers};
        case 'RESERVE_SLOT':
            occupiedSlotNumbers[currentSlot] = true;
            return {modalActive: false, occupiedSlotNumbers};
        default:
            return {modalActive: false, occupiedSlotNumbers};
    }
}