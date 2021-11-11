import React, {useState} from 'react'
import './App.scss'
import getUsers from "./get-data/getUsers"
import EntryField from "./components/entry-field";

function App() {
    const [userInfo, setUserInfo] = useState([]);

    const toggleHandler = (id) => {
        const newUserInfo = userInfo.map(user => {
            if (user.userId === id) {
                return {
                    ...user,
                    checked: !user.checked
                }
            } else if (id === "closeAll"){
                return {
                    ...user,
                    checked: false
                }
            }
            return user;
        });
        localStorage.setItem('users', JSON.stringify(newUserInfo));
        setUserInfo(newUserInfo)
    }

    React.useEffect(() => {
        if (localStorage.getItem('users') !== null) {
            setUserInfo(JSON.parse(localStorage.getItem('users')));
        } else {
            getUsers().then(data => {
                data.map(user => {
                    user.checked = false;
                    return user;
                });
                localStorage.setItem('users', JSON.stringify(data));
                setUserInfo(data);
            });
        }
    }, []);

    return (
        <>
            <h1>Test Task</h1>
            <EntryField userInfo={userInfo} onToggle={toggleHandler}/>
        </>
    );
}

export default App;
