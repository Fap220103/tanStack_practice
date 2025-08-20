import "./App.css";
import UserContextProvider from "./contexts/UserContextProvider";
import Router from "./Router";

function App() {
  return (
    <>
      <div className="App">
        <UserContextProvider>
          <Router />
        </UserContextProvider>
      </div>
      {/* <PostPage></PostPage> */}
    </>
  );
}

export default App;
