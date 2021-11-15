import React from "react";

type typesPropsList = {
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    setDisplay: (e: boolean) => void;
    onToggle: (id: string | number) => void;
    handleToggle: (params?: any) => any
}

const SelectField = ({ handleChange, setDisplay, onToggle, handleToggle }: typesPropsList) => {
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
