const express = require('express');
const db = require('./db/db');
const service = require('./service/service');
const util = require('./util/util');

const app = express();
const port = 3000;

app.get('/health-check', async (req, res) => {
  res.send(`Server is running! at http://localhost:${port}`);
});

app.get('/pi-value', async (req, res) => {

    res.send(await util.createApiResponse("success", false, await service.valueOfPi()));
});

app.get('/circumference/sun', async (req, res) => {
    
    res.send(await util.createApiResponse("success", false, await service.calculateCircumferenceOfTheSun()));
});

app.listen(port, async () => {
    await service.calculatePiValue();
});