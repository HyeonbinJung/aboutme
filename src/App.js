
import "./App.css";
import React from "react";
import profile from './images/profile.jpg';


function App() {

  return (
    <div className="App">
      <header className="navbar">
        <h1>Hyeonbin Jung</h1>
        <nav className="nav">
          <a
            href="https://www.linkedin.com/in/hyeonbin-jung-a49b79274"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/HyeonbinJung"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
          <a href="#contact">Contact</a>
          <a href="#portfolio">Portfolio</a>
        </nav>
      </header>
      
      <header className="hero">
        <p className="text-main">Hi, my name is</p>
        <img src={profile} alt="profile" className="profile-img" />
        <p className="title">Hyeonbin Jung.</p>
        <p className="text-sub">
          I am a student at the University of Waterloo, majoring in Computer
          Science.
        </p>
        <p className="text-sub">
          I have experience in the finance field, including private equity funds
          and an accounting firm.
        </p>
      </header>

      <main>
        <section className="education-section">
          <p className="section-title">Education</p>

          <p className="text-main indent-1">University of Waterloo ’27</p>

          <p className="text-sub indent-2">
            Computer Science | Minor in Combinatorics and Optimization,
            Economics (GPA: 3.58/4.0)
          </p>
          <p className="text-main indent-1">Seoul National University</p>

          <p className="text-sub indent-2">
            Computer Science | Exchange Student (3A Term)
          </p>

        </section>

        <section>
          <p className="section-title mt-large">Employment</p>

          <p className="text-main indent-1">
            <a
              href="http://yuantainvest.com/en/"
              target="_blank"
              rel="noreferrer"
            >
              Yuanta Investment
            </a>
            <span className="date"> [2024-11 ~ 2025-01]</span>
          </p>
          <p className="text-sub indent-2">Growth Capital Intern</p>

          <p className="text-main indent-1">
            <a
              href="https://www.deloitte.com/kr/ko.html"
              target="_blank"
              rel="noreferrer"
            >
              Deloitte Korea
            </a>
            <span className="date"> [2023-01 ~ 2023-02]</span>
          </p>
          <p className="text-sub indent-2">
            Financial Advisory Deal General Intern
          </p>

          <p className="text-main indent-1">
            <a
              href="https://paratusinvestment.com"
              target="_blank"
              rel="noreferrer"
            >
              Paratus Investment
            </a>
            <span className="date"> [2022-07 ~ 2022-08]</span>
          </p>
          <p className="text-sub indent-2">
            Private Equity Research Assistant
          </p>
        </section>

        <section>
          <p className="section-title mt-large">
            Selected Conference Engagements
          </p>

          <p className="text-sub">
            H. Jung, Y. Min, &amp; K. Ireh (2022). Korea inheritance tax story.
            Presentation at Fact-based Economic Network, Seoul, South Korea.
            <a
              className="link"
              href="https://fenkorea.kr/bbs/bbsDetail.php?cid=events&pn=4&up=2&idx=8933&ckattempt=2"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              (link)
            </a>
          </p>

          <p className="text-sub">
            H. Jung, Y. Min, &amp; K. Ireh (2022). Accuracy of a
            Backtesting-Based Macro Analysis Model. Presentation at Fact-based Economic Network, Seoul, South Korea.
          </p>
          <p className="text-sub">
            H. Jung. (2022) Invited Investment Bank Analyst. Selected awardee at Financial Academy, Seoul, South Korea.
            <a
              className="link"
              href="https://www.facademy.co.kr/notice/118?sst=wr_hit&sod=desc&sop=and&page=2"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              (link)
            </a>
          </p>
        </section>

        <section>
          <p className="section-title mt-large">
            Online Publications &amp; Writings
          </p>

          <p className="text-main indent-1">
            Macro Economic Blog (Medium):
            <a
              className="link"
              href="https://www.deloitte.com/kr/ko.html"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              @harrykakakaka
            </a>
          </p>

          <p className="text-sub indent-2">
            Published 10+ in-depth economic articles simplifying complex
            concepts and social economic issues. (Monetary Economics, International Policy Studies,
            Macroeconomics, and Behavioral Economics)
          </p>

        </section>

        <section id="portfolio">
          <p className="section-title mt-large">Miscellaneous Skills</p>
          <p className="text-main indent-1">
            Computer Science
          </p>
          <p className="text-sub indent-2">
            Python (Pandas, Numpy, xlwings, scikit-learn, matplotlib, psycopg2, yfinance), C, C++, Linux, SQL, Docker, K8s
          </p>
          <p className="text-main indent-1">
            Finance & Others
          </p>
          <p className="text-sub indent-2">
            DCF Valuation, Peer Multiple Valuation, Factsheet, Excel, English (OPIc AL, IELTS 8+), Korean (Native)
          </p>
        </section>

        <section id="contact">
          <p className="section-title mt-large">Contact</p>
          <p className="text-sub indent-1">
            h9jung@uwaterloo.ca
          </p>
        </section>
      </main>
    </div>
  );
}

export default App;