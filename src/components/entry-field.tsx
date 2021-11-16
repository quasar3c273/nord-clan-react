import React, { useState } from "react";
import PopupList from "./popup-list";
import CheckedList from "./checked-list";
import SelectField from "./select-field";
import { infoAboutUsers } from "../types";

type typesPropsList = {
    userInfo: infoAboutUsers[];
    onToggle: (id: number | "closeAll") => void;
    handleClick: (id: number) => void;
    isMulti: boolean;
}

const EntryField = ({ userInfo, onToggle, isMulti = false, handleClick } : typesPropsList) => {
    const [isActive, setIsActive] = useState(false);
    const [filter, setFilter] = React.useState("");

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setFilter(event.target.value);
    };

    const handleToggle = () => {
        setIsActive(!isActive);
    };

    const setDisplay = (display: boolean) => {
        setIsActive(display);
    };

    const filteredUsers =
        filter === ""
            ? userInfo
            : userInfo.filter((user) =>
                  user.userName.toLowerCase().includes(filter.toLowerCase())
              );

    return (
        <>
            <div className="users">
                <div className="input-wrapper">
                    <CheckedList
                        onToggle={onToggle}
                        userInfo={userInfo}
                        isMulti={isMulti}
                    />
                    <SelectField
                        handleChange={handleChange}
                        setDisplay={setDisplay}
                        onToggle={onToggle}
                        handleToggle={handleToggle}
                    />
                </div>
                <PopupList
                    isActive={isActive}
                    setDisplay={setDisplay}
                    filteredUsers={filteredUsers}
                    isMulti={isMulti}
                    onToggle={onToggle}
                    handleClick={handleClick}
                />
            </div>
        </>
    );
};

export default EntryField;
