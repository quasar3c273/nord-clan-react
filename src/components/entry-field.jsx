import React, {useState} from 'react';

const EntryField = ({userInfo, onToggle, isMulti = true}) => {
    const [isActive, setIsActive] = useState(false);
    const [filter, setFilter] = React.useState("");
    const [isActiveInput, setIsActiveInput] = useState(false);

    const handleChange = (event) => {
        setFilter(event.target.value);
    };

    const handleClick = (event) => {
        setIsActiveInput(!isActiveInput);
    };

    const handleToggle = () => {
        setIsActive(!isActive);
    };

    const filteredUsers =
        filter === ""
            ? userInfo
            : userInfo.filter((user) =>
                user.userName.toLowerCase().includes(filter.toLowerCase())
            );

    return (
        <>
            <div className="users">
                <div className="input-wrapper">
                    {userInfo.map((user, index) => {
                        if (user.checked === true) {
                            return (
                                <div className="input-wrapper__item" key={index}>
                                    {user.userName}
                                    <button
                                        className="input-wrapper__item-close"
                                        onClick={onToggle.bind(null, user.userId)}>
                                    </button>
                                    {","}
                                </div>
                            )
                        }
                    })}
                        <input
                            type="text"
                            id="entry-field"
                            onChange={handleChange}
                            onFocus={handleToggle}
                            onBlur={handleToggle}
                        />
                        <button
                            className="input-wrapper__item-close"
                            onClick={onToggle.bind(null, "closeAll")}>
                        </button>
                        <button
                            className="input-wrapper__chevron-down"
                            onClick={handleToggle}
                        >
                        </button>
                </div>
                <ul className={`${isActive ? 'display-none ': ""}users__list`}>
                {filteredUsers.map(user => <>
                    <li
                        onClick={onToggle.bind(null, user.userId)}
                        className="users__list__item"
                        key={user.userId}
                    >
                        {user.userName}
                        { isMulti &&
                            <input
                                type="checkbox"
                                checked={user.checked}
                            />
                        }
                    </li>
                </>
                )}
            </ul>
            </div>
        </>
    );
}

export default EntryField;
