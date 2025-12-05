//validations simple concepts
const express = require('express');
const { body, validationResult } = require('express-validator');
const app = express();
const port = 3001;
app.use(express.json());

app.post('/user',
    body('username').isLength({ min: 5 }).withMessage('Username must be at least 5 characters long'),
    body('email').isEmail().withMessage('Invalid email address'),
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        res.send(`<div><h2>User data is valid</h2></div>`);
    }
);
app.listen(port, () => {
    console.log("Server is Running with Validations...");
});


