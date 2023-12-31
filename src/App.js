import './App.css';
import Modal from './modal.js';
import { useState } from 'react';

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <div className="App">
        <button onClick={() => setIsModalVisible(!isModalVisible)}>Open Modal!</button>
        <div style={{position: 'relative'}}>
          <Modal isOpen={isModalVisible} setIsOpen={setIsModalVisible}>        
            <button style={{position: 'absolute'}} onClick={() => setIsModalVisible(false)}>X</button><br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Modal>
        </div>
    </div>
  );
}

export default App;
