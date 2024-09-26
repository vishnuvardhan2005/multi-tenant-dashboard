const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

// MongoDB connection
mongoose.connect('mongodb://host.docker.internal:27017/tenantDB', { useNewUrlParser: true, useUnifiedTopology: true })
   .then(() => console.log('MongoDB connected'))
   .catch(err => console.log(err));

const tenantSchema = new mongoose.Schema({
   name: String,
   config: Object,
});

const Tenant = mongoose.model('Tenant', tenantSchema);

// API to fetch tenant configuration
app.get('/api/config/:tenantId', async (req, res) => {
   console.log('Fetching tenant configuration for:', req.params.tenantId);
   const tenantId = req.params.tenantId;
   const tenant = await Tenant.findOne({ name: tenantId });
   if (tenant) {
      res.json(tenant.config);
   } else {
      res.status(404).json({ error: 'Tenant not found...' });
   }
});

app.listen(PORT, () => {
   console.log(`Backend running on port ${PORT}`);
});
