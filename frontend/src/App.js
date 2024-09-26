import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TenantDashboard from './components/TenantDashboard';

const App = () => {
   return (
      <Router>
         <Routes>
            {/* Each route is now wrapped in the 'Route' component with an element prop */}
            <Route path="/tenant/:tenantId" element={<TenantDashboard />} />
         </Routes>
      </Router>
   );
};

export default App;
