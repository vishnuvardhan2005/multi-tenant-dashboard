const mongoose = require('mongoose');

mongoose.connect('mongodb://host.docker.internal:27017/tenantDB', { useNewUrlParser: true, useUnifiedTopology: true });

const tenantSchema = new mongoose.Schema({
   name: String,
   config: Object,
});

const Tenant = mongoose.model('Tenant', tenantSchema);

const tenants = [
   {
      name: 'tenant1',
      config: {
         theme: { primaryColor: 'blue', logo: '/logos/tenant1.png' },
         widgets: ['vehicleStats', 'alerts'],
      },
   },
   {
      name: 'tenant2',
      config: {
         theme: { primaryColor: 'green', logo: '/logos/tenant2.png' },
         widgets: ['vehicleMap', 'journeys'],
      },
   },
];

Tenant.insertMany(tenants)
   .then(() => {
      console.log('Tenant data inserted');
      mongoose.connection.close();
   })
   .catch(err => {
      console.error(err);
   });
