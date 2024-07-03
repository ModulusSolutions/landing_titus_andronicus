import logo from "./logo.svg";

function App() {
  return (
    <div>
      <header>
        <div className="flex flex-col justify-center items-center">
          <img src={logo} alt="logo" className="w-10 h-10" />
          <p className="text-5xl">Hello world!</p>
        </div>
      </header>
    </div>
  );
}

export default App;
