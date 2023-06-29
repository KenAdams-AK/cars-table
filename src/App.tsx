import Header from "./layout/Header";
import Main from "./layout/Main";
import Footer from "./layout/Footer";
import Table from "./components/Table";

function App() {
  return (
    <>
      <Header />
      <Main pageName="Home">
        <Table />
      </Main>
      <Footer />
    </>
  );
}

export default App;
