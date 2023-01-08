import BookList from "./components/BookList";
import Navbar from "./components/Navbar";
import { BookContextProvider } from "./context/BookContext";
import NewBookForm from '../src/components/NewBookForm';

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar/>
        <BookList />
        <NewBookForm />
      </BookContextProvider>

    </div>
  );
}

export default App;
