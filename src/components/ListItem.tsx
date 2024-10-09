import { useState } from 'react';
import { useListContext } from './ListContext';
import {ListItemProps} from "../types/ListItem";
import {Button, Input, ItemContainer, ItemText} from "../styles/ListItem";


export const ListItem = ({ item, isParent } : ListItemProps) => {
    const { addChild, removeItem } = useListContext();
    const [newChildText, setNewChildText] = useState('');

    const handleAddChild = () => {
        if (newChildText.trim()) {
            addChild(item.id, newChildText);
            setNewChildText('');
        }
    };

    const handleRemove = () => {
        removeItem(item.id);
    };

    return (
        <ItemContainer>
            <ItemText>
                <span style={{width: '50px'}}>{item.text}</span>
                {isParent && (
                    <>
                        <Input
                            type="text"
                            value={newChildText}
                            onChange={(e) => setNewChildText(e.target.value)}
                            placeholder="New child text"
                        />
                        <Button onClick={handleAddChild}>Add Child</Button>
                    </>
                )}
                {!isParent && (
                    <Button onClick={handleRemove}>Remove</Button>
                )}
            </ItemText>
            {item.children.length > 0 && (
                <ul>
                    {item.children.map((child) => (
                        <ListItem key={child.id} item={child} isParent={false} />
                    ))}
                </ul>
            )}
        </ItemContainer>
    );
};