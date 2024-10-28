function ListGroup() {
  const items = ["Satoru", "Suguru", "Hi"];

  return (
    // Tell react to wrap it in fragment
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
