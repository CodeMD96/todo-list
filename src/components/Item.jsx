export const Item = ({ item, removeHandler }) => (
    <li className="list-item">
        <p>{item}</p>
        <button className="list-button" onClick={removeHandler} >Done</button>
    </li>
)