import React from "react";

const CheckedList = ({ userInfo, onToggle, isMulti }) => {
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
