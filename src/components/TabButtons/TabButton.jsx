//Props.children tager teksten mellem åben og luk fra TabButton komponenten
export default function TabButton({children, onClick, isSelected}) {


    return (
        <li>
            {/* className erstatter class fra HTML i REACT, men det gør det samme.*/}
            <button className={isSelected ? 'active' : undefined} onClick={onClick} >{children}</button>
        </li>
    )
}