interface LoginResponse {
    msg: string,
    status: number,
    loginToken?: string,
    err?: any
}

interface SignUpResponse {
    msg: string,
    status: number,
    fullName?: string,
    email?: string,
    password?: string,
    err?: any
}