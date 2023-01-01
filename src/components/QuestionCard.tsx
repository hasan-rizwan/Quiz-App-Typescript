import './styles/questionCard.css'
import { AnswerState } from '../App'

type Props = {
  routeHandler: (startButton: boolean, instructionCard: boolean, questionCard: boolean, scoreCard: boolean) => void;
  TOTAL_QUESTIONS: number;
  questionNum: number;
  question: string;
  answers: string[];
  userAnswers: AnswerState | undefined;
  userClicked: boolean;
  nextQuestion: () => void;
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const QuestionCard: React.FC<Props> = ({ question, answers, callback, userClicked, questionNum, TOTAL_QUESTIONS, nextQuestion, userAnswers, routeHandler }) => {
  return (
    <div className="card border-0" style={{ width: '50rem' }}>
      <div className="card-header border-0 fs-5 fw-bold w-100">
        Quiz Application
      </div>
      <div className="card-body">
        <div className="card-title fs-5 fw-semibold" style={{ maxHeight: '7rem', userSelect: 'none' }} dangerouslySetInnerHTML={{ __html: question }} />
        {answers.map(answer => (
          <button key={answer} disabled={userClicked} title={answer}
            className={`${userClicked && userAnswers?.correctAnswer === answer ? 'correct' : ''} card-text d-block w-100 p-2 my-2 border border-warning rounded`}
            style={{ backgroundColor: 'rgba(255, 193, 7, 0.13)', userSelect: 'none' }}
            dangerouslySetInnerHTML={{ __html: answer }} onClick={(e) => { callback(e); }} />
        ))}
      </div>
      <div className='card-footer d-flex align-items-center justify-content-between'>
        <p style={{ margin: '0' }}>{questionNum} to {TOTAL_QUESTIONS} Questions</p>
        <button type="button" className="btn btn-warning px-4 fw-semibold" disabled={!userClicked} onClick={() => { routeHandler(false, false, false, true); nextQuestion(); }}>Next</button>
      </div>
    </div>
  )
}

export default QuestionCard