import React, { useState, useEffect } from "react";
import PopupList from "./popup-list";
import CheckedList from "./checked-list";
import SelectField from "./select-field";
import { infoAboutUsers, allClasses } from "../types";
import getUsers from "../get-data/getUsers";

type typesPropsList = {
    isMulti: boolean;
    nameOnLocalStorage: string;
    classesSelectComponent: allClasses;
    urlData: string;
}

/**
 * Компонент для выбора пользователей из списка
 * @param urlData - адрес для получения данных
 * @param isMulti - статус множественного выбора списка
 * @param nameOnLocalStorage - имя переменной в localStorage
 * @param classesSelectComponent - классы компонента
 * @type typesPropsList - тип пропсов компонента
 */

const EntryField = ({ urlData, isMulti = false, nameOnLocalStorage, classesSelectComponent } : typesPropsList) => {
    const [isActive, setIsActive] = useState(true);
    const [filter, setFilter] = React.useState("");
    const [userInfo, setUserInfo] = useState<infoAboutUsers[]>([]);
    const [loading, setLoading] = useState(false);

    const handleClick = (id: number) => {
        const newUserInfo: infoAboutUsers[] = userInfo.map((user: infoAboutUsers) => {
            if (user.userId === id) {
                return {
                    ...user,
                    checked: !user.checked
                };
            } else {
                return {
                    ...user,
                    checked: false
                };
            }
        });
        localStorage.setItem(nameOnLocalStorage, JSON.stringify(newUserInfo));
        setUserInfo(newUserInfo);
    };

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

    const toggleHandler = (id: number | "closeAll") => {
        const newUserInfo = userInfo.map((user: infoAboutUsers) => {
            if (user.userId === id) {
                return {
                    ...user,
                    checked: !user.checked
                };
            } else if (id === "closeAll") {
                return {
                    ...user,
                    checked: false
                };
            }
            return user;
        });
        localStorage.setItem(nameOnLocalStorage, JSON.stringify(newUserInfo));
        setUserInfo(newUserInfo);
    };

    useEffect(() => {
        if (localStorage.getItem(nameOnLocalStorage) !== null) {
            const localUserInfo: string = localStorage.getItem(nameOnLocalStorage) || "";
            setUserInfo(JSON.parse(localUserInfo));
        } else {
            getUsers(urlData).then((data: any) => {
                if (typeof data === "undefined") {
                    setLoading(true);
                    localStorage.removeItem(nameOnLocalStorage);
                } else {
                    localStorage.setItem(nameOnLocalStorage, JSON.stringify(data));
                    setUserInfo(data);
                }
            });
        }
    }, []);

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
            {loading ? (
                <h3>Ошибка на стороне сервера</h3>
            ) : (
                <div
                    className={classesSelectComponent.classWpapperSelect}>
                    <div className={classesSelectComponent.classInputWrapper}>
                        <CheckedList
                            onToggle={toggleHandler}
                            userInfo={userInfo}
                            isMulti={isMulti}
                            classesSelectComponent={classesSelectComponent}
                        />
                        <SelectField
                            arrowStatus={isActive}
                            handleChange={handleChange}
                            setDisplay={setDisplay}
                            onToggle={toggleHandler}
                            handleToggle={handleToggle}
                            classesSelectComponent={classesSelectComponent}
                        />
                    </div>
                    <PopupList
                        isActive={isActive}
                        setDisplay={setDisplay}
                        filteredUsers={filteredUsers}
                        isMulti={isMulti}
                        onToggle={toggleHandler}
                        handleClick={handleClick}
                        classesSelectComponent={classesSelectComponent}
                    />
                </div>
            )}
        </>
    );
};

export default EntryField;
