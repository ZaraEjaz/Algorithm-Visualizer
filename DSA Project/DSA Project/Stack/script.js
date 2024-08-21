//variable Declaration
const push = document.querySelector(".push");
const pop = document.querySelector(".pop");
const reset = document.querySelector(".reset");
const bucket = document.querySelector(".main-stack-bucket");
const input = document.querySelector(".text");
const massage = document.querySelector(".massage");
const massageBox = document.querySelector(".massage-box");
const box = document.querySelectorAll(".box");
const stack = [];
 
//for disable all buttons
const buttonDisable = () => {
    push.disabled = true;
    push.classList.add("disable-button");
    pop.disabled = true;
    pop.classList.add("disable-button");
    reset.disabled = true;
    reset.classList.add("disable-button");
    input.disabled = true;
};
 
//for enable all buttons
const buttonEnable = () => {
    push.disabled = false;
    push.classList.remove("disable-button");
    pop.disabled = false;
    pop.classList.remove("disable-button");
    reset.disabled = false;
    reset.classList.remove("disable-button");
    input.disabled = false;
};
 
//When the push button will be clicked
push.addEventListener("click", () => {
    //if input box is empty
    if (input.value == "") {
        massage.innerHTML = "Please Enter a value.";
        massageBox.classList.add("error-massage");
        setTimeout(() => {
            massageBox.classList.remove("error-massage");
        }, 1200);
        return;
    }
 
    push.addEventListener("click", () => {
      // ...
      
      // update the size of the stack
      box[3].innerHTML = stack.length;
  
      // ...
  });
  
  pop.addEventListener("click", () => {
      // ...
  
      // update the size of the stack
      box[3].innerHTML = stack.length;
  
      // ...
  });
    //if the stack is full
    if (stack.length == 5) {
        input.value = "";
        massage.innerHTML = "Stack Overflow";
        massageBox.classList.add("error-massage");
        setTimeout(() => {
            massageBox.classList.remove("error-massage");
        }, 1200);
        return;
    }
    const itemValue = input.value; //for store the input value
    stack.push(itemValue); //push the value into the stack
 
    //creating a new element
    const element = document.createElement("div");
    element.classList.add("ele");
    element.innerText = stack[stack.length - 1];
    bucket.appendChild(element);
 
    //update the top
    box[0].innerHTML = stack[stack.length - 1];
 
    //clear the input box
    input.value = "";
 
    //adding the animation for a new pushed element
    element.classList.add("ele-add");
 
    //disable all buttons
    buttonDisable();
 
    //after pushing the element
    setTimeout(() => {
        //remove the animation
        element.classList.remove("ele-add");
 
        //update the Last Pushed Item Value
        box[1].innerHTML = itemValue;
 
        //Display the massage
        massage.innerHTML = `Item ${stack[stack.length - 1]} is Pushed.`;
 
        //Enable all buttons
        buttonEnable();
    }, 1500);
});
 
pop.addEventListener("click", () => {
  // if Stack is Empty
  if (stack.length == 0) {
      massageBox.classList.add("error-massage");
      massage.innerHTML = "Stack Underflow";
      setTimeout(() => {
          massageBox.classList.remove("error-massage");
      }, 1200);
      return;
  }
  box[3].innerHTML = stack.length - 1;
  bucket.lastElementChild.classList.add("ele-remove");
  buttonDisable();

  setTimeout(() => {
      bucket.removeChild(bucket.lastElementChild);
      const itemValue = stack.pop();
      box[2].innerHTML = itemValue;
      if (stack.length == 0) {
          box[0].innerHTML = "";
      } else {
          box[0].innerHTML = stack[stack.length - 1];
      }
      massage.innerHTML = `Item ${itemValue} is Popped.`;
      buttonEnable();
      box[3].innerHTML = stack.length;
  }, 1500);
});
 
function navigateBack() {
  window.location.href = "C:\Users\PMLS\Downloads\Algorithm-Visualizer-main (2)\Algorithm-Visualizer-main\index.html"; // Replace with the actual file name or URL of your main page
}
//When the reset button will be clicked
reset.addEventListener("click", () => {
    //clear the full array
    while (stack.length > 0) {
        stack.pop();
    }
 
    //clear all fields
    box[0].innerHTML = "";
    box[1].innerHTML = "";
    box[2].innerHTML = "";
    massage.innerHTML = "";
 
    //clear all elements from the bucket
    while (bucket.firstChild) {
        bucket.removeChild(bucket.firstChild);
    }
});