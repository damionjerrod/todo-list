import React from "react";

const InputForm = props => {
    return (
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
        </form>
    );
};

export default InputForm;