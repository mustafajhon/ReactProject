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

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <h1>Hello World</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam,
              corporis quam sit doloribus et reiciendis sint tenetur facilis
              cumque ex provident placeat? Quam, accusantium aut dignissimos vel
              debitis delectus porro.
            </p>
          </div>
          <div className="col-md-6">
            <h1>Hello World</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam,
              corporis quam sit doloribus et reiciendis sint tenetur facilis
              cumque ex provident placeat? Quam, accusantium aut dignissimos vel
              debitis delectus porro.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
