import { Crown } from "./styles/index";

type Props = {
  routeHandler: (startButton: boolean, instructionCard: boolean, questionCard: boolean, scoreCard: boolean) => void;
  TOTAL_QUESTIONS: number;
  score: number;
}


const ScoreCard: React.FC<Props> = ({ routeHandler, TOTAL_QUESTIONS, score }) => {
  return (
    <div className="card border-0" style={{ minWidth: '450px' }}>
      <div className="d-flex flex-column justify-content-center align-items-center py-4">
        <Crown />
        <p className="fs-1">Score</p>
        <p className="fs-4">You got {score} out of {TOTAL_QUESTIONS}</p>
        <div className="my-3">
          <button type="button" className="btn btn-warning fw-semibold p-3" onClick={() => routeHandler(true, false, false, false)}>Play again</button>
        </div>
      </div>
    </div>
  )
}

export default ScoreCard