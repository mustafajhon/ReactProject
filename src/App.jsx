import Counter from "./Components/home/counter";
import Service from "./Components/service/service";
import "./index.css";
function App() {
  return (
    <>
      <div className="container">
        <div className="log">Logo</div>
        <ul className="nav justify-content-end">
          <li className="nav-item">
            <a href="#" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Service
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Contacts
            </a>
          </li>
        </ul>
      </div>

      <Counter btn="Button" />

      <hr />
      <Service />
    </>
  );
}

export default App;
