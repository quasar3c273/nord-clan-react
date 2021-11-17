import React from "react";
import { infoAboutUsers, allClasses } from "../types";

type popupListTypes = {
    isActive: boolean;
    setDisplay: (e: boolean) => void;
    filteredUsers: infoAboutUsers[];
    isMulti: boolean;
    onToggle: (id: "closeAll" | number) => void;
    handleClick: (id: number) => void;
    classesSelectComponent: allClasses;
}

const PopupList = ({
    isActive,
    setDisplay,
    filteredUsers,
    isMulti,
    onToggle,
    handleClick,
    classesSelectComponent
}: popupListTypes) => {
    return (
        <ul
            key="list-popup"
            className={`${isActive ? classesSelectComponent.popupListAllNonDisplay : ""}${classesSelectComponent.popupListAll}`}
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
                            user.checked ? classesSelectComponent.checkedInPopupList : ""
                        }${classesSelectComponent.usersPopupListItems}`}
                    >
                        <span key={user.userName} className={classesSelectComponent.userClassName}>
                            {user.userName}
                        </span>
                        {isMulti && (
                            <input
                                key={`${user.userId}qwertyqweq`}
                                className={classesSelectComponent.checkboxUserClassName}
                                type="checkbox"
                                checked={user.checked}
                                readOnly
                            />
                        )}
                    </li>
                ))
            ) : (
                <span className={classesSelectComponent.notSearchOnList}>Ничего не найдено</span>
            )}
        </ul>
    );
};

export default PopupList;
