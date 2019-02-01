import React, { Component } from "react";
import NavBar from "./components/navbar";
import "./App.css";
import Counters from "./components/counters";
import NumPad from "./components/numpad";
import Question from "./components/question";
import ResultBoard from "./components/resultBoard";

class App extends Component {
  state = {
    counters: [{ id: 1, value: 4 }, { id: 2, value: 2 }, { id: 3, value: 0 }],
    correctAnswers: 0,
    answered: 0,
    total: 10,
    selectedMultitable: 5,
    question: { questionText: "", answer: 0 }
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
      questionText: this.state.selectedMultitable + " * " + random,
      answer: this.state.selectedMultitable * random
    };

    this.setState({ question });
  };

  handleOkClicked = answer => {
    if (!this.state.question) {
      // Start the game!
      this.createNextQuestion();
    } else {
      // Check input against answer.
      // If correct, increase correctAnswers and show new question.
      // Otherwise, show an error
      if (answer == this.state.question.answer) {
        // Correct answer!
        var correctAnswers = this.state.correctAnswers++;
        var answered = this.state.answered++;
        this.setState({ correctAnswers, answered });
      }
    }
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onDelete={this.handleDelete}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
          />

          <ResultBoard
            correctAnswers={this.state.correctAnswers}
            total={this.state.total}
          />
          <Question questionText={this.state.question.questionText} />
          <NumPad okClicked={this.handleOkClicked} />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
