import { Item } from "./Item"

const List = ({ items, removeHandler }) => (
    <ul className="todo-list">
        {items.map((item, index) => (
            <Item key={index} item={item} removeHandler={() => removeHandler(index)} />
        ))}
    </ul>
)

export default List
