import React from "react";

type infoAboutUsers = {
    userId: number;
    userName: string;
    checked?: boolean;
}

type typesPropsList = {
    userInfo: infoAboutUsers[];
    onToggle: (id: number) => void;
    isMulti: boolean;
}

const CheckedList = ({ userInfo, onToggle, isMulti } : typesPropsList) => {
    return (
        <div className="test42">
            {userInfo.map((user, index) => {
                return (
                    user.checked === true && (
                        <div className="input-wrapper__item" key={index}>
                            {user.userName}
                            <button
                                className="input-wrapper__item-close"
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
