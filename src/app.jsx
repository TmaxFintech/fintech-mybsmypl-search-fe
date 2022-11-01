import styles from './app.module.css';
import SearchHeader from './components/search_header/search_header';
import Navbar from './components/navbar/navbar.jsx';

function App() {
  return (
    <div className={styles.app}>
      <SearchHeader />
      <Navbar />
    </div>
  );
}

export default App;
