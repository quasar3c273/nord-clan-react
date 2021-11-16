import React from "react";
import { infoAboutUsers } from "../types";

type popupListTypes = {
    isActive: boolean;
    setDisplay: (e: boolean) => void;
    filteredUsers: infoAboutUsers[];
    isMulti: boolean;
    onToggle: (id: "closeAll" | number) => void;
    handleClick: (id: number) => void;
}

const PopupList = ({
    isActive,
    setDisplay,
    filteredUsers,
    isMulti,
    onToggle,
    handleClick
}: popupListTypes) => {
    return (
        <ul
            key="list-popup"
            className={`${isActive ? "display-none " : ""}users__list`}
            onClick={setDisplay.bind(null, true)}
        >
            {filteredUsers.length > 0 ? (
                filteredUsers.map((user: any) => (
                    <li
                        key={`${user.userId}qwerty`}
                        onClick={
                            isMulti
                                ? onToggle.bind(null, user.userId)
                                : handleClick.bind(null, user.userId)
                        }
                        className={`${
                            user.checked ? "checked-user " : ""
                        }users__list__item`}
                    >
                        <span key={user.userName} className="test123">
                            {user.userName}
                        </span>
                        {isMulti && (
                            <input
                                key={`${user.userId}qwertyqweq`}
                                className="qwerty12"
                                type="checkbox"
                                checked={user.checked}
                                readOnly
                            />
                        )}
                    </li>
                ))
            ) : (
                <span className="test123">Ничего не найдено</span>
            )}
        </ul>
    );
};

export default PopupList;
