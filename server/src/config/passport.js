import { Strategy } from "passport-local";

const passaportConfig = (passport, userService) => {
    const options = { username: "email" }
    const signupStrategy = new Strategy({
        username: "email", passReqToCallback: true
    },
        userService.signup
    )

    const login = new Strategy(
        options, userService.login
    )
}