const express = require('express')
const cors = require('cors')

const app = express();

app.use(cors())
app.use('/api', require('./server_files/serverRoutes'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));