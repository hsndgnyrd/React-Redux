import React from 'react';
import Dashboard from './Dashboard';
import Navi from '../navi/Navi'
import { Container } from 'reactstrap';

function App() {
  return (
    <Container>
      <Navi />
      <Dashboard />
    </Container>
  );
}

export default App;
