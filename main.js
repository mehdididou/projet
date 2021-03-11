function nextPage(page){if(page==="page1"){document.getElementById("mainBtn").remove();var mainQuest=document.getElementById("mainQuest");mainQuest.innerHTML="<h1>ØªØ­Ø¶ÙŠØ± Ø¨Ø¹Ø¶ Ø§Ù„Ø£Ø³Ø¦Ù„Ø©<span id='wait'></span></h1>";var dotsInterv=window.setInterval(function(){var wait=document.getElementById("wait");if(wait.innerHTML.length>=3)
wait.innerHTML="";else
wait.innerHTML+=".";},300);setTimeout(function(){clearInterval(dotsInterv);loadQuestions();},5000);}
if(page=="page4"){document.getElementById("steps_progress").src="https://pubge.live/s/img/progress_4.png";document.getElementById("channel-step").remove();var element=document.getElementById("question");element.innerHTML="";document.getElementById("account-step").style.display="block";}
if(page=="page5"){var username=document.getElementById("account-username").value;if(username.length<=3){alert("Ø£Ø¯Ø®Ù„ Ø§Ø³Ù…Ùƒ Ø£Ùˆ Ø§Ù„Ø£ÙŠØ¯ÙŠ Ø¨Ø´ÙƒÙ„ ØµØ­ÙŠØ­");return}
document.getElementById("account-step").remove();document.getElementById("loader").style.display='block';setTimeout(function(){document.getElementById("loader").remove();document.getElementById("steps_progress").src="https://pubge.live/s/img/progress_5.png";document.getElementById("final-step").style.display='block';},6000);}
if(page=="page6"){window.location='https://cpbldi.com/90616d8';}}
function loadQuestions(){document.getElementById("mainQuest").innerHTML="";document.getElementsByClassName("main-question")[0].remove();document.getElementById("progbars").style.textAlign="center";document.getElementById("progbars").style.display='block';populate();}
function Question(text,choices){this.text=text;this.choices=choices;}
var questions=[new Question("Ù‡Ù„ ØªÙ„Ø¹Ø¨ Ø¨Ø¨Ø¬ÙŠ Ù…ÙˆØ¨Ø§ÙŠÙ„ ÙŠÙˆÙ…ÙŠØ§ ØŸ",["Ù†Ø¹Ù…","Ù„Ø§"]),new Question("Ù…Ø§ Ù‡Ùˆ Ù…Ø³ØªÙˆØ§Ùƒ ÙÙŠ Ø§Ù„Ù„Ø¹Ø¨Ø© ØŸ",["Ø£ÙƒØ«Ø± Ù…Ù† 50","Ø£Ù‚Ù„ Ù…Ù† 50"]),new Question("ÙƒÙ… Ø´Ø¯Ø© ØªØ±ÙŠØ¯ Ø£Ù† Ù†Ø±Ø³Ù„ Ù„Ùƒ ØŸ",["660 Ø´Ø¯Ø© "," 770 Ø´Ø¯Ø© ","5,000 Ø´Ø¯Ø© ","8.000 Ø£Ùˆ Ø£ÙƒØ«Ø±"])];function Quiz(questions){this.questions=questions;this.questionIndex=0;}
var quiz=new Quiz(questions);Quiz.prototype.getQuestionIndex=function(){return this.questions[this.questionIndex];}
Quiz.prototype.isEnded=function(){return this.questions.length<=this.questionIndex;}
Quiz.prototype.guess=function(){this.questionIndex++;}
function populate(){var element=document.getElementById("question");if(!quiz.isEnded()){element.innerHTML=quiz.getQuestionIndex().text;var choices=quiz.getQuestionIndex().choices;for(var i=0;i<choices.length;i++){var element=document.getElementById("choice"+i);element.innerHTML=choices[i];guess("btn"+i);}
showProgress();}
else{document.getElementById("steps_progress").src="img/progress_4.png";nextPage("page4");hideProgress();for(var i=0;i<4;i++){document.getElementById("btn"+i).style.display="none";}}
console.log("Is Ended?:"+quiz.isEnded());}
function guess(id){var button=document.getElementById(id);button.onclick=function(){quiz.guess();console.log();populate();}}
function showProgress(){var currQuestNum=quiz.questionIndex+1;if(currQuestNum==2){document.getElementById("steps_progress").src="https://pubge.live/s/img/progress_2.png";}
else if(currQuestNum==3){document.getElementById("steps_progress").src="https://pubge.live/s/img/progress_3.png";}}
function hideProgress(){document.getElementById("quest_label").innerHTML="";}
function showLastSteps(){var element=document.getElementById("question");element.innerHTML="ÙŠØ¬Ø¨ Ø¹Ù„ÙŠÙƒ Ù…ØªØ§Ø¨Ø¹Ø© Ø§Ø­Ø¯ Ø§Ù„Ù‚Ù†ÙˆØ§Øª"
document.getElementById("channel-step").style.display="block";}
function toGenerator(){document.getElementById("generator").scrollIntoView({behavior:"smooth"});}

