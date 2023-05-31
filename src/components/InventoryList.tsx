import React from 'react';
import InventoryItem from './InventoryItem';

interface ListProps {
    items: {
        id: number;
        name: string;
        type: string;
    }[];
}

const InventoryList: React.FC<ListProps> = ({ items }) => {
    return(
        <div>
            <h2>Inventory List</h2>
            {items.map((item) => (
                <InventoryItem key={item.id} item={item} />
            ))}
        </div>
    );
};

export default InventoryList
