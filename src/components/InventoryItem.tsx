import React from 'react';

interface ItemProps {
    item: {
        id: number;
        name: string;
        type: string;
    };
}

const InventoryItem: React.FC<ItemProps> = ({ item }) => {
    return (
        <div>
            <h3>{item.name}</h3>
            <p>Type: {item.type}</p>
        </div>
    );
};

export default InventoryItem;
