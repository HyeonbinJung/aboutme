import React, { useState } from 'react';
import { useEffect } from "react";
import './App.css';



function AnimatedNumber({ target = 3000, duration = 2000 }) {
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    let startTime = null;

    function animate(currentTime) {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1); // 0~1
      const current = Math.floor(progress * target);
      setAmount(current);
      if (progress < 1) requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
  }, [target, duration]);

  return <span className="number">{amount.toLocaleString()}</span>;
}

function App() {
  // 상태(state)로 수익률 관리
  const [currentReturn, setCurrentReturn] = useState(-8.4);

  // 버튼 클릭 시 실행할 함수 정의
  const increase = () => setCurrentReturn(currentReturn + 0.5);
  const decrease = () => setCurrentReturn(currentReturn - 0.5);
    const [animate, setAnimate] = useState(false);


    
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
  }, 50);

  return () => clearTimeout(timer);
}, []);

  return (
    <div className="App">

      <header className="navbar">
        <h1>Hyeonbin Jung</h1>
        <nav className="nav">
          <a href="https://www.linkedin.com/in/hyeonbin-jung-a49b79274">Linkdin</a>
          <a href="https://github.com/HyeonbinJung">Github</a>
          <a href="#regression">Contact</a>
          <a href="#key">Portfolio</a>
        </nav>
      </header>

      <header className="header">
        <p className={`hello ${animate ? "fly-in" : ""}`}>Hi, My name is</p>
        <p className={`title ${animate ? "fly-in" : ""}`}>Hyeonbin Jung.</p>
        <p className={`subtitle ${animate ? "fly-in" : ""}`}>I'm student at the University of Waterloo, major in Computer Science 
        </p>
        <p className={`subtitle2 ${animate ? "fly-in" : ""}`}> I have various experience in finance field including
          private equity funds, accounting firm. 
        </p>
      </header>

      <main>
        <p className="education">
          Education
        </p>
        <p className="education1">
          University of Waterloo '27
        </p>
        <p className="education2">
          Major in Computer Science (Specialization in Ai) | Minor in Combinatorics and Optimization
        </p>
        <p className="education2">
          Algebra for Honour Mathematics, Calculus 1 for Honour Mathematics, Introduction to Microeconomics, Understanding the Business Environment, Designing Functional Programs (GPA: 3.58/4.0)
        </p>

        <p className="employment1">
          Employment
        </p>
        <a className="employment2" href="http://yuantainvest.com/en/">Yuanta Investment</a>
        <span className="date1"> [2024-11 ~ 2025-01]</span>

        <p className="employment3">
          Growth Capital Intern
        </p>

        <a className="employment2" href="https://www.deloitte.com/kr/ko.html">Deloitte Korea</a>
        <span className="date1"> [2023-01 ~ 2023-02]</span>

        <p className="employment3">
          Financial Advisory Deal General Intern
        </p>

        <a className="employment2" href="https://paratusinvestment.com">Paratus Investment</a>
        <span className="date1"> [2022-07 ~ 2022-08]</span>

        <p className="employment3">
          Private Equity Research Assistant
        </p>
        <p className="employment1">
          SELECTED CONFERENCE ENGAGEMENTS
        </p>
        <p className="education1">
          H. Jung, Y. Min, & K. Ireh (2022). Korea inheritance tax story. Presentation at Fact-based 
        </p>
        <p className="education1">
          Economic Network, Seoul, South Korea. <a className="link" href="https://www.deloitte.com/kr/ko.html">(link)</a>
        </p>
        <p className="education1">
          H. Jung, Y. Min, & K. Ireh (2022). Accuracy of a Backtesting-Based Macro Analysis Model.
        </p>
        <p className="education1">
          Presentation at Fact-based Economic Network, Seoul, South Korea. 
        </p>
        <p className="education1">
          H. Jung. (2022) Invited Investment Bank Analyst. Selected awardee at Financial Academy, 
        </p>
        <p className="education1">
          Seoul, South Korea. <a className="link" href="https://www.deloitte.com/kr/ko.html">(link)</a>
        </p>
        <p className="employment1">
          ONLINE PUBLICATION(S) & WRITINGS 
        </p>
        <p className="education1">
          Macro Economic Blog (Medium) : <a className="link" href="https://www.deloitte.com/kr/ko.html">@harrykakakaka</a>
        </p>
        <p className="education2">
          Published +10 in-depth economic articles simplifying complex concepts or social 
        </p>
        <p className="education2">
          economic issues such as Monetary Economics, International Policy Studies, Advanced 
        </p>
        <p className="education2">
          Macroeconomics (Phillips Curve and business cycles), Behavioral Economics
        </p>
        <p className="employment1">
          MISCELLANEOUS SKILLS 
        </p>
      </main>
    </div>
  );
}

export default App;
