import React, { Component } from "react";
import NavBar from "./components/navbar";
import "./App.css";
import Counters from "./components/counters";
import NumPad from "./components/numpad";
import Question from "./components/question";
import ResultBoard from "./components/resultBoard";
import Timer from "./components/timer";
import StartButton from "./components/startButton";
import Image from "./components/image";

class App extends Component {
  state = {
    counters: [{ id: 1, value: 4 }, { id: 2, value: 2 }, { id: 3, value: 0 }],
    correctAnswers: 0,
    answered: 0,
    total: 3,
    selectedMultitable: 5,
    question: { questionText: "", answer: 0 },
    resultText: "",
    resultTextClasses: "",
    answerField: "",
    timerText: "",
    startTime: "",
    timerHandle: "",
    resultTime: 0,
    bestResultTime: 0,
    bestResultTimeText: "",
    startButtonText: "Starta",
    isGameStarted: false,

    // image
    imageFullPath: "",
    imageShouldHide: false
  };

  handleDelete = counterId => {
    console.log("delete" + counterId);
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(x => {
      x.value = 0;
      return;
    });
    this.setState({ counters });
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    var index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
    // console.log(this.state.counters[0]);
    // console.log(counter);
    // console.log(counters[0]);
  };

  createNextQuestion = () => {
    var random = Math.floor(Math.random() * 10 + 1);
    var question = {
      questionText: this.state.selectedMultitable + " * " + random + " = ",
      answer: this.state.selectedMultitable * random
    };

    this.setState({ question });
  };

  handleClearClicked = () => {
    this.setState({ answerField: "" });
  };

  handleOkClicked = answer => {
    if (this.state.isGameStarted == false) {
      return;
    }

    // Check input against answer.
    // If correct, increase correctAnswers and show new question.
    // Otherwise, show an error
    if (answer == this.state.question.answer) {
      this.setState({
        correctAnswers: ++this.state.correctAnswers,
        answered: ++this.state.answered,
        resultText: "Rätt!",
        resultTextClasses: "bg-success"
      });

      if (this.state.correctAnswers === this.state.total) {
        this.endGame();
      } else {
        this.createNextQuestion();
      }
    } else {
      // Wrong answer
      this.setState({
        resultText: "Fel!",
        resultTextClasses: "bg-danger"
      });
    }

    this.setState({ answerField: "" });
  };

  endGame = () => {
    this.stopGame();
    var imageFullPath = require("./images/Inez_staende_mob.JPG");
    this.setState({
      resultText: "Klar! Tid: " + this.getTimerText(this.state.resultTime),
      imageFullPath: imageFullPath,
      imageShouldHide: false
    });
  };

  handleStartButtonClicked = () => {
    // Toggle the button
    if (this.state.isGameStarted) {
      // Stop the game and the timer
      this.stopGame();
    } else {
      // Start the game and the timer
      this.startGame();
    }
  };

  startGame = () => {
    this.createNextQuestion();
    this.setState({
      correctAnswers: 0,
      startButtonText: "Stop",
      resultText: "",
      isGameStarted: true,
      startTime: new Date(),
      timerHandler: setInterval(this.tick, 33)
    });
  };

  stopGame = () => {
    clearInterval(this.state.timerHandler);
    this.setResultTime();
    if (
      this.state.resultTime < this.state.bestResultTime ||
      this.state.bestResultTime === 0
    ) {
      // New record!
      this.setState({
        bestResultTime: this.state.resultTime,
        bestResultTimeText: this.getTimerText(this.state.resultTime)
      });
    }

    var question = {
      questionText: "",
      answer: -1
    };

    this.setState({
      startButtonText: "Start",
      isGameStarted: false,
      question: question
    });
  };

  tick = () => {
    if (this.state.isGameStarted == true) this.setResultTime();
  };

  setResultTime = () => {
    var date1 = this.state.startTime; //new Date("7/Nov/2012 20:30:00");
    var date2 = new Date();
    var milliseconds = date2.getTime() - date1.getTime();

    this.setState({
      resultTime: milliseconds,
      timerText: this.getTimerText(milliseconds)
    });

    console.log(
      "ResultTime:" + milliseconds + " = " + this.getTimerText(milliseconds)
    );
  };

  getTimerText = milliseconds => {
    var days = Math.floor(milliseconds / (1000 * 60 * 60 * 24));
    milliseconds -= days * (1000 * 60 * 60 * 24);

    var hours = Math.floor(milliseconds / (1000 * 60 * 60));
    milliseconds -= hours * (1000 * 60 * 60);

    var mins = Math.floor(milliseconds / (1000 * 60));
    milliseconds -= mins * (1000 * 60);

    var seconds = Math.floor(milliseconds / 1000);
    milliseconds -= seconds * 1000;

    return mins + " min " + seconds + "," + milliseconds + " sek";
  };

  numkeyOnClickHandler = numkey => {
    if (this.state.isGameStarted == false) return;

    var answerField = "";
    if (numkey < 10) {
      answerField = this.state.answerField + numkey;
    }
    this.setState({ answerField, resultText: "" });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar bestResultTimeText={this.state.bestResultTimeText} />
        <main className="container">
          <div>
            <StartButton
              buttonText={this.state.startButtonText}
              onClick={this.handleStartButtonClicked}
              timerText={this.state.timerText}
            />

            <Timer>timer={this.state.timer}</Timer>

            <ResultBoard
              resultTextClasses={this.state.resultTextClasses}
              correctAnswers={this.state.correctAnswers}
              total={this.state.total}
              resultText={this.state.resultText}
            />
            <Question
              questionText={this.state.question.questionText}
              answerField={this.state.answerField}
            />
            <NumPad
              okClicked={this.handleOkClicked}
              clearClicked={this.handleClearClicked}
              numkeyClicked={this.numkeyOnClickHandler}
              answerField={this.state.answerField}
            />
            <Image
              clearClicked={this.state.imageShouldHide}
              imageFullPath={this.state.imageFullPath}
            />
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
