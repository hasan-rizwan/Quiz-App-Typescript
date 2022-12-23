import React, { useState } from 'react';
import './styles/questionCard.css'
import { AnswerState } from '../App'

type Props = {
  routeHandler: (startButton: boolean, instructionCard: boolean, questionCard: boolean, scoreCard: boolean) => void;
  totalQuestions: number;
  questionNum: number;
  question: string;
  answers: string[];
  userAnswers: AnswerState | undefined;
  userClicked: boolean;
  nextQuestion: () => void;
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const QuestionCard: React.FC<Props> = ({ question, answers, callback, userClicked, questionNum, totalQuestions, nextQuestion, userAnswers, routeHandler }) => {
  const [Color, setColor] = useState(false);
  const handleOnClick = (e: any, answer: any) => {
    // if (e.target.title === ) {
    //   console.log(answer);
    //   // console.log(userAnswers?.correctAnswer)
    //   // console.log('I"M IN!')
    //   // console.log('correct hy bhi')
    //   // console.log('Correct Answer: ', userAnswers?.correctAnswer)
    //   // console.log('User Answer: ', userAnswers?.answer)
    //   // console.log('User Answer: ', userAnswers)
    // }
  }
  // console.log('Condition For Correct: ', userClicked && userAnswers?.correct);
  // console.log('Condition For Incorrect: ', userClicked && !userAnswers?.correct);
  return (
    <div className="card border-0" style={{ width: '50rem' }}>
      <div className="card-header border-0 fs-5 fw-bold w-100">
        Quiz Application
      </div>
      <div className="progress" style={{ height: '4px', borderRadius: '0' }}>
        <div className="progress-bar bg-warning h-3" role="progressbar" aria-label="Warning example" style={{ width: "50%" }}></div>
      </div>
      <div className="card-body">
        <div className="card-title fs-5 fw-semibold" style={{ maxHeight: '7rem', userSelect: 'none' }} dangerouslySetInnerHTML={{ __html: question }} />
        {answers.map(answer => (
          <button key={answer} disabled={userClicked} title={answer}
            className={`${userClicked && userAnswers?.correctAnswer === answer ? 'correct' : userClicked && 'Omega' === answer ? 'incorrect' : ''} card-text d-block w-100 p-2 my-2 border border-warning rounded`}
            style={{ backgroundColor: 'rgba(255, 193, 7, 0.13)', userSelect: 'none' }}
            dangerouslySetInnerHTML={{ __html: answer }} onClick={(e) => { callback(e); handleOnClick(e, answer); }} />
        ))}
      </div>
      <div className='card-footer d-flex align-items-center justify-content-between'>
        <p style={{ margin: '0' }}>{questionNum} to {totalQuestions} Questions</p>
        <button type="button" className="btn btn-warning px-4 fw-semibold" disabled={!userClicked} onClick={() => { routeHandler(false, false, false, true); nextQuestion(); }}>Next</button>
      </div>
    </div>
  )
}

export default QuestionCard