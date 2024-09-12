import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // place variables and knowns here

  // client code
  return (
    <>
      <article>
        <h1>
          React Documentation{" "}
          <span className="midnight">Review by ceoDemitri</span>
        </h1>
      </article>

      {/* cta buttons for displaying the content */}
      <div className="cta">
        <a href="#start">
          <figure>
            <img src={reactLogo} alt="React logo" />
            <figcaption>Get Started</figcaption>
          </figure>
        </a>
        <a href="/">
          <figure>
            <img src={viteLogo} alt="Vite Logo" />
            <figcaption>Learn React</figcaption>
          </figure>
        </a>
      </div>

      {/* get started */}
      <div id="start">
        <h2>Get Started</h2>

        {/* quick start */}
        <h3>Quick Start</h3>
        <p>
          Goals:
          <ul>
            <li>How to create and nest components</li>
            <li>How to add markup and styles</li>
            <li>How to display data</li>
            <li>How to render conditions and lists</li>
            <li>How to respond to events and update the screen</li>
            <li>How to share data between components</li>
          </ul>
        </p>

        {/* create and nesting component */}
        <h4>Create and nesting Components</h4>
        <section>
          <p>
            1. Component is a piece of UI that has own logic and appearance.
            Small as a button or large as entire page
          </p>
          <p>2. Components are Javascript Functions that return markup</p>
          <p>3. React Components are PascalCase</p>
          <p>4. export default points to the main component of the file</p>
          <pre>
            {`
              function MyButton() {
                return (
                  <button>Click me</button>
                );
              }

              export default function MyApp() {
                return (
                  <div>
                    <h1>My App</h1>
                    <MyButton />
                  </div>
                )
              }
            `}
          </pre>
        </section>

        {/* add markup and styles */}
        <h4>Writing Markup with JSX</h4>
        <section>
          <p>1. JSX is more strict than HTML</p>
        </section>

        {/* adding styles */}
        <h4>Adding styles</h4>
        <section>
          <p>1. React uses 'className'</p>
        </section>
      </div>

      {/* learn react */}
    </>
  );
}

export default App;
