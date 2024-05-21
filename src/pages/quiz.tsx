
import React, { useState } from 'react';

const QuizScreen = () => {
  const questions = [
    {
      question: 'HTML Stands For _________',
      options: [
        'Anchor Text Language',
        'HTML',
        'Case Cading Style Sheet',
        'HyperText markup language',
      ],
      correctAns: 'HyperText markup language',
    },
    {
      question: 'CSS Stands For _________',
      options: [
        'Casecading Style Sheet',
        'Java',
        'Ram',
        'Hypertext markup language',
      ],
      correctAns: 'Casecading Style Sheet',
    },
    {
      question: 'JS Stands For _________',
      options: ['Java Style', 'Java Script', 'Script', 'Script Src'],
      correctAns: 'Java Script',
    },
    {
      question: 'DOM Stands For _________',
      options: ['Document Object Model', 'html', 'Css', 'Java'],
      correctAns: 'Document Object Model',
    },
    {
      question: 'RAM Stands For _________',
      options: ['Read Only Memory', 'Dom', 'Random Access Memory', 'For Pc'],
      correctAns: 'Random Access Memory',
    },
    {
      question: 'ROM Stands For _________',
      options: [
        'Hyper Text Markup Language',
        'html',
        'HTml',
        'Read Only Memory',
      ],
      correctAns: 'Read Only Memory',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswerClick = (selectedOption:any) => {
    if (selectedOption === questions[currentIndex].correctAns) {
      setScore(score + 1);
    }

    const nextIndex = currentIndex + 1;
    if (nextIndex < questions.length) {
      setCurrentIndex(nextIndex);
    } else {
      setShowResult(true);
    }
  };

  return (
    <>
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Quiz Game</h1>
        {!showResult ? (
          <>
            <h2>
              {currentIndex + 1} / {questions.length}
            </h2>
            <h1 className="text-2xl font-bold mb-4">
              {questions[currentIndex].question}
            </h1>

            <div className="row">
              {questions[currentIndex].options.map((option, index) => (
                <div key={index} className='col-md-6 p-2'>
                  <button
                    onClick={() => handleAnswerClick(option)}
                    className='btn btn-primary'>
                    {option}
                  </button>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div>
            <h2>Your Score: {score} / {questions.length}</h2>
          </div>
        )}
      </div>
    </>
  );
};

export default QuizScreen;
