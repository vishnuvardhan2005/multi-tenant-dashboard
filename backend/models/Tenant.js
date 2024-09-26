const mongoose = require('mongoose');

const tenantSchema = new mongoose.Schema({
  name: String,
  config: Object,
});

module.exports = mongoose.model('Tenant', tenantSchema);
