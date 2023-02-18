

export function getUsers() {
    return new Promise((res, rej) => setTimeout(() => res(
        {
            name: "goblin",
            password: "12345"
        }
    ), 1000))
}
