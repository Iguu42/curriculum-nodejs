const pool = require('../models');

const getEducationById = async (req, res) => {
    const { id } = req.params;
    try {
        const { rows } = await pool.query('SELECT * FROM education WHERE id = $1', [id]);
        if (rows.length) {
            res.send(rows[0]);
        } else {
            res.status(404).send('Education not found');
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Error on search.');
    }
};
const createEducation = async (req, res) => {
    try {
        const { personal_id, school_name, degree, field_of_study, start_date, end_date } = req.body;
        const { rows } = await pool.query(
            'INSERT INTO education (personal_id, school_name, degree, field_of_study, start_date, end_date) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
            [personal_id, school_name, degree, field_of_study, start_date, end_date]
        );
        res.status(201).send(rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error on create.');
    }
};

module.exports = { getEducationById, createEducation };

