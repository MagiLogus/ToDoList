import React from "react";
import './taskcard.css'

const TaskCard = ({ id, name, completed, onClick, onChange, checked }) => {

    return (
        <React.Fragment>
            <div key={id} className={`task ${completed ? 'completed' : ''}`}>
                <input
                    type="checkbox"
                    checked={completed}
                    onChange={onChange}
                />
                <span>{name}</span>
                <button className="edit-btn">✏️</button>
                <button className="delete-btn" onClick={onClick}>❌</button>
            </div>
        </React.Fragment>
    );
};

export default TaskCard;