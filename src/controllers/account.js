const mysqlDB = require('../database/mysqlConnection');

// Create user
const signUp = (req, res, next) => {
    const user = req.body;

    const values = {
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        username: user.username,
        password: user.password,
    };

    const repassword = user.repassword;

    if (user.password === repassword) {
        mysqlDB.query('insert into user SET ?', values, function (err, data) {
            if (err) return res.json(err);
            return res.json({ message: 'success' });
        });
    } else {
        return res.json({ message: 'Mat khau khong dung' });
    }
};

module.exports = {
    signUp,
};
