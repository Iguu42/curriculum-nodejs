// app.js
const express = require('express');
const resumeRoutes = require('./routes/curriculumRoutes');
const personalRoutes = require('./routes/personalRoutes');
const skillsRoutes = require('./routes/skillsRoutes');
const educationRoutes = require('./routes/educationRoutes');
const experienceRoutes = require('./routes/experienceRoutes');

const app = express();
app.use(express.json());

app.use('/', resumeRoutes);
app.use('/', personalRoutes);
app.use('/', skillsRoutes);
app.use('/', educationRoutes);
app.use('/', experienceRoutes);

app.listen(3003, () => {
    console.log('Server on port 3003');
});
