type infoAboutUsers = {
    id: number;
    username: string;
}

const urlGetUsers = "https://jsonplaceholder.typicode.com/users";

/**
 * @description Получает всех доступных пользователей
 */

function getUsers() {
    return fetch(urlGetUsers)
        .then((response) => response.json())
        .then((users) =>
            users.map((user: infoAboutUsers) => ({
                userId: user.id,
                userName: user.username
            }))
        );
}

export default getUsers;
