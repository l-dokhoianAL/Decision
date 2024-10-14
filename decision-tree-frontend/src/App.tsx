import React from 'react';
import DecisionTreeForm from './components/DecisionTreeForm';
import './App.css'

const App: React.FC = () => {
  return (
    <div className={'main'}>
      <h1>Decision Tree Executor</h1>
      <DecisionTreeForm />
    </div>
  );
};

export default App;
