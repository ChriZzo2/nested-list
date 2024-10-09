import {createContext, ReactNode, useContext, useState} from 'react';
import {v1} from "uuid";
import {ListContextType, ListItem} from "../types/ListItem";


const ListContext = createContext<ListContextType | undefined>(undefined);

export const useListContext = () => {
    const context = useContext(ListContext);
    if (!context) {
        throw new Error('useListContext must be used within a ListProvider');
    }
    return context;
};

interface ListProviderProps {
    children: ReactNode;
}

export const ListProvider = ({ children } : ListProviderProps) => {
    const [list, setList] = useState<ListItem[]>([
        { id: v1(), text: 'Item 1', children: [] },
        { id: v1(), text: 'Item 2', children: [] },
        { id: v1(), text: 'Item 3', children: [] },
        { id: v1(), text: 'Item 4', children: [] },
        { id: v1(), text: 'Item 5', children: [] },
        { id: v1(), text: 'Item 6', children: [] },
    ]);

    const addChild = (parentId: string, text: string) => {
        const newItem: ListItem = { id: v1(), text, children: [] };
        setList((prevList) =>
            prevList.map((item) =>
                item.id === parentId
                    ? { ...item, children: [...item.children, newItem] }
                    : item
            )
        );
    };

    const removeItem = (id: string) => {
        setList((prevList) => {
            const removeRecursive = (items: ListItem[]): ListItem[] => {
                return items.filter((item) => {
                    if (item.id === id) {
                        return false;
                    }
                    item.children = removeRecursive(item.children);
                    return true;
                });
            };
            return removeRecursive(prevList);
        });
    };

    return (
        <ListContext.Provider value={{ list, addChild, removeItem }}>
            {children}
        </ListContext.Provider>
    );
};