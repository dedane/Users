
import './App.css';
import UserInput from './Components/UserInput/userInput';
import UserList from './Components/UserList/userList';
import Box from '@mui/material/Box';

function App() {
  return (
    <div className="App">
      <h1>Users</h1>
      <UserInput />
      <Box sx={{mt: 10}}>
      <UserList />
      </Box>
      
    </div>
  );
}

export default App;
