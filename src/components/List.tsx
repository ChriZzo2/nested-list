import { useListContext } from './ListContext';
import { ListItem } from './ListItem';
import {ListContainer} from "../styles/List";


export const List = () => {
    const { list } = useListContext();

    return (
        <ListContainer>
            {list.map((item) => (
                <ListItem key={item.id} item={item} isParent />
            ))}
        </ListContainer>
    );
};

