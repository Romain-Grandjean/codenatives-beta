import React from "react";
import DataTest from "../dataTest.json";
import SolutionMulti from "./SolutionMulti";
import Popupwindow from "./Popupwindow";
import Timerglobal from "./Timerglobal";

export default class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      data: DataTest,
      score: 0,
      numberofquestions: 0,
      globaltime: 0,
      questionsettime: 20,
      display: "active",
      statustest: 0,
      status: 0,
      level: "A1",
    };
  }

  stop = () => {
    if (this.state.statustest === 0) {
      console.log("test not launched");
    } else {
      let allSolutions = document.querySelectorAll(".practice-solutions div");
      let finalscore = this.state.score;
      for (let i = 0; i < allSolutions.length; i++) {
        allSolutions[i].style.background = "white";
      }

      const finalLevel = (finalscore) => {
        return finalscore >= 20 && finalscore < 40
          ? "A2"
          : finalscore >= 40 && finalscore < 60
          ? "B1"
          : finalscore >= 60 && finalscore < 80
          ? "B2"
          : finalscore >= 80 && finalscore < 100
          ? "C1"
          : finalscore >= 100 && finalscore < 120
          ? "C2"
          : finalscore >= 120
          ? "Native"
          : "A1";
      };

      let resultFinalLevel = finalLevel(finalscore);

      this.setState({
        ...this.state,
        page: 0,
        display: "active",
        globaltime: 0,
        level: resultFinalLevel,
      });
    }
  };

  testSolution = (id) => {
    let newScore = this.state.score + 10;
    let newScoreError = this.state.score - 10;
    let actualPage = this.state.page;
    let newPage = this.state.page + 1;
    let allSolutions = document.querySelectorAll(".practice-solutions div");

    // Correct Answer
    if (id == this.state.data[this.state.page].answer) {
      window.setTimeout(() => {
        document.getElementById(id).style.background = "#7CF4BD";
      }, 300);

      window.setTimeout(() => {
        for (let i = 0; i < allSolutions.length; i++) {
          allSolutions[i].style.background = "white";
        }
        let newPage = this.state.page + 1;

        if (this.state.page === this.state.data.length - 1) {
          this.setState({ ...this.state, score: newScore });
          this.scoretest();
        } else {
          this.setState({
            ...this.state,
            score: newScore,
            page: newPage,
            status: 1,
          });
        }
      }, 1500);
    }

    // Wrong Answer
    if (id !== this.state.data[this.state.page].answer) {
      window.setTimeout(() => {
        document.getElementById(id).style.background = "#EE654B";
      }, 300);

      window.setTimeout(() => {
        document.getElementById(
          this.state.data[this.state.page].answer
        ).style.background = "#7CF4BD";
      }, 600);

      window.setTimeout(() => {
        for (let i = 0; i < allSolutions.length; i++) {
          allSolutions[i].style.background = "white";
        }

        if (this.state.page === this.state.data.length - 1) {
          this.setState({ ...this.state, score: newScoreError });
          this.scoretest();
        } else {
          this.setState({
            ...this.state,
            score: newScoreError,
            page: newPage,
            status: 1,
          });
        }
      }, 1500);
    }
  };
  scoretest = () => {

    let allSolutions = document.querySelectorAll(".practice-solutions div");
    let finalscore = this.state.score;

    let resultFinalLevel =
      finalscore >= 20 && finalscore < 40
        ? "A2"
        : finalscore >= 40 && finalscore < 60
        ? "B1"
        : finalscore >= 60 && finalscore < 80
        ? "B2"
        : finalscore >= 80 && finalscore < 100
        ? "C1"
        : finalscore >= 100 && finalscore < 120
        ? "C2"
        : finalscore >= 120
        ? "Native"
        : "A1";

    for (let i = 0; i < allSolutions.length; i++) {
      allSolutions[i].style.background = "white";
      this.setState({
        ...this.state,
        page: 0,
        display: "active",
        globaltime: 0,
        statustest: 1,
        level: resultFinalLevel,
      });
    }
  };

  // Launch Test
  launchtest = () => {
    let importTimeGlobal = <Timerglobal />;

    let allSolutions = document.querySelectorAll(".practice-solutions div");

    this.setState({
      ...this.state,
      page: 1,
      globaltime: importTimeGlobal,
      score: 0,
      display: "nonactive",
      statustest: 1,
    });

    this.myInterval = setInterval(() => {
      let allSolutions = document.querySelectorAll(".practice-solutions div");
      for (let i = 0; i < allSolutions.length; i++) {
        allSolutions[i].style.background = "white";

        let finalscore = this.state.score;
        let resultFinalLevel =
          finalscore >= 20 && finalscore < 40
            ? "A2"
            : finalscore >= 40 && finalscore < 60
            ? "B1"
            : finalscore >= 60 && finalscore < 80
            ? "B2"
            : finalscore >= 80 && finalscore < 100
            ? "C1"
            : finalscore >= 100 && finalscore < 120
            ? "C2"
            : finalscore >= 120
            ? "Native"
            : "A1";

        this.setState({
          ...this.state,
          page: 0,
          display: "active",
          globaltime: 0,
          statustest: 1,
          level: resultFinalLevel,
        });
      }
    }, 300000);
  };

  render() {
    let score = this.state.score;
    let questionNumber = this.state.data.length;
    let displayState = this.state.display;

    return (
      <>
        <Popupwindow
          launchtest={this.launchtest}
          globaltime={this.state.data.length * this.state.questionsettime}
          numberofquestions={this.state.data.length}
          questionsettime={this.state.questionsettime}
          page={this.state.page}
          display={this.state.display}
          globaltime={this.globaltime}
          score={this.state.score}
          statustest={this.state.statustest}
          level={this.state.level}
        />
        <div className="practice-page">
          <div className="question-practice">
            {this.state.data[this.state.page].question}
          </div>

          <div className="level-practice">
            <span id="title-level">Level</span>
            <span
              id="native"
              style={{ color: score >= 120 ? "black" : "#d8d8d882" }}
            >
              Native
            </span>
            <span
              id="C2"
              style={{
                color: score >= 100 && score < 120 ? "black" : "#d8d8d882",
              }}
            >
              C2
            </span>
            <span
              id="C1"
              style={{
                color: score >= 80 && score < 100 ? "black" : "#d8d8d882",
              }}
            >
              C1
            </span>
            <span
              id="B2"
              style={{
                color: score >= 60 && score < 80 ? "black" : "#d8d8d882",
              }}
            >
              B2
            </span>
            <span
              id="B1"
              style={{
                color: score >= 40 && score < 60 ? "black" : "#d8d8d882",
              }}
            >
              B1
            </span>
            <span
              id="A2"
              style={{
                color: score >= 20 && score < 40 ? "black" : "#d8d8d882",
              }}
            >
              A2
            </span>
            <span id="A1" style={{ color: score < 20 ? "black" : "#d8d8d882" }}>
              A1
            </span>
          </div>

          <SolutionMulti
            data={this.state.data}
            solution={this.solution}
            page={this.state.page}
            testSolution={this.testSolution}
          />

          <div className="score-test">
            <span id="title-time-score">Timing</span>
            <span id="global-time-score">{this.state.globaltime}</span>
            <span id="title-time-score">Score</span>
            <span id="points-score">{this.state.score}</span>
          </div>

          <div className="player-test">
            <span id="question-number-test">
              Question {this.state.page}/{this.state.data.length - 1}
            </span>
            <div className="stop-btn-test" onClick={() => this.stop()}>
              <img
                id="arrow-right-page"
                src={process.env.PUBLIC_URL + "/img/icon-stop.svg"}
                alt="arrow"
              />
              <span>Stop</span>
            </div>
          </div>
        </div>
      </>
    );
  }
}
