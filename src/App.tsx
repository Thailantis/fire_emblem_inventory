import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import InventoryDashboard from './components/InventoryDashboard';
import InventoryItem from './components/InventoryItem';
import InventoryList from './components/InventoryList';

const App: React.FC = () => {
  return (
    <div className='container'>
      <InventoryDashboard />
      <InventoryItem item={{
        id: 1,
        name: 'Falchion',
        type: 'Weapon'
      }} />
      <InventoryList items={[]}/>
    </div>
  );
};

export default App;
