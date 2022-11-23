export const isLoggedOut = (req, res, next) => {
    if (req.isAuthenticated()) {
        return res.redirect("/");
        next()
    }
}

export const isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        return res.redirect("/login");
        next()
    }
}