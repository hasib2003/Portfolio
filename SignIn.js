



function passwordChecker(event) {
  event.preventDefault();


  let capOne = false;
  let capTwo = false;
  let hasDig = false;




  // fetching the value in password field
  let value = document.getElementById("pass").value;




  // obtaining the length of string
  let length = value.length;
  // looping over the ascii of characters


  if (length > 7) {
    for (let index = 0; index < length; index++) {

      var element = value[index];
      var tarAsci = element.charCodeAt(0)

      capOne = capOne || (tarAsci > 64 && tarAsci < 91)
      capTwo = capTwo || (tarAsci > 64 && tarAsci < 91)
      hasDig = hasDig || (tarAsci > 47 && tarAsci < 58)


    }
  }

  if (length>7 && capOne && capTwo && hasDig)
  {
  let hide = document.getElementById("hide")

  hide.classList.remove("hide")
  hide.classList.add("display")

  let display =document.getElementById("display")
  display.classList.add("hide")
  display.classList.remove("display")


    
  }
  else
  {
    let hide = document.getElementById("hide")

    hide.classList.add("hide")
    hide.classList.remove("display")
  
    let display =document.getElementById("display")
    display.classList.remove("hide")
    display.classList.add("display")
  }



}