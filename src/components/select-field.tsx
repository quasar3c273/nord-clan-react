import React from "react";
import useDebounce from "../hooks/useDebounce";
import { allClasses } from "../types";

type typesPropsList = {
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    setDisplay: (e: boolean) => void;
    onToggle: (id: "closeAll" | number) => void;
    handleToggle: () => void;
    arrowStatus: boolean;
    classesSelectComponent: allClasses;
}

const SelectField = ({ handleChange, setDisplay, onToggle, handleToggle, arrowStatus, classesSelectComponent }: typesPropsList) => {
    return (
        <div className={classesSelectComponent.selectFieldWrapper}>
            <input
                type="text"
                id="entry-field"
                onChange={useDebounce(handleChange, 500)}
                onFocus={setDisplay.bind(null, false)}
            />
            <button
                className={classesSelectComponent.classDelete}
                onClick={onToggle.bind(null, "closeAll")}
            />
            <button
                className={arrowStatus ? classesSelectComponent.chevronDown : classesSelectComponent.chevronUp}
                onClick={handleToggle}
            />
        </div>
    );
};

export default SelectField;
