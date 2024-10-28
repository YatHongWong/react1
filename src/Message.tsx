// use PascalCase to create function/component
function Message() {
  // This is JSX, it gets converted into javascript code
  const name = 'Gojo';
  if (name) {
    return <h1>{name}'s Hollow Purple</h1>;
  } else {
    return <h1>Hello World</h1>;
  }
}

// we need this to be able to use it
export default Message;