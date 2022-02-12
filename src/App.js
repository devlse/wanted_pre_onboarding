import React from 'react';
import '../src/styles/reset.css';
import Toggle from './component/Toggle';
import Modal from './component/Modal'
import Tab from './component/Tab';
import Tag from './component/Tag';
import AutoComplete from './component/AutoComplete';
import ClickToEdit from './component/ClickToEdit';


function App() {
  return (
    <>
      <Toggle />
      <Modal />
      <Tab />
      <Tag />
      <AutoComplete />
      <ClickToEdit />
    </>
  );
}

export default App;