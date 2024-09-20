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
      <div id="start" className="start">
        <h2>Get Started</h2>

        {/* quick start */}
        <div>
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
        </div>

        {/* create and nesting component */}
        <div>
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
        </div>

        {/* add markup and styles */}
        <div>
          <h4>Writing Markup with JSX</h4>
          <section>
            <p>1. JSX is more strict than HTML</p>
          </section>
        </div>

        {/* adding styles */}
        <div>
          <h4>Adding styles</h4>
          <section>
            <p>1. React uses 'className'</p>
          </section>
        </div>

        {/* displaying data */}
        <div>
          <h4>Displaying Data</h4>
          <section>
            <p>
              1. JSX - Markup with Javascript
            </p>
            <pre>
              {`
                return (
                  <div>
                    <h1>Hello, {name}</h1>
                    <p>Welcome to our website!</p>
                    <img
                      className="avatar"
                      src={user.imageUrl}
                      alt={'Photo of ' + user.name}
                      style={{
                        width: user.imageSize,
                        height: user.imageSize
                      }}
                    />
                  </div>
                )
              `}
            </pre>
          </section>
        </div>

        {/* conditional rendering */}
        <div>
          <h4>Conditional Rendering</h4>
          <section>
            <p>
              1. No special syntax.
            </p>
            <pre>
              {`
                <div>
                  {isLoggedIn ? (
                    <AdminPanel />
                  ) : (
                    <LoginForm />
                  )}
                </div>
              `}
            </pre>
          </section>
        </div>

        {/* rendering lists */}
        <div>
          <h4>Rendering Lists</h4>
          <section>
            <p>
              1. Use the map() method to iterate over an array and create a new array of elements.
              2. For each item in a list, use id to uniquely identify each item from siblings.
            </p>
            <pre>
              {`
                const gemstones = [
                  {title: 'Tiger Eye', id: 1 },
                  { title: 'Ruby', id: 2 },
                  { title: 'Sapphire', id: 3 },
                ];
                
                const listItems = gemstones.msp(gemstone => 
                  <li key={gemstone.id}>
                    {gemstone.title}
                  </li>
                );

                return (
                 <ul>
                    {listItems}
                  </ul>
                );
              `}
            </pre>
            {/* example */}
            <h5>Example</h5>
            <pre>
              {`
                const planets = [
                  {title: 'Mercury', id: 1},
                  {title: 'Saturn', id: 2},
                  {title: 'Pluto', id: 3},
                ];

                const listItems = planets.map(planet => 
                  <li key={planet.id}>
                    {planet.title}
                  </li>
                );

                return (
                 <ul>
                    {listItems}
                  </ul>
                );
              `}
            </pre>

            <pre>
              {`
                const elements = [
                  {title: 'Gold', id: 1},
                  {title: 'Plutonium', id: 2},
                  {title: 'Uranium', id: 3},
                ];

                const listItems = elements.map(element =>
                  <li key={element.id}>
                    {element.title}
                  </li>
                );

                return (
                 <ul>
                    {listItems}
                  </ul>
                );
              `}
            </pre>
          </section>
        </div>
        
      </div>

      {/* learn react */}
    </>
  );
}

export default App;
