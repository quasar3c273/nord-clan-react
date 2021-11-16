import React from "react";
import useDebounce from "../hooks/useDebounce";

type typesPropsList = {
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    setDisplay: (e: boolean) => void;
    onToggle: (id: "closeAll" | number) => void;
    handleToggle: () => void;
    arrowStatus: boolean;
}

const SelectField = ({ handleChange, setDisplay, onToggle, handleToggle, arrowStatus }: typesPropsList) => {
    return (
        <div className="wrapper">
            <input
                type="text"
                id="entry-field"
                onChange={useDebounce(handleChange, 500)}
                onFocus={setDisplay.bind(null, false)}
            />
            <button
                className="input-wrapper__item-close"
                onClick={onToggle.bind(null, "closeAll")}
            />
            <button
                className={`input-wrapper__chevron-${arrowStatus ? "down" : "up"}`}
                onClick={handleToggle}
            />
        </div>
    );
};

export default SelectField;
