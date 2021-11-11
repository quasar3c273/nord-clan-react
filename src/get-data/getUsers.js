function getUsers() {
    return fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((users) =>
            users.map((user) => ({
                userId: user.id,
                userName: user.username
            }))
        );
}

export default getUsers;
