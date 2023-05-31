import React from 'react';
import InventoryList from './InventoryList';

interface InventoryItem {
    id: number;
    name: string;
    type: string;
}

const InventoryDashboard: React.FC = () => {
    const inventoryItems: InventoryItem[] = [
        {id: 1, name: 'Sword', type: 'Weapon'},
        {id: 2, name: 'Lance', type: 'Weapon'},
        {id: 3, name: 'Axe', type: 'Weapon'},
        {id: 4, name: 'Bow', type: 'Weapon'},
        {id: 5, name: 'Tome', type: 'Weapon'},
        {id: 6, name: 'Dagger', type: 'Weapon'},
        {id: 7, name: 'Staff', type: 'Weapon'},
        {id: 8, name: 'Healing Potion', type: 'Consumable'},
    ];

    return (
        <div>
            <h1>Fire Emblem Inventory Dashboard</h1>
            <InventoryList items={inventoryItems} />
        </div>
    );
};

export default InventoryDashboard
