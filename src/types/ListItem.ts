export interface ListItem {
    id: string;
    text: string;
    children: ListItem[];
}

export interface ListContextType {
    list: ListItem[];
    addChild: (parentId: string, text: string) => void;
    removeItem: (id: string) => void;
}

export interface ListItemProps {
    item: {
        id: string;
        text: string;
        children: ListItemProps['item'][];
    };
    isParent: boolean;
}