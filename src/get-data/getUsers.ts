type infoAboutUsers = {
    id: number;
    username: string;
}

/**
 * @type {infoAboutUsers[]} - типы данных массива объектов пользователей
 * @param urlGetUsers - URL для получения данных
 * @return {Promise<infoAboutUsers[]>} - возвращает промис с массивом объектов пользователей
 */

function getUsers(urlGetUsers: string): Promise<infoAboutUsers[]> {
    return fetch(urlGetUsers)
        .then(response => {
            if (response.ok) {
                return response.json()
                    .then((users) =>
                        users.map((user: infoAboutUsers) => ({
                            userId: user.id,
                            userName: user.username,
                            checked: false
                        }))
                    );
            } else {
                throw new Error("Ошибка при получении данных");
            }
        })
        .catch(error => {
            console.log(error);
        });
}

export default getUsers;
