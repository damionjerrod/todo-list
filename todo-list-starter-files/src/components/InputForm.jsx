import React from "react";
// import "../styles/Modal.css";

const backdropStyle = {
    position: "fixed",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,0.6)",
    padding: 50
}

const modalStyle = {
    backgroundColor: "#fff",
    borderRadius: 10,
    maxWidth: 600,
    minHeight: 200,
    margin: "0 auto",
    marginTop: 200,
    marginBottom: 50,
    padding: 50,
    position: "relative"
}

const InputForm = props => {
    // const showHide = props.show ? "modal display-block" : "modal display-none";    
    if(!props.show) {
        return null;
    }
    return (
        <div className="modal" style={backdropStyle}>
            <div className="modal-content" style={modalStyle}>
                <form 
                    onSubmit={props.newItemSubmitHandler}
                    >
                    <p className="input-title">Enter To Do Item for Selected Date</p>
                    <input
                        className="input-box"
                        type="text"
                        onChange={props.handleItemInput}
                        value={props.pendingItem}
                        placeholder="Add an item"
                        />
                    <button type="submit" clasName="submit-btn" name="submit" value="submit">
                        add
                    </button>
                    <button type="button" className="close-btn" onClick={props.handleClose}>Close</button>
                </form>
            </div>
        </div>
    );
};

export default InputForm;