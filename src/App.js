import React, { useState } from 'react';
import Comments from './Components/Comments';
import MainPage from './Components/MainPage';
function App() {
  const [selectedUser, setSelectedUser] = useState('Jain Smith');

  const handleUserChange = (user) => {
    setSelectedUser(user);
  };
  return (
    <>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <MainPage onUserChange={handleUserChange}/>
        </div>

        <div>
            <Comments selectedUser={selectedUser} />
        </div>
    </>
  );
}

export default App;
