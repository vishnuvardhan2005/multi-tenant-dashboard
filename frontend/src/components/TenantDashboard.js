import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const TenantDashboard = () => {
   const { tenantId } = useParams();
   const [config, setConfig] = useState(null);

   // Fetch tenant configuration when the component is mounted
   useEffect(() => {
      axios.get(`/api/config/${tenantId}`)
         .then(response => setConfig(response.data))
         .catch(error => console.error(error));
   }, [tenantId]);

   if (!config) return <div>Loading...</div>;

   return (
      <div style={{ backgroundColor: config.theme.primaryColor }}>
         <h1>{tenantId.toUpperCase()} Dashboard</h1>
         {config.widgets.includes('VehicleStats') && <div>Vehicle Stats Widget</div>}
         {config.widgets.includes('Alerts') && <div>Alerts Widget</div>}
         {config.widgets.includes('VehicleMap') && <div>Vehicle Map Widget</div>}
         {config.widgets.includes('Journeys') && <div>Journeys Widget</div>}
      </div>
   );
};

export default TenantDashboard;
