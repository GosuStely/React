import { useState } from 'react';

function App() {
  return (
    <div>
      <h1>Welcome to my first React app</h1>

      <h2>{user.name}</h2>
      <img
        className="avatar"
        src={user.imageURL}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
          borderRadius: user.imageSize,
        }}
      />
      <ul>{listItems}</ul>
      <MyButton />
    </div>
  );
}

export default App;
const user = {
  name: 'Gerogi Parvanov',
  imageURL: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

const products = [
  { title: 'Cucumber', isFruit: false, id: 1 },
  { title: 'Banana', isFruit: true, id: 2 },
  { title: 'Orange', isFruit: true, id: 3 },
  { title: 'Apple', isFruit: true, id: 4 },
];

const listItems = products.map(product => (
  <li
    key={product.id}
    style={{
      color: product.isFruit ? 'darkgreen' : 'magenta',
    }}
  >
    {product.title}
  </li>
));

function MyButton() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  return (
    <button className="main-btn" onClick={handleClick}>
      Click me ! {count}
    </button>
  );
}
