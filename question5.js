var output= document.querySelector("#output");

function taskinput() {
    const number = Math.floor(Math.random() * 10 + 1);  //generate random no. between 1 to 10
    console.log(number);
    output.innerHTML=""

    const userinput = document.getElementById("userinput").value;

    // Handling user input
    if (userinput == null || userinput < 1 || userinput > 10) {;
      alert("invalid input please enter a number between 1 to 10 ");
    } else displaymessage(userinput ,number);
  }

  function displaymessage(userinput,number) {
    if (number == userinput) {
      console.log("Good Work");
      output.innerHTML="Good Work";
    } 
    else 
    {console.log("Not Matched");
    output.innerHTML="Not Matched";
  }
  }
