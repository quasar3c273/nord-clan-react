import React from "react";
import "./index.scss";
import EntryField from "./components/entry-field";

/**
 * @description - массив для хранения имён классов компонента
 */
const classesSelectComponent = {
    classWpapperSelect: "users",
    classInputWrapper: "input-wrapper",
    classCheckListWpapper: "check-list-wrapper",
    inputWrapperItem: "input-wrapper__item",
    classDelete: "input-wrapper__item-close",
    selectFieldWrapper: "wrapper",
    chevronUp: "input-wrapper__chevron-up",
    chevronDown: "input-wrapper__chevron-down",
    popupListAll: "users__list",
    popupListAllNonDisplay: "display-none ",
    checkedInPopupList: "checked-user ",
    usersPopupListItems: "users__list__item",
    checkboxUserClassName: "",
    notSearchOnList: "not-search"
};

const urlGetUsers: string = "https://jsonplaceholder.typicode.com/users";

/**
 * @description - Компонент приложения
 */
function App() {
    return (
        <>
            <h1>Test Task Nord Clan</h1>
            <span>Инпут с возможностью мультивыбора</span>
            <EntryField
                isMulti={true}
                nameOnLocalStorage="users42"
                classesSelectComponent={classesSelectComponent}
                urlData={urlGetUsers}
            />
            <span>Инпут без возможности мультивыбора</span>
            <EntryField
                isMulti={false}
                nameOnLocalStorage="users422"
                classesSelectComponent={classesSelectComponent}
                urlData={urlGetUsers}
            />
        </>
    );
}

export default App;
