
//array of objects including questions, answers, context 
const Questions = [
    {
      id: 0, 
      c: "Phishing is a cybercrime (a subcatergory of social engineering) in which targets are contacted by email, telephone or text message by someone posing as a legitimate institution to lure individuals into providing sensitive data such as personally identifiable information, banking and credit card details, and passwords.",
      q: "What do you think the stolen information is used for?", 
      e: "Answer: Both A and B\nStolen sensitive information can be used to extort the victim in the form of blackmail and steal money from them.",
      a: [
        {text: "a.) To access important accounts that can result in identity theft and finanical loss", isCorrect: true},
        {text: "b.) To blackmail targets", isCorrect: true},
        {text: "c.) To help the target financially by managing their financial accounts", isCorrect: false },
        {text: "d.) Nothing", isCorrect: false }
      ]
      
    }, 
    {
      id: 1, 
      c: "There are many types of phishing, a few include:\nSpear Phishing-  targets individuals in a corporation or system administrators who have important information about the company that they work at (passwords, trade deals, etc.)\n\nWhaling- targets a more specific group than spear phishing, such as the CEO of a company\n\nSmishing- scams through alerts. They often alert the user of a fake compromise of their bank account or delivery package\n\nEmailing Phising- scams through emails",
      q: "Which type of phishing do you think is most common?", 
      e: "Answer: C\nEmail is the most common type of phishing. Oftentimes, we lump these phishing emails with spam emails.",
      a: [{text: "a.) Spear phishing", isCorrect: false},
         {text: "b.) Smishing", isCorrect: false},
         {text: "c.) Email phishing", isCorrect: true},
         {text: "d.) Whaling", isCorrect: false}]
      
    }, 
    {
      id: 2, 
      c: "Everyone reading this has most likely experienced it once such as getting a spam email or a call stating that you won the lottery. These are all real life examples of phishing.",
      q: "Based on the fact above, who do you think is affected by phishing?", 
      e:"Answer: D\nBecause the internet is so widespread and phisihing is a common attack, almost everyone in modern day is affected. Oftentimes, we don't take much note of it because so common.", 
      a: [
        {text: "a.) Only adults", isCorrect: false},
        {text: "b.) Dogs", isCorrect: false},
        {text: "c.) Babies", isCorrect: false},
        {text: "d.) Almost everyone", isCorrect: true},
      ]
    }, 
    {
      id: 3, 
      c: "Although everyone is at risk for phishing because of the widespread use of the internet, the age group of 25-44 year-olds are the most likely to be targeted according to the Telephone-Operated Crime Survey of England and Wales.",
      q: "Why do you think that the 25-44 age group is specially vulnerable to phishing?",
      e:"Answer: D\nThe age group 25-44 uses the internet the most, either for work or for relaxation. This constant use and the fact that this age group have their own income and sensitive information due to their jobs makes them attractive targets to phishers.",
      a: [
        {text: "a.) Because they're stupid", isCorrect: false},
        {text: "b.) Because they don't use the internet as much as other age groups", isCorrect: false},
        {text: "c.) Because they are bad people", isCorrect: false},
        {text: "d.) Because they use the internet often and have vulnerable information", isCorrect: true},
      ]
    },
    {
      id: 4, 
      c: "How to Spot Phishing:\n\nToo Good To Be True - Eye-catching features and stating that you just won an expensive item such as an iPhone or a large amount of money. If it sounds too good to be true then it probably is\n\nSense of Urgency - many phishing messages make you feel like you need to do what is said in the message ASAP. This can be limited time on a give-away that sounds too good to be true\n\nUnusual Sender- if the user is from someone you never expected to email you, or they have a weird typo in their email address, or if anything seems out of the ordinary, PROCEED WITH CAUTION!",
      q: "Should you open an email from markzuckerburg@Faceb00kmail.com informing you that you just won $1000 dollars? If you should or should not, why?",
      e: 'Answer: C\nNo, you should not because:\n\n1.)The offer sounds too good to be true\n2.)There are two zeros for the letter "o" in @Faceb00kmail.com. If it was truly from FaceBook, it would be @Facebookmail.com.',
      a: [
        {text: "a.) Yes, because it's from Mark Zuckerburg, a billionaire", isCorrect: false},
        {text: "b.) Yes, because it offers me a cash prize", isCorrect: false},
        {text: "c.) No, because it sounds too good to be true and it has a slight mistake in the sender address", isCorrect: true},
        {text: "d.) No, because I don't like Mark Zuckerburg", isCorrect: false},
      ]
    }, 
    {
      id: 5, 
      c: "Tips to Protect Yourself against Phishing:\n\n1.)Use Multi-factor Authentication- although verifying your identity multiple times when logging in to your account can be annoying, this gives you an extra layer of protection of cyber attacks by making it hard for them to access your account even when the hacker has your username and password\n\n2.)Security software- we all should have some type or security software installed on our computers to provide a firewall against cyberattacks\n\n3.)Set your cell phone to update setting software automatically- many updates include new and updated software to protect you against cyberattacks",
      q: "What is NOT a good way to protect yourself?",
      e: "Answer: B\nUsing one password for all online accounts allows the hacker to gain access to many different accounts when they have one password to a singular account. Set variations of passwords instead to slow the hacker from accessing different accounts",
      a: [
        {text: "a.) Making sure you update all software ASAP", isCorrect: false},
        {text: "b.) Using one password for all online accounts", isCorrect: true},
        {text: "c.) Installing security software such as McAfee", isCorrect: false},
        {text: "d.) Using multi-factor authentication", isCorrect: false},
      ]
    },
    {
      id: 6, 
      c: "Oh No! You've been a phished! The hacker has your password.\n\nWhat should you do now?",
      q: "\nFirst, keep a deep breath and don’t panic. Disconnect your device from the internet to prevent outside access and future damage.\n\nNow you have two options: turn your device back on and do a scan and clean your device of malware, or go to your local technician.\n\nChange all your login information for important services such as bank accounts. Keep an eye on anything the attacker may have accessed during the attack",
      e: "Answer: D\nChanging your login information will block the hacker out of your accounts since now the password or information they have do not work anymore.",
      a: [
        {text: "a.) Cry, the hacker has my information!", isCorrect: false},
        {text: "b.) Leave your computer on and take a nap to destress", isCorrect: false},
        {text: "c.) Continue on with your day as usual", isCorrect: false},
        {text: "d.) Change your login information", isCorrect: true},
      ]
    }, 
    {
      id: 7, 
      c: "If you enjoyed learning about phishing, you should consider becoming a cybersecurity analyst!\n\nCybersecurity analysts specialize in network and IT infrastructure security. They specialize in preventing and anticipating in cyberattacks such as phishing, malware, and many other subcatergories of cyberattacks. They will often create software to protect data, write reports on networks, and evaluate weaknesses in the system.\n\nHooray! You've reached the end! I hope you learned something new!",
      q: "How do you feel right now about your knowledge on phishing?",
      e: "Google is your best friend. You can also google what you don't understand!",
      a: [
        {text: "Great! I learned a lot", isCorrect: true},
        {text: "Good, but I would like more clarification", isCorrect: true},
        {text: "Okay-ish, I'm getting the overall idea, but need more help", isCorrect: true},
        {text: "Bad, I don't get this at all", isCorrect: true},
      ]
    }, 
  ]
  
  //start
  iterate(0);
  
  
  //displays, allows the user to interact with the trivia, and evaluates funct
  function iterate(id){
    //insert context 
    const contextTxt = document.getElementById("contextTxt");
  
    //switching context based on each question 
    contextTxt.innerText = Questions[id].c;
    
    //getting question text space
    const question = document.getElementById("questTxt");
  
      //setting question text 
    question.innerText = Questions[id].q;
  
    //getting options 
    //options buttons
    const opt1 = document.getElementById("opt1");
    const opt2 = document.getElementById("opt2"); 
    const opt3 = document.getElementById("opt3"); 
    const opt4 = document.getElementById("opt4");
    //setting option text 
    opt1.innerText = Questions[id].a[0].text;
    opt2.innerText = Questions[id].a[1].text;
    opt3.innerText = Questions[id].a[2].text;
    opt4.innerText = Questions[id].a[3].text;
  
    //providing true(right) or wrong (false) for options 
    opt1.value = Questions[id].a[0].isCorrect; 
    opt2.value = Questions[id].a[1].isCorrect;
    opt3.value = Questions[id].a[2].isCorrect;
    opt4.value = Questions[id].a[3].isCorrect;
  
    //declare var for selected button 
    var selected = "";
    
    //INSERT THE WHOLE OPTION COLOR THING or do css for it (only doing the selected value)
    opt1.addEventListener("click", ()=> {
      selected = opt1.value
       
      console.log("opt1 selected"+' '+selected.toString())
    })
     opt2.addEventListener("click", ()=> {
      selected = opt2.value
     
      console.log("opt2 selected"+' '+selected.toString())
    })
     opt3.addEventListener("click", ()=> {
      selected = opt3.value
       
      console.log("opt3 selected"+' '+selected.toString())
    })
     opt4.addEventListener("click", ()=> {
      selected = opt4.value
       
      console.log("opt1 selected"+' '+selected.toString())
    })
  
    //get var evaluate button
    const checkBtn = document.getElementById("checkBtn");
  
  
    //add event listener to show right or wrong 
    checkBtn.addEventListener("click", ()=> {
    
    //get triv box
    const trivBox = document.getElementById("trivBox");
  
    //get explanation space 
    const explain = document.getElementById("explain")
      
       if(selected == "true"){
         //if correct, change trivBox to green
         console.log("Correct ans")
         trivBox.style.backgroundColor = "green";
        
         //explains why answer appear in quiz 
        explain.innerText = Questions[id].e
       } 
      else{
        //if wrong, change trivBox to red 
        console.log("Wrong ans")
       trivBox.style.backgroundColor = "red";
  
        //explains why answer appear in quiz 
        explain.innerText = Questions[id].e
      }  
    })
    //sets back to original color
    trivBox.style.backgroundColor = "#335170";
    //sets explanation box back to blank
    explain.innerText = "";
  }
  
  //get var for next button 
  const nextBtn = document.getElementById("nextBtn");
   
  //starts at first 
  var id = 0;
  //event listener and method for next
  nextBtn.addEventListener("click", ()=>{
      if(id<7){
        id++; 
        iterate(id);
        console.log(id);
      }
  
    })
  
  //get var for back button
  const backBtn  = document.getElementById("backBtn");
  
  //method for going back
  backBtn.addEventListener("click", ()=>{
     
      if(0<id<6){
        id--; 
        iterate(id);
        console.log(id);
      }
    })