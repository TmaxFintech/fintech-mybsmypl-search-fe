import styles from './navbar.module.css';
import React, { useState } from 'react';
// import { Nav } from 'react-bootstrap';

const Navbar = (props) => {
  let [tab, setTab] = useState(0);
  return (
    <>
      {/* <Nav justify variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTab(0);
            }}
            eventKey="link0"
          >
            버튼0
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTab(1);
            }}
            eventKey="link1"
          >
            버튼1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTab(2);
            }}
            eventKey="link2"
          >
            버튼2
          </Nav.Link>
        </Nav.Item>
      </Nav> */}
      <div className={styles.navbar}>
        <div
          className={styles.item}
          onClick={() => {
            setTab(0);
          }}
        >
          원화 마켓
        </div>
        <div
          className={styles.item}
          onClick={() => {
            setTab(1);
          }}
        >
          BTC 마켓
        </div>
        <div
          className={styles.item}
          onClick={() => {
            setTab(2);
          }}
        >
          보유자산
        </div>
        <div
          className={styles.item}
          onClick={() => {
            setTab(3);
          }}
        >
          즐겨찾기
        </div>
      </div>
      <TabContent tab={tab} />
    </>
  );
};

function TabContent({ tab }) {
  // if (tab == 0) {
  //   return <div>내용0</div>;
  // } else if (tab == 1) {
  //   return <div>내용1</div>;
  // } else if (tab == 2) {
  //   return <div>내용2</div>;
  // }
  return [
    <div>원화 마켓 리스트</div>,
    <div>BTC 마켓 리스트</div>,
    <div>보유자산 리스트</div>,
    <div>즐겨찾기 리스트</div>,
  ][tab];
}

export default Navbar;
