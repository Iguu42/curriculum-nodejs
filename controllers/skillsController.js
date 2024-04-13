const pool = require('../models');

const getSkillById = async (req, res) => {
    const { id } = req.params;
    try {
        const { rows } = await pool.query('SELECT * FROM skills WHERE id = $1', [id]);
        if (rows.length) {
            res.send(rows[0]);
        } else {
            res.status(404).send('Skill not found');
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Error on search.');
    }
};

const createSkill = async (req, res) => {
    try {
        const { personal_id, skill_name, proficiency } = req.body;
        const { rows } = await pool.query(
            'INSERT INTO skills (personal_id, skill_name, proficiency) VALUES ($1, $2, $3) RETURNING *',
            [personal_id, skill_name, proficiency]
        );
        res.status(201).send(rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error on create.');
    }
};

module.exports = { getSkillById, createSkill };
