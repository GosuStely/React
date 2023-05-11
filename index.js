ReactDOM.render(
  <ul>
    <li>1</li>
    <li>2</li>
  </ul>,
  document.getElementById('root')
);
function MainContent() {
  return <h1>I am amazing</h1>;
}

let parentElement = document.getElementById('root');
let childElement = document.createElement('h1');

childElement.innerHTML = 'okay i can still do this';
childElement.classList.add('header');
parentElement.appendChild(childElement);

const navbar = (
  <nav>
    <h1>Logo</h1>
    <ul>
      <li>Pricing</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </nav>
);
ReactDOM.render(navbar, document.getElementById('root'));
