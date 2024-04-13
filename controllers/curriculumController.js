const pool = require('../models/index');


const getAllCurriculum = async (req, res) => {
    try {
        const people = await pool.query('SELECT * FROM personal');
        const promises = people.rows.map(async person => {
            const education = await pool.query('SELECT * FROM education WHERE personal_id = $1', [person.id]);
            const experience = await pool.query('SELECT * FROM experience WHERE personal_id = $1', [person.id]);
            const skills = await pool.query('SELECT * FROM skills WHERE personal_id = $1', [person.id]);

            return {
                ...person,
                education: education.rows,
                experience: experience.rows,
                skills: skills.rows
            };
        });

        const resumes = await Promise.all(promises);
        res.send(resumes);
    } catch (err) {
        console.error('Erro ao buscar currículos:', err.stack);
        res.status(500).send('Erro ao buscar currículos.');
    }
};


module.exports = { getAllCurriculum };