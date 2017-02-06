import React, {Component, PropTypes} from 'react'

class Modal extends Component {
    static propTypes = {
        modalActive: PropTypes.bool,
        onSubmitClick: PropTypes.func.isRequired
    }
    render() {
        const {onSubmitClick, modalActive} = this.props;
        const toggle = modalActive ? {display: 'block'} : {display: 'none'};
        return (
            <div>
                <div className="modal" style={toggle}>
                    <label htmlFor="name">Name:</label>
                    <input id="name" type="text" title="Name"/>
                    <label htmlFor="phone">Phone:</label>
                    <input id="phone" type="tel" maxLength="10" title="Phone Number" />
                    <button className="modalSubmit" onClick={()=> {
                        if(!document.querySelector('#name').value || !document.querySelector('#phone').value) return;
                        onSubmitClick();
                        document.querySelector('#name').value = document.querySelector('#phone').value = '';
                    }}>Submit</button>
                </div>
                <div className="overlay active" style={toggle}></div>
            </div>
        )
    }
}

export default Modal
