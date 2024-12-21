
import { useEffect, useMemo, useState } from "react";
import "./app.css";
import Trivia from "./components/Trivia";
import Timer from "./components/Timer";
import Start from "./components/Start";
function App() {
  const[username, setUsername] = useState(null);
  const[questionNumber, setQuestionNumber]=useState(1);

  const[stop, setStop]= useState(false);
  const[earned, setEarned]= useState("$ 0");

  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        { text: "Phone", correct: false },
        { text: "Watches", correct: true },
        { text: "Food", correct: false },
        { text: "Cosmetics", correct: false },
      ],
    },
    {
      id: 2,
      question: "What is the capital city of Australia?",
      answers: [
        { text: "Sydney", correct: false },
        { text: "Melbourne", correct: false },
        { text: "Canberra", correct: true },
        { text: "Perth", correct: false },
      ],
    },
    {
      id: 3,
      question: "Which planet is known as the Red Planet?",
      answers: [
        { text: "Earth", correct: false },
        { text: "Venus", correct: false },
        { text: "Mars", correct: true },
        { text: "Jupiter", correct: false },
      ],
    },
    {
      id: 4,
      question: "What is the largest mammal in the world?",
      answers: [
        { text: "Elephant", correct: false },
        { text: "Blue Whale", correct: true },
        { text: "Giraffe", correct: false },
        { text: "Great White Shark", correct: false },
      ],
    },
    {
      id: 5,
      question: "Which programming language is primarily used for Android app development?",
      answers: [
        { text: "Java", correct: true },
        { text: "Python", correct: false },
        { text: "Ruby", correct: false },
        { text: "C++", correct: false },
      ],
    },
    {
      id: 6,
      question: "What is the chemical symbol for gold?",
      answers: [
        { text: "Ag", correct: false },
        { text: "Au", correct: true },
        { text: "Pb", correct: false },
        { text: "Fe", correct: false },
      ],
    },
    {
      id: 7,
      question: "What is the capital of Japan?",
      answers: [
        { text: "Beijing", correct: false },
        { text: "Seoul", correct: false },
        { text: "Tokyo", correct: true },
        { text: "Bangkok", correct: false },
      ],
    },
    {
      id: 8,
      question: "Who wrote 'Hamlet'?",
      answers: [
        { text: "Mark Twain", correct: false },
        { text: "William Shakespeare", correct: true },
        { text: "Charles Dickens", correct: false },
        { text: "Leo Tolstoy", correct: false },
      ],
    },
    {
      id: 9,
      question: "Which country is known for the Great Wall?",
      answers: [
        { text: "India", correct: false },
        { text: "China", correct: true },
        { text: "Egypt", correct: false },
        { text: "Mexico", correct: false },
      ],
    },
    {
      id: 10,
      question: "What is the smallest prime number?",
      answers: [
        { text: "0", correct: false },
        { text: "1", correct: false },
        { text: "2", correct: true },
        { text: "3", correct: false },
      ],
    },
  ];
  


  const moneyPyramid = useMemo(()=>

  [
    {id:1, amount:"$100"},
    {id:2, amount:"$200"},
    {id:3, amount:"$300"},
    {id:4, amount:"$500"},
    {id:5, amount:"$1000"},
    {id:6, amount:"$2000"},
    {id:7, amount:"$4000"},
    {id:8, amount:"$8000"},
    {id:9, amount:"$16000"},
    {id:10, amount:"$32000"},
    {id:11, amount:"$250000"},
    {id:12, amount:"$125000"},
    {id:13, amount:"$250000"},
    {id:14, amount:"$500000"},
    {id:15, amount:"$1000000"},

  ].reverse(),
[]);

  useEffect(()=>{
questionNumber >1 && setEarned(moneyPyramid.find(m=> m.id === questionNumber-1).amount);
  },[ moneyPyramid, questionNumber])
  return(
 <div className="app">
  {username ? (
    <>
    <div className="main">
  {stop ? (
   <h1 className="endText">You earned:{earned}</h1>
   ) : (
    <>
  <div className="top">
    <div className="timer">
      <Timer setStop={setStop} questionNumber={questionNumber}/>
    </div>
  </div>
  <div className="bottom">
    <Trivia data={data} 
    setStop={setStop}
     questionNumber={questionNumber}
      setQuestionNumber={setQuestionNumber}/>
  </div>
  </>
        )}
</div>
<div className="pyramid">
  <ul className="moneyList">
    {moneyPyramid.map(m=>(
      <li className={questionNumber === m.id ? "moneyListItem active" : "moneyListItem"}>
      <span className="moneyListItemNumber">{m.id}</span>
      <span className="moneyListItemAmount">{m.amount}</span>
    </li>
    ))}
    
  </ul>
  </div>
    </>
  ) : ( <Start  setUsername={setUsername}/>)}


 </div>
  
  );
         
  
}

export default App;
