import styles from './search_header.module.css';
import React from 'react';

const SearchHeader = (props) => {
  return (
    <header className={styles.header}>
      <input className={styles.input} type="search" placeholder="Search.." />
      <button className={styles.button} type="submit">
        <img
          className={styles.buttonImg}
          src="/images/search_icon.png"
          alt="search"
        />
      </button>
    </header>
  );
};

export default SearchHeader;
