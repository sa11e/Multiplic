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
import SelectAnswerButtons from "./components/selectAnswerButtons";
import SettingsPanel from "./components/settingsPanel";
import WebCam from "react-webcam";
// import SuccessModal from "./components/successModal";

class App extends Component {
  state = {
    correctAnswers: 0,
    answered: 0,
    totalQuestions: window.location.href.includes("localhost") ? 3 : 10,
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

    //settings
    settingsShouldHide: true,

    // image
    // imageFullPath: "",
    imageShouldHide: true,
    webcamShouldHide: false,

    // Answer mode
    answerMode: "",
    choices: [],
    hideNumPad: true,
    hideSelectButtons: true,

    modalShow: false,

    // Captured image
    caputuredImage: ""
  };

  modalClose = () => this.setState({ modalShow: false });

  // importAll = r => {
  //   var k = r.keys();
  //   let images = {};
  //   r.keys().map((item, index) => {
  //     images[item.replace("./", "")] = r(item);
  //   });
  //   return images;
  // };

  // getRandomImage = () => {
  //   // Get all images in the images folder
  //   var images = require
  //     .context("./images", false, /\.(png|jpe?g|svg)$/)
  //     .keys();
  //   var length = images.length;

  //   // Get random number between 0 and number of images
  //   var randomIndex = Math.floor(Math.random() * length);
  //   var randomImage = images[randomIndex].replace("./", "");
  //   var imageFullPath = require("./images/" + randomImage);
  //   return imageFullPath;
  // };

  updateSelectedMultiTable = newTable => {
    this.setState({ selectedMultitable: newTable });
  };

  createNextQuestion = () => {
    var random = Math.floor(Math.random() * 10 + 1);
    var question = {
      questionText: this.state.selectedMultitable + " * " + random + " = ",
      answer: this.state.selectedMultitable * random
    };

    this.setAnswerMode(this.answerMode);
    this.setState({ question, choices: this.getFixedAnswers(question.answer) });
  };

  getFixedAnswers = correctAnswer => {
    var fixedAnswers = [];
    var numberOfAnswers = 3;
    for (var i = 0; i < numberOfAnswers; i++) {
      var correctAnswerIsAdded = fixedAnswers.includes(correctAnswer);
      if (
        !correctAnswerIsAdded &&
        (i == numberOfAnswers - 1 || Math.random() < 1 / numberOfAnswers)
      ) {
        // Add correct number
        fixedAnswers[i] = correctAnswer;
        continue;
      }

      // Add a random numner, possible correct answer
      fixedAnswers[i] = this.getRandomAnswer(fixedAnswers);
    }
    return fixedAnswers;
  };

  getRandomAnswer = excludeList => {
    while (true) {
      var random = Math.floor(Math.random() * 10 + 1);
      var randomAnswer = this.state.selectedMultitable * random;
      if (!excludeList.includes(randomAnswer)) return randomAnswer;
    }
  };

  handleClearClicked = () => {
    this.setState({ answerField: "" });
  };

  handleAnswerbuttonClicked = answer => {
    this.handleOkClicked(answer);
  };

  handleOkClicked = answer => {
    if (this.state.isGameStarted == false) {
      return;
    }

    // Check input against answer.
    // If correct, increase correctAnswers and show new question.
    // Otherwise, show an error
    if (answer == this.state.question.answer) {
      // Correct answer
      this.setState({
        correctAnswers: ++this.state.correctAnswers,
        answered: ++this.state.answered,
        resultText: "Rätt!",
        resultTextClasses: "bg-success"
      });

      if (this.state.correctAnswers === this.state.totalQuestions) {
        // User has answered alla questsions. End the game
        this.endGame();
      } else {
        // More questions to answer. Display next one
        this.createNextQuestion();
      }
    } else {
      // Wrong answer
      this.setState({
        resultText: "Fel!",
        resultTextClasses: "bg-danger",
        choices: this.getFixedAnswers(this.state.question.answer)
      });
    }

    this.setState({ answerField: "" });
  };

