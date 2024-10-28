// import { MouseEvent } from "react";

import { useState } from "react";

// We should always treat props as immutable, don't change it. We shoudl change state variables 
interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  // const errorMessage = () => {
  //   return items.length === 0 && <p>No items found</p>;;
  // };

  // This is an event handler
  // const handleClick = (event: MouseEvent) => console.log(event);
  // State hook, tells react this component have data or state that changes over time
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    // Tell react to wrap it in fragment
    <>
      <h1>{heading}</h1>
      {/* {errorMessage} */}
      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
