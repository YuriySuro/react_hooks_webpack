const all = () => (
    emulateRequest().then(() => {
        return users.map((user) => {
            return {
                id: user.id,
                name: user.name
            }
        })
    })
);

const get = (id) => (
    emulateRequest().then(() => {
        let num = users.findIndex(user => user.id === id);
        return num === -1 ? null : users[num];
    })
);

export {all, get};

let users = [
    {
        id: 1,
        name: 'Some user',
        description: 'Ahahaha',
        age: 1900
    },
    {
        id: 2,
        name: 'Another user',
        description: 'bugaga',
        age: 2000
    },
    {
        id: 5,
        name: 'And one more',
        description: 'some hz nz',
        age: 1800
    }
];

function emulateRequest(timeout = 500) {
    return new Promise((resolve) => {
        window.setTimeout(resolve, timeout);
    });
};