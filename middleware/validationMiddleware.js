const validateUserInput = (req, res, next) => {
    const { firstName, lastName, email, password } = req.body;
    if (!firstName || !lastName || !email || !password) {
        return res.status(400).json({ error: 'Missing required fields' })
    }
    next();
};

module.exports = { validateUserInput }