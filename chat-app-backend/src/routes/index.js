import { getUserByIdRoute, getUserByNameRoute, getUsersRoute } from "./getUsers";
import { LogInRoute, SignUpRoute } from "./auth";

export default [
    getUsersRoute,
    getUserByIdRoute,
    getUserByNameRoute,
    LogInRoute,
    SignUpRoute,
]