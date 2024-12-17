const appConfig = {
    api: {
        domain: "http://localhost:8000/api",
        timeout: 10000,
        retry: 3,
    },
    auth:{
        signup: "/user/register",
        login: "/verifylogin",
    }
}

export default appConfig