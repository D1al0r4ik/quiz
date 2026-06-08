import { useEffect, useState, useRef } from 'react'
import './App.css'
import questions from './data/questions'
import QuesGenerator from './questionGenerator'
import ProgressBar from './ProgressBar'

function App() {
  const [count, setCount] = useState(0)
  const startTime = useRef(Date.now())
  const [step, setStep] = useState(0)
  const [correctAnswers, setCorrectAnswer] = useState(0)
  const [timeSpend, settimeSpend] = useState(0)

    useEffect(() => {
      if (step == questions.length) {
        document.title = "Конец"
      } else {
          document.title = "Вопрос " + (step + 1) + " из " + questions.length
      }
    }, [step])


  function check(options) {
    if (options == questions[step].correct) {
      setCorrectAnswer(correctAnswers + 1)
      setStep(step + 1)
    } else {
      setStep(step + 1)
    }
    const nextStep = step + 1
    if (nextStep == questions.length) {
      const endTime = Date.now()
      const date = (endTime - startTime.current) / 1000
      settimeSpend(Math.round(date))
    }
  }

  if (step == questions.length) {
      return (
        <>
        <h1>Результат: {correctAnswers} из {questions.length}</h1>
        <h1>Затраченное время: {timeSpend} сек.</h1>
        </>
      )
    }

  return (
    <div className="quizCard">


      <QuesGenerator
      title = {
        questions[step].title
      }

      options = {
        questions[step].options
      }
      OnCorrectOption={check}
      />

      <ProgressBar
      currentQuestion={
        step
      } 
      totalQuestion={
        questions.length
      }
      />
    </div>
  )
}

export default App
