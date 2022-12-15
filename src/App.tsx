import React from 'react';
import './app.css'
import InstructionCard from './components/InstructionCard';
import QuestionCard from './components/QuestionCard';

function App() {
  const startTrivia = async () => {

  }
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

  }
  const nextQuestion = () => {

  }
  return (
    <div className='d-flex justify-content-center align-items-center' style={{ backgroundColor: '#ffc107', height: '100vh' }}>
      {/* <button type="button" className="btn btn-light w-25 fs-3 py-4" style={{color: '#ffc107', boxShadow: '0px 0px 15px -6px #000000', fontWeight: '500'}}>Quiz Time</button> */}
      {/* <InstructionCard /> */}
      <QuestionCard />
      {/* ssh key testing */}
    </div>
  );
}

export default App;
