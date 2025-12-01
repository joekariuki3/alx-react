import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";

const App = () => {
  return (
    <>
      <Notifications />
      <div className="App">
        <Header />
        <main className="App-body">
          <Login />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default App;
