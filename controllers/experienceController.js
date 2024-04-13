const pool = require('../models');

const getExperienceById = async (req, res) => {
    const { id } = req.params;
    try {
        const { rows } = await pool.query('SELECT * FROM experience WHERE id = $1', [id]);
        if (rows.length) {
            res.send(rows[0]);
        } else {
            res.status(404).send('Experience not found');
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Error on search.');
    }
};

const createExperience = async (req, res) => {
    try {
        const { personal_id, company_name, position, start_date, end_date, description } = req.body;
        const { rows } = await pool.query(
            'INSERT INTO experience (personal_id, company_name, position, start_date, end_date, description) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
            [personal_id, company_name, position, start_date, end_date, description]
        );
        res.status(201).send(rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error on create.');
    }
};

module.exports = { getExperienceById, createExperience };
