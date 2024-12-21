import { useEffect, useState } from "react"

import useSound from "use-sound";
import play from "../assets/countdown-from-10-105775.mp3"
import correct from "../assets/correct-83487.mp3"
import wrong from "../assets/incorrect-buzzer-sound-147336.mp3"

export default function Trivia({data,
    setStop,
    questionNumber,
    setQuestionNumber}) {
        const[question, setQuestion]=useState(null);
        const[seletedAnswer, setselectedAnswer]=useState(null);
        const[className, setclassName]=useState("answer");

    const[letsPlay] = useSound(play)
    const[correctAnswer] = useSound(correct)
    const[wrongAnswer] = useSound(wrong)

   // useEffect(()=>{
   // letsPlay();
    //},[letsPlay]);

        useEffect(()=>{
       setQuestion(data[questionNumber -1]);
        },[data, questionNumber]);

        const delay = (duration, callback)=>{
          setTimeout(()=>{
            callback()
          },duration);
        };
   const handleClick = (a) =>{
     setselectedAnswer(a);
     setclassName("answer active");
     delay(3000,()=>
    setclassName(a.correct ?  "answer correct" : "answer wrong")
    );
    delay(5000,()=>
    {
        if(a.correct){
            correctAnswer();
            delay(1000,()=>{
                setQuestionNumber(prev=>prev +1);
                setselectedAnswer(null);
            });
        }
        else{
            wrongAnswer();
            delay(1000,()=>{
                setStop(true);
            });
        }
       });
     };
  return (
    <div className="trivia">
      <div className="question">{question?.question}</div>
      <div className="answers"></div>
      {question?.answers.map(a=> (
      <div
      className={seletedAnswer === a ? className : "answer"}
       onClick={()=>handleClick(a)}>
        {a.text}</div>
      ))}
    

    </div>
  )
}

