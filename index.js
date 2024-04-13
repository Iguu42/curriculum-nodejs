// app.js
const express = require('express');
const resumeRoutes = require('./routes/curriculumRoutes');

const app = express();
app.use(express.json());

app.use('/', resumeRoutes);

app.listen(3003, () => {
    console.log('Server on port 3003');
});
