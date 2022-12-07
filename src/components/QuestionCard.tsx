import React, { useState } from 'react'
import './styles/questionCard.css'

const QuestionCard = () => {
  const [color, setColor] = useState('yellow');
  const handleOnClick = (e: any) => {
    if (true) {
      setColor('red');
    }
  }
  return (
    <div>
      <div className="card border-0">
        <div className="card-header border-0 fs-4 fw-semibold">
          Quiz Application
        </div>
        <div className="progress" style={{ height: '4px', borderRadius: '0' }}>
          <div className="progress-bar bg-warning h-3" role="progressbar" aria-label="Warning example" style={{ width: "50%" }}></div>
        </div>
        <div className="card-body">
          <div className="card-title fs-5 fw-semibold">1. What does HTML stand for?</div>
          <p className="card-text p-3 border border-warning rounded" style={{ backgroundColor: `${color == 'red' ? 'rgba(255, 7, 7, 0.247)' : 'rgba(255, 193, 7, 0.13)'}` }} onClick={handleOnClick}>1. You'll be given 15 seconds to answer each question</p>
          <p className="card-text p-3 border border-warning rounded" style={{ backgroundColor: `${color == 'red' ? 'rgba(255, 7, 7, 0.247)' : 'rgba(255, 193, 7, 0.13)'}` }} onClick={handleOnClick}>2. You can no longer change once you've selected an answer.</p>
          <p className="card-text p-3 border border-warning rounded" style={{ backgroundColor: `${color == 'red' ? 'rgba(255, 7, 7, 0.247)' : 'rgba(255, 193, 7, 0.13)'}` }} onClick={handleOnClick}>3. You can no longer select an answer once the time's up</p>
          <p className="card-text p-3 border border-warning rounded" style={{ backgroundColor: `${color == 'red' ? 'rgba(255, 7, 7, 0.247)' : 'rgba(255, 193, 7, 0.13)'}` }} onClick={handleOnClick}>4. You can't exit the Quiz once you've started playing.</p>
          <p className="card-text p-3 border border-warning rounded" style={{ backgroundColor: `${color == 'red' ? 'rgba(255, 7, 7, 0.247)' : 'rgba(255, 193, 7, 0.13)'}` }} onClick={handleOnClick}>5. You'll earn points based on your correct answers.</p>
        </div>
        <div className='card-footer d-flex justify-content-end'>
          <button type="button" className="btn btn-outline-danger px-4 mx-2 fw-semibold">Exit</button>
          <button type="button" className="btn btn-warning px-4 fw-semibold">Next</button>
        </div>
      </div>
    </div>
  )
}

export default QuestionCard