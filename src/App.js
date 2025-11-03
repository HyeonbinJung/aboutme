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
  // 1️⃣ 상태(state)로 수익률 관리
  const [currentReturn, setCurrentReturn] = useState(-8.4);

  // 2️⃣ 버튼 클릭 시 실행할 함수 정의
  const increase = () => setCurrentReturn(currentReturn + 0.5);
  const decrease = () => setCurrentReturn(currentReturn - 0.5);

  return (
    <div className="App">

      <header className="navbar">
        <h1>About me</h1>
        <nav className="nav">
          <a href="https://www.linkedin.com/in/hyeonbin-jung-a49b79274">Linkdin</a>
          <a href="https://github.com/HyeonbinJung">Github</a>
          <a href="#regression">Contact</a>
          <a href="#key">Portfolio</a>
        </nav>
      </header>

      <header className="header">
        <p className="hello">Hi, My name is</p>
        <p className="title">Hyeonbin Jung.</p>
        <p className="subtitle">I'm student at the University of Waterloo, major in Computer Science (specialization in 
          Digital Hardware) minor in  Combinatorics and Optimization, Economics. 
        </p>
        <p className="subtitle2"> I have various experience in finance field including
          private equity funds, accounting firm. 
        </p>
      </header>

      <main>
       <p className="investment">
        I invested <AnimatedNumber target={3000} /> won in 2023 ~
       </p>

        <div className="portfolio-box">
          <h2>Current Return</h2>
          <p className={currentReturn >= 0 ? "profit" : "loss"}>
            {currentReturn.toFixed(1)}%
          </p>

          <div>
            <button onClick={increase}>+0.5%</button>
            <button onClick={decrease}>-0.5%</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
