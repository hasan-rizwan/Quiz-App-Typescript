type Props = {
  routeHandler: (startButton: boolean, instructionCard: boolean, questionCard: boolean, scoreCard: boolean) => void;
}


const InstructionCard: React.FC<Props> = ({ routeHandler }) => {
  return (
    <div className="card border-0">
      <div className="card-header fs-4 fw-semibold text-center">
        How it works?
      </div>
      <div className="card-body">
        <p className="card-text">1. You'll be given 15 seconds to answer each question</p>
        <p className="card-text">2. You can no longer change once you've selected an answer.</p>
        <p className="card-text">3. You can no longer select an answer once the time's up</p>
        <p className="card-text">4. You can't exit the Quiz once while playing.</p>
        <p className="card-text">5. You'll earn points based on your correct answers.</p>
      </div>
      <div className='card-footer d-flex justify-content-end'>
        <button type="button" className="btn btn-outline-danger px-4 mx-2 fw-semibold" onClick={() => routeHandler(true, false, false, false)}>Exit</button>
        <button type="button" className="btn btn-warning px-4 fw-semibold" onClick={() => routeHandler(false, false, true, false)}>Next</button>
      </div>
    </div>
  )
}

export default InstructionCard