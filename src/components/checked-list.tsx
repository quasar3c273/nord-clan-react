import React from "react";
import { infoAboutUsers, allClasses } from "../types";

type typesPropsList = {
    userInfo: infoAboutUsers[];
    onToggle: (id: number) => void;
    isMulti: boolean;
    classesSelectComponent: allClasses;
}

/**
 * Компонент для отображения списка выбранных пользователей
 * @param userInfo - массив объектов пользователей
 * @param onToggle - функция для обработки изменения состояния выбора пользователя
 * @param isMulti - статус множественного выбора списка
 * @param classesSelectComponent - объект с классами для компонента
 * @type typesPropsList - тип пропсов компонента
 */

const CheckedList = ({ userInfo, onToggle, isMulti, classesSelectComponent } : typesPropsList) => {
    return (
        <div className={classesSelectComponent.classCheckListWpapper}>
            {userInfo.map((user, index) => {
                return (
                    user.checked === true && (
                        <div className={classesSelectComponent.inputWrapperItem} key={index}>
                            {user.userName}
                            <button
                                className={classesSelectComponent.classDelete}
                                onClick={onToggle.bind(null, user.userId)}
                            />
                            {isMulti ? "," : ""}
                        </div>
                    )
                );
            })}
        </div>
    );
};

export default CheckedList;
