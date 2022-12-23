import "bootstrap/dist/css/bootstrap.css"
import './app.css'
import React, { useState } from 'react';
import { fetchQuizQuestions } from "./components/Api";
import SyncLoader from "react-spinners/SyncLoader";
import InstructionCard from './components/InstructionCard';
import QuestionCard from './components/QuestionCard';
import ScoreCard from "./components/ScoreCard";

// Types Start

import { Difficulty, QuestionState } from './components/Api';

export type AnswerState = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}

type routeState = {
  startButton: boolean,
  instructionCard: boolean,
  questionCard: boolean,
  scoreCard: boolean
}

const TOTAL_QUESTIONS = 2;

// Types End


function App() {


  // States Start

  const [route, setRoute] = useState<routeState>({ startButton: true, instructionCard: false, questionCard: false, scoreCard: false });
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [gameOver, setGameOver] = useState(true);
  const [number, setNumber] = useState(0);
  const [score, setScore] = useState<number>(0);
  const [userClicked, setUserClicked] = useState<boolean>(false);
  const [userAnswers, setUserAnswers] = useState<AnswerState[]>([]);

  // States End


  // Routing Start

  const routeHandler = (startButton: boolean, instructionCard: boolean, questionCard: boolean, scoreCard: boolean) => {
    if (startButton) {
      setRoute({ startButton: true, instructionCard: false, questionCard: false, scoreCard: false });
    }
    else if (!loading && instructionCard) {
      setRoute({ startButton: false, instructionCard: true, questionCard: false, scoreCard: false });
    }
    else if (questionCard) {
      setRoute({ startButton: false, instructionCard: false, questionCard: true, scoreCard: false });
    }
    else if ((number + 1) === TOTAL_QUESTIONS && scoreCard) {
      setRoute({ startButton: false, instructionCard: false, questionCard: false, scoreCard: true });
      setGameOver(true);
    }
  }

  // Routing End


  const startTrivia = async () => {
    setLoading(true);
    const newQuestions = await fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY);
    setGameOver(false);
    setQuestions(newQuestions);
    setNumber(0);
    setScore(0);
    setUserAnswers([]);
    setLoading(false);
    // console.log('New Questions: ', newQuestions);
    // try {
    // } catch (error: any) {
    //   console.log("ERROR: ", error.msg);
    // }
  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      // Get user-answer
      const answer = e.currentTarget.title;
      // Check user-answer against correct answer
      const correct = questions[number].correct_answer === answer;
      console.log('correctttttt VARIABLE : ', correct);
      // Add score if answer is correct
      if (correct) {
        setScore(prev => prev + 1);
      };
      // Save user-answer in array
      const answerState = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer
      }
      setUserClicked(true);
      return setUserAnswers(prev => [...prev, answerState]);
    }
  }

  const nextQuestion = () => {
    // Logic to disable next button
    setUserClicked(false);
    // Logic to go to next question
    setNumber(number + 1);
  }

  return (
    <div className='d-flex justify-content-center align-items-center' style={{ backgroundColor: '#ffc107', height: '100vh' }}>
      {
        route.startButton &&
        <button type="button" className="btn btn-light w-25 fs-3 py-4" style={{ backgroundColor: '#fff', color: '#ffc107', boxShadow: '0px 0px 15px -6px #000000', fontWeight: '500' }} onClick={() => { startTrivia(); routeHandler(false, true, false, false); }}>Quiz Time</button>
      }
      {
        loading &&
        <div>
          <SyncLoader color={'#fff'} loading={loading} size={100} />
          <p className="text-center fs-1 my-5" style={{ userSelect: 'none' }}>Loading</p>
        </div>
      }
      {
        !loading && route.instructionCard &&
        <InstructionCard routeHandler={routeHandler} />
      }
      {
        route.questionCard &&
        <QuestionCard routeHandler={routeHandler} totalQuestions={TOTAL_QUESTIONS} questionNum={number + 1} question={questions[number].question} answers={questions[number].answers} userAnswers={userAnswers ? userAnswers[number] : undefined} userClicked={userClicked} callback={checkAnswer} nextQuestion={nextQuestion} />
      }
      {
        route.scoreCard &&
        <ScoreCard score={score} routeHandler={routeHandler} TOTAL_QUESTIONS={TOTAL_QUESTIONS} />
      }
    </div >
  );
}

export default App;
