// import { MouseEvent } from "react";

import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
}

function ListGroup({items, heading}: Props) {


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
