import React from "react";
import "./index.scss";
import EntryField from "./components/entry-field";

const classesSelectComponent = {
    classWpapperSelect: "users",
    classInputWrapper: "input-wrapper",
    classCheckListWpapper: "test42",
    inputWrapperItem: "input-wrapper__item",
    classDelete: "input-wrapper__item-close",
    selectFieldWrapper: "wrapper",
    chevronUp: "input-wrapper__chevron-up",
    chevronDown: "input-wrapper__chevron-down",
    popupListAll: "users__list",
    popupListAllNonDisplay: "display-none ",
    checkedInPopupList: "checked-user ",
    usersPopupListItems: "users__list__item",
    userClassName: "test123",
    checkboxUserClassName: "qwerty12",
    notSearchOnList: "test123"
};

function App() {
    return (
        <>
            <h1>Test Task</h1>
            <EntryField
                isMulti={true}
                nameOnLocalStorage = "users42"
                classesSelectComponent={classesSelectComponent}
            />
        </>
    );
}

export default App;
