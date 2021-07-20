import "./App.scss";
import Chat from "./components/chat/chat.component";
import Sidebar from "./components/sidebar/sidebar.component";

function App() {
  return (
    <div className="app">
      <div className="app__body">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default App;
