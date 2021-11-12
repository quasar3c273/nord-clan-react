import React from "react";

const PopupList = ({
    isActive,
    setDisplay,
    filteredUsers,
    isMulti,
    onToggle,
    handleClick
}) => {
    return (
        <ul
            key="list-popup"
            className={`${isActive ? "display-none " : ""}users__list`}
            onClick={setDisplay.bind(null, true)}
        >
            {filteredUsers.map((user) => (
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
            ))}
        </ul>
    );
};

export default PopupList;
