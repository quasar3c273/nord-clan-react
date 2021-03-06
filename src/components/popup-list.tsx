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
};

/**
 * Компонент выпадающего списка
 * @param isActive - отображается ли компонент
 * @param setDisplay - функция для изменения отображения компонента
 * @param filteredUsers - отфильтрованные пользователи
 * @param isMulti - статус множественного выбора списка
 * @param onToggle - функция для изменения статуса множественного выбора
 * @param handleClick - функция для изменения статуса "cheked"
 * @param classesSelectComponent - классы компонента
 * @type popupListTypes - тип пропсов компонента
 */

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
            className={`${
                isActive ? classesSelectComponent.popupListAllNonDisplay : ""
            }${classesSelectComponent.popupListAll}`}
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
                            user.checked
                                ? classesSelectComponent.checkedInPopupList
                                : ""
                        }${classesSelectComponent.usersPopupListItems}`}
                    >
                        <span key={user.userName}>{user.userName}</span>
                        {isMulti && (
                            <input
                                key={`${user.userId}qwertyqweq`}
                                type="checkbox"
                                checked={user.checked}
                                readOnly
                            />
                        )}
                    </li>
                ))
            ) : (
                <div className={classesSelectComponent.notSearchOnList}>
                    Ничего не найдено
                </div>
            )}
        </ul>
    );
};

export default PopupList;
