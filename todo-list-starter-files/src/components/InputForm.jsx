import React from "react";
import "../styles/Modal.css";

const InputForm = props => {
    // const showHide = props.show ? "modal display-block" : "modal display-none";    
    if(!props.show) {
        return null;
    }
    return (
        <div className="modal-content">
            <form 
                onSubmit={props.newItemSubmitHandler}
                className="todoInput">
                <input
                    className="input"
                    type="text"
                    onChange={props.handleItemInput}
                    value={props.pendingItem}
                    placeholder="Add an item"
                    />
                <button type="submit" name="submit" value="submit">
                    add
                </button>
                <button type="button" onClick={props.handleClose}>Close</button>
            </form>
        </div>
    );
};

export default InputForm;