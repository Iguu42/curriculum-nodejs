const pool = require('../models');

const getAllPersonalInfo = async (req, res) => {
    try {
        const { rows } = await pool.query('SELECT * FROM personal');
        res.send(rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error on search.');
    }
};

const getPersonalInfoById = async (req, res) => {
    const { id } = req.params;
    try {
        const { rows } = await pool.query('SELECT * FROM personal WHERE id = $1', [id]);
        if (rows.length) {
            res.send(rows[0]);
        } else {
            res.status(404).send('User not found.');
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Error on search.');
    }
};

const createPersonalInfo = async (req, res) => {
    try {
        const { name, profession, email, phone } = req.body;
        const { rows } = await pool.query(
            'INSERT INTO personal (name, profession, email, phone) VALUES ($1, $2, $3, $4) RETURNING *',
            [name, profession, email, phone]
        );
        res.status(201).send(rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error on create.');
    }
};

module.exports = { getAllPersonalInfo, createPersonalInfo, getPersonalInfoById };