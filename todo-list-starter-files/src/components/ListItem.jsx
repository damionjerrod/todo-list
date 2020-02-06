import React from "react";

const ListItem = props => {
    return (
        <li>
            <button className="remove-btn" onClick={
                () => {props.handleRemove(props.itemIndex)}
            }>
                x
            </button>
            <div className="todo-item">
            {props.item} - {props.itemDate}
            </div>
        </li>
    );
};

export default ListItem;