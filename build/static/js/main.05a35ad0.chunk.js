(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},17:function(e,t,a){},24:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(7),l=a.n(s),i=(a(15),a(1)),c=a(2),o=a(4),u=a(3),d=a(5),m=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-light bg-light"},r.a.createElement("a",{className:"navbar-brand",href:"#"},"B\xe4st tid hittills:"," ",r.a.createElement("span",{className:"badge badge-pill badge-secondary"},this.props.bestResultTimeText)))}}]),t}(n.Component),h=(a(17),function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("span",{className:this.getBadgeClasses()},this.formatCount()),r.a.createElement("button",{onClick:function(){return e.props.onIncrement(e.props.counter)},className:"btn btn-secondary btn-sm"},"Increment"),r.a.createElement("button",{onClick:function(){return e.props.onDelete(e.props.counter.id)},className:"btn btn-danger btn-sm m-2"},"Delete"))}},{key:"getBadgeClasses",value:function(){var e="badge m-2 badge-";return e+=0==this.props.counter.value?"warning":"primary"}},{key:"formatCount",value:function(){return 0===this.props.counter.value?"Zero":this.props.counter.value}}]),t}(n.Component)),p=(n.Component,function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("button",{onClick:function(){return e.props.onClick(e.props.keyvalue)},className:"btn btn-secondary btn-l m-2"},this.props.keyvalue)}}]),t}(n.Component)),k=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(p,{key:1,keyvalue:1,onClick:function(){return e.props.numkeyClicked(1)}}),r.a.createElement(p,{key:2,keyvalue:2,onClick:function(){return e.props.numkeyClicked(2)}}),r.a.createElement(p,{key:3,keyvalue:3,onClick:function(){return e.props.numkeyClicked(3)}}),r.a.createElement(p,{key:98,keyvalue:"Clear",onClick:function(){return e.props.clearClicked()}})),r.a.createElement("div",null,r.a.createElement(p,{key:4,keyvalue:4,onClick:function(){return e.props.numkeyClicked(4)}}),r.a.createElement(p,{key:5,keyvalue:5,onClick:function(){return e.props.numkeyClicked(5)}}),r.a.createElement(p,{key:6,keyvalue:6,onClick:function(){return e.props.numkeyClicked(6)}}),r.a.createElement(p,{key:99,keyvalue:"OK",onClick:function(){return e.props.okClicked(e.props.answerField)}})),r.a.createElement("div",null,r.a.createElement(p,{key:7,keyvalue:7,onClick:function(){return e.props.numkeyClicked(7)}}),r.a.createElement(p,{key:8,keyvalue:8,onClick:function(){return e.props.numkeyClicked(8)}}),r.a.createElement(p,{key:9,keyvalue:9,onClick:function(){return e.props.numkeyClicked(9)}})),r.a.createElement("div",null,r.a.createElement(p,{key:0,keyvalue:0,onClick:function(){return e.props.numkeyClicked(0)}})))}}]),t}(n.Component),b=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{fontSize:"xx-large"}},r.a.createElement("span",{className:"mr-2"},r.a.createElement("b",null,"Fr\xe5ga:")),r.a.createElement("span",null,this.props.questionText," "),r.a.createElement("span",null,r.a.createElement("b",null,this.props.answerField)))}}]),t}(n.Component),f=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"well"},r.a.createElement("span",{className:"badge badge-pill badge-secondary mr-2"},this.props.correctAnswers," / ",this.props.total),r.a.createElement("span",{className:"badge "+this.props.resultTextClasses},this.props.resultText))}}]),t}(n.Component),v=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("span",null,this.props.timer))}}]),t}(n.Component),y=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("button",{className:"btn btn-secondary btn-l m-2",onClick:this.props.onClick},this.props.buttonText),r.a.createElement("span",null,"Tid: "+this.props.timerText))}}]),t}(n.Component),w=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={},a.getRandomText=function(){var e=["Snygg bild!","Vilket leende!","Kamma dig","N\xe4r var du hos fris\xf6ren senast?"];return e[Math.floor(Math.random()*e.length)]},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{display:this.props.imageShouldHide?"none":"block"}},r.a.createElement("img",{src:this.props.imageFullPath}),r.a.createElement("div",null,r.a.createElement("label",null,this.getRandomText())))}}]),t}(n.Component),g=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(p,{key:this.props.choices[0],keyvalue:this.props.choices[0],onClick:function(){return e.props.answerbuttonClicked(e.props.choices[0])}}),r.a.createElement(p,{key:this.props.choices[1],keyvalue:this.props.choices[1],onClick:function(){return e.props.answerbuttonClicked(e.props.choices[1])}}),r.a.createElement(p,{key:this.props.choices[2],keyvalue:this.props.choices[2],onClick:function(){return e.props.answerbuttonClicked(e.props.choices[2])}}))}}]),t}(n.Component),C=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{onChange:function(t){return e.props.onAnswerModeChanged(t.target.value)}},r.a.createElement("input",{type:"radio",value:"numpad",name:"toogleAnswerMode",defaultChecked:!this.props.choooseAnswerChecked})," ","1-9",r.a.createElement("input",{type:"radio",value:"choose_answer",name:"toogleAnswerMode",defaultChecked:this.props.choooseAnswerChecked})," ","V\xe4lj r\xe4tt svar")}}]),t}(n.Component),T=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"renderButtons",value:function(){var e=this,t=[];return[2,3,4,5,6,7,8,9,10].forEach(function(a){t.push(r.a.createElement(p,{key:a,keyvalue:a,onClick:function(){return e.props.updateSelectedMultiTable(a)}}))}),t}},{key:"render",value:function(){return this.renderButtons()}}]),t}(n.Component),E=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{onClick:function(t){return e.props.onSettingsPanelClicked(t.target.value)}},r.a.createElement("span",{className:"mr-3"},r.a.createElement("b",null,"Inst\xe4llningar ",this.props.settingsShouldHide?"\u25bc":"\u25b2")),r.a.createElement("hr",null),r.a.createElement("div",{style:{display:this.props.settingsShouldHide?"none":"block"}},"Visa nummerplatta eller bara tre knapppar:",r.a.createElement(C,{onAnswerModeChanged:this.props.onAnswerModeChanged,choooseAnswerChecked:this.props.choooseAnswerChecked}),r.a.createElement("hr",null),"V\xe4lj multiplikationstabell:",r.a.createElement(T,{updateSelectedMultiTable:function(t){return e.props.updateSelectedMultiTable(t)}}),r.a.createElement("hr",null)))}}]),t}(n.Component),O=a(8),j=a.n(O),S=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={correctAnswers:0,answered:0,totalQuestions:window.location.href.includes("localhost")?3:10,selectedMultitable:5,question:{questionText:"",answer:0},resultText:"",resultTextClasses:"",answerField:"",timerText:"",startTime:"",timerHandle:"",resultTime:0,bestResultTime:0,bestResultTimeText:"",startButtonText:"Starta",isGameStarted:!1,settingsShouldHide:!0,imageShouldHide:!0,webcamShouldHide:!1,answerMode:"numpad",choices:[],hideNumPad:!1,hideSelectButtons:!0,modalShow:!1,caputuredImage:"",timeToGetReward:25e3,rewardText:""},a.modalClose=function(){return a.setState({modalShow:!1})},a.updateSelectedMultiTable=function(e){a.setState({selectedMultitable:e})},a.createNextQuestion=function(){var e=Math.floor(10*Math.random()+1),t={questionText:a.state.selectedMultitable+" * "+e+" = ",answer:a.state.selectedMultitable*e};a.setState({question:t,choices:a.getFixedAnswers(t.answer)})},a.getFixedAnswers=function(e){for(var t=[],n=0;n<3;n++){t.includes(e)||!(2==n||Math.random()<1/3)?t[n]=a.getRandomAnswer(t):t[n]=e}return t},a.getRandomAnswer=function(e){for(;;){var t=Math.floor(10*Math.random()+1),n=a.state.selectedMultitable*t;if(!e.includes(n))return n}},a.handleClearClicked=function(){a.setState({answerField:""})},a.handleAnswerbuttonClicked=function(e){a.handleOkClicked(e)},a.handleOkClicked=function(e){0!=a.state.isGameStarted&&(e==a.state.question.answer?(a.setState({correctAnswers:++a.state.correctAnswers,answered:++a.state.answered,resultText:"R\xe4tt!",resultTextClasses:"bg-success"}),a.state.correctAnswers===a.state.totalQuestions?a.endGame():a.createNextQuestion()):a.setState({resultText:"Fel!",resultTextClasses:"bg-danger",choices:a.getFixedAnswers(a.state.question.answer)}),a.setState({answerField:""}))},a.endGame=function(){a.stopGame();var e="";a.state.resultTime<a.state.timeToGetReward&&(e=a.getRewardText()),a.setState({resultText:"Klar! Tid: "+a.getTimerText(a.state.resultTime),imageShouldHide:!1,rewardText:e})},a.getRewardText=function(){return"Hemliga koden: "+(2010+(new Date).getDate()+(new Date).getHours())},a.handleStartButtonClicked=function(){a.state.isGameStarted?a.stopGame():a.startGame()},a.startGame=function(){a.createNextQuestion(),a.capture(),a.setState({correctAnswers:0,startButtonText:"Stop",resultText:"",isGameStarted:!0,startTime:new Date,timerHandler:setInterval(a.tick,33),imageShouldHide:!0,webcamShouldHide:!0,rewardText:""})},a.settingsPanelClicked=function(){var e=a.state.settingsShouldHide;a.setState({settingsShouldHide:!e})},a.stopGame=function(){clearInterval(a.state.timerHandler),a.setResultTime(),(a.state.resultTime<a.state.bestResultTime||0===a.state.bestResultTime)&&a.setState({bestResultTime:a.state.resultTime,bestResultTimeText:a.getTimerText(a.state.resultTime)});a.setState({startButtonText:"Start",isGameStarted:!1,question:{questionText:"",answer:-1}})},a.tick=function(){1==a.state.isGameStarted&&a.setResultTime()},a.setResultTime=function(){var e=a.state.startTime,t=(new Date).getTime()-e.getTime();a.setState({resultTime:t,timerText:a.getTimerText(t)}),console.log("ResultTime:"+t+" = "+a.getTimerText(t))},a.getTimerText=function(e){e-=864e5*Math.floor(e/864e5),e-=36e5*Math.floor(e/36e5);var t=Math.floor(e/6e4);e-=6e4*t;var a=Math.floor(e/1e3);return e-=1e3*a,t+" min "+a+","+Math.round(e/100)+" sek"},a.numkeyOnClickHandler=function(e){if(0!=a.state.isGameStarted){var t="";e<10&&(t=a.state.answerField+e),a.setState({answerField:t,resultText:""})}},a.setAnswerMode=function(e){var t=!1,n=!1;"numpad"==e?(t=!1,n=!0):(t=!0,n=!1),a.setState({answerMode:e,hideNumPad:t,hideSelectButtons:n})},a.setRef=function(e){a.webcam=e},a.capture=function(){var e=a.webcam.getScreenshot();a.setState({caputuredImage:e})},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(m,{bestResultTimeText:this.state.bestResultTimeText}),r.a.createElement("main",{className:"container"},r.a.createElement("div",null,r.a.createElement(E,{onSettingsPanelClicked:this.settingsPanelClicked,settingsShouldHide:this.state.settingsShouldHide,onAnswerModeChanged:this.setAnswerMode,choooseAnswerChecked:"numpad"!=this.state.answerMode,updateSelectedMultiTable:this.updateSelectedMultiTable}),r.a.createElement(y,{buttonText:this.state.startButtonText,onClick:this.handleStartButtonClicked,timerText:this.state.timerText}),r.a.createElement(v,null,"timer=",this.state.timer),r.a.createElement(f,{resultTextClasses:this.state.resultTextClasses,correctAnswers:this.state.correctAnswers,total:this.state.totalQuestions,resultText:this.state.resultText}),r.a.createElement(b,{questionText:this.state.question.questionText,answerField:this.state.answerField}),!this.state.hideSelectButtons&&r.a.createElement(g,{choices:this.state.choices,answerbuttonClicked:this.handleAnswerbuttonClicked}),!this.state.hideNumPad&&r.a.createElement(k,{okClicked:this.handleOkClicked,clearClicked:this.handleClearClicked,numkeyClicked:this.numkeyOnClickHandler,answerField:this.state.answerField}),r.a.createElement("div",{style:{display:this.state.webcamShouldHide?"none":"block"}},r.a.createElement(j.a,{audio:!1,height:350,ref:this.setRef,screenshotFormat:"image/jpeg",width:350,videoConstraints:{width:1280,height:720,facingMode:"user"}})),r.a.createElement(w,{imageFullPath:this.state.caputuredImage,imageShouldHide:this.state.imageShouldHide}),r.a.createElement("h2",null," ",this.state.rewardText))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(22);l.a.render(r.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a(24)}},[[9,2,1]]]);
//# sourceMappingURL=main.05a35ad0.chunk.js.map