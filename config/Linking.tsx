const config = {
    screens: {
        Home: {
            path: "home"
        },
        Settings: {
            path: "settings"
        },
        Detail: {
            path: "detail/:id",
            parse: {
                id: (id: any) => `${id}`
            }
        }
    }
}

export const linking = {
    prefixes: ["example-link://example.com"],
    config
}
