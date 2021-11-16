import React, { useState, useEffect } from "react";
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

    function toggleEnterEsc(event: KeyboardEvent) {
        if (event.key === "Enter") {
            console.log(event.key);
            setIsActive(false);
        } else if (event.key === "Escape") {
            setIsActive(true);
        }
    };

    useEffect(() => {
        window.document.body.addEventListener("keydown", toggleEnterEsc);
    }, []);

    const filteredUsers =
        filter === ""
            ? userInfo
            : userInfo.filter((user) =>
                  user.userName.toLowerCase().includes(filter.toLowerCase())
              );

    return (
        <>
            <div
                className="users">
                <div className="input-wrapper">
                    <CheckedList
                        onToggle={onToggle}
                        userInfo={userInfo}
                        isMulti={isMulti}
                    />
                    <SelectField
                        arrowStatus={isActive}
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