  endGame = () => {
    // Stop timer and calculate result time
    this.stopGame();

    // Generate success image
    // var imageFullPath = require("./images/Inez_staende_mob.JPG");
    // var imageFullPath = this.getRandomImage();
    // var imageFullPath = ;

    // Update the state
    this.setState({
      resultText: "Klar! Tid: " + this.getTimerText(this.state.resultTime),
      // imageFullPath: this.caputuredImage,
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
    this.capture();
    this.setState({
      correctAnswers: 0,
      startButtonText: "Stop",
      resultText: "",
      isGameStarted: true,
      startTime: new Date(),
      timerHandler: setInterval(this.tick, 33),
      imageShouldHide: true,
      webcamShouldHide: true
    });
  };

  settingsPanelClicked = () => {
    var currentValue = this.state.settingsShouldHide;
    this.setState({ settingsShouldHide: !currentValue });
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

    return (
      mins + " min " + seconds + "," + Math.round(milliseconds / 100) + " sek"
    );
  };

  numkeyOnClickHandler = numkey => {
    if (this.state.isGameStarted == false) return;

    var answerField = "";
    if (numkey < 10) {
      answerField = this.state.answerField + numkey;
    }
    this.setState({ answerField, resultText: "" });
  };

  setAnswerMode = mode => {
    // alert("" + mode);
    var hideNumPad = false;
    var hideSelectButtons = false;
    if (mode == "numpad") {
      hideNumPad = false;
      hideSelectButtons = true;
    } else {
      hideNumPad = true;
      hideSelectButtons = false;
    }

    this.setState({
      answerMode: mode,
      hideNumPad: hideNumPad,
      hideSelectButtons: hideSelectButtons
    });
  };

  setRef = webcam => {
    this.webcam = webcam;
  };

  capture = () => {
    const imageSrc = this.webcam.getScreenshot();
    this.setState({
      caputuredImage: imageSrc
    });
  };

  render() {
    const videoConstraints = {
      width: 1280,
      height: 720,
      facingMode: "user"
    };

    return (
      <React.Fragment>
        <NavBar bestResultTimeText={this.state.bestResultTimeText} />
        <main className="container">
          <div>
            <SettingsPanel
              onSettingsPanelClicked={this.settingsPanelClicked}
              settingsShouldHide={this.state.settingsShouldHide}
              onAnswerModeChanged={this.setAnswerMode}
              choooseAnswerChecked={this.state.answerMode != "numpad"}
              updateSelectedMultiTable={this.updateSelectedMultiTable}
            />
            {/* <ToogleAnswerMode
              onAnswerModeChanged={this.setAnswerMode}
              choooseAnswerChecked={this.state.answerMode != "numpad"}
            /> */}
            <StartButton
              buttonText={this.state.startButtonText}
              onClick={this.handleStartButtonClicked}
              timerText={this.state.timerText}
            />

            <Timer>timer={this.state.timer}</Timer>

            <ResultBoard
              resultTextClasses={this.state.resultTextClasses}
              correctAnswers={this.state.correctAnswers}
              total={this.state.totalQuestions}
              resultText={this.state.resultText}
            />
            <Question
              questionText={this.state.question.questionText}
              answerField={this.state.answerField}
            />
            {!this.state.hideSelectButtons && (
              <SelectAnswerButtons
                choices={this.state.choices}
                answerbuttonClicked={this.handleAnswerbuttonClicked}
              />
            )}
            {!this.state.hideNumPad && (
              <NumPad
                hide={this.state.hideNumPad}
                okClicked={this.handleOkClicked}
                clearClicked={this.handleClearClicked}
                numkeyClicked={this.numkeyOnClickHandler}
                answerField={this.state.answerField}
              />
            )}
            <div
              style={{
                display: this.state.webcamShouldHide ? "none" : "block"
              }}
            >
              <WebCam
                audio={false}
                height={350}
                ref={this.setRef}
                screenshotFormat="image/jpeg"
                width={350}
                videoConstraints={videoConstraints}
              />
            </div>
            {/* <button onClick={this.capture}>Capture photo</button> */}

            {/* <Image imageFullPath={this.state.caputuredImage} /> */}

            {/* <label>"hej "+ {this.state.imageShouldHide}</label> */}
            <Image
              imageFullPath={this.state.caputuredImage}
              imageShouldHide={this.state.imageShouldHide}
            />

            {/* <Image imageFullPath={this.state.imageFullPath} /> */}

            {/* <Button
              variant="primary"
              onClick={() => this.setState({ modalShow: true })}
            >
              Launch vertically centered modal
            </Button> */}

            {/* <SuccessModal
              show={this.state.modalShow}
              onHide={this.modalClose}
            /> */}
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
