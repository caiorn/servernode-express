const express = require('express');
const router = express.Router();


router.get('/users', (req, res) => {
  res.send('List of users!');
});

router.get('/users/:id/:test', (req, res) => {
    const userId = req.params.id;
    const test = req.params.test;
    res.send(`${userId}\r\n${test}`);
});

// query string route
router.get('/users/search', (req, res) => {
    const { name, age } = req.query;
    res.send(`${name}\r\n${age}`);
});

router.post('/users', (req, res) => {
  const user = req.body;
  res.status(201).json({ message: 'User created!', user });
});

 module.exports = router;