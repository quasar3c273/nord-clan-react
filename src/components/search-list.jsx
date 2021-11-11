import React from 'react'

const SearchOnList = ({userInfo}) => {
    return (
        <div className="App">
            <input list="browsers" type="text" placeholder="Search" />
            <datalist id="browsers">
                {userInfo.map(user => <option key={user.id} value={user.userName} />)}x`
            </datalist>
        </div>
    );
}

export default SearchOnList
