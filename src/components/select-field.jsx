import React from "react";

const SelectField = ({ handleChange, setDisplay, onToggle, handleToggle }) => {
    return (
        <div className="wrapper">
            <input
                type="text"
                id="entry-field"
                onChange={handleChange}
                onFocus={setDisplay.bind(null, false)}
            />
            <button
                className="input-wrapper__item-close"
                onClick={onToggle.bind(null, "closeAll")}
            />
            <button
                className="input-wrapper__chevron-down"
                onClick={handleToggle}
            />
        </div>
    );
};

export default SelectField;
