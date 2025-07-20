// event bubbling and trickling

const div = document.querySelector("#parent");
const form = document.querySelector("#form");
const button = document.querySelector("#btn");

// event bubbling
/* 
div.addEventListener("click", func);

form.addEventListener("click", func);
button.addEventListener("click", func);
*/

// event trickling / event capturing
div.addEventListener(
  "click",
  () => {
    alert("div");
  },
  {
    capture: true,
  }
);
form.addEventListener(
  "click",
  () => {
    alert("form");
  },
  {
    capture: true, // sets to trickling mode
  }
);
button.addEventListener(
  "click",
  () => {
    alert("button");
  },
  {
    capture: true,
  }
);

/* 
by default, if we are clicking on any element, it is also calling it's parent 

this behaviour is called event bubbling , means an event goes on calling it's parent i.e it is bubbling up , calls goes up like bubble 
*/

// what is the difference between event.taget vs this.target vs event.currentTarget

function func(event) {
  alert(
    "current target = " +
      event.currentTarget.tagName +
      ", target = " +
      event.target.tagName +
      ", this = " +
      this.tagName
  );
}

/* 
event.currentTarget.tagName refers to the DOM element that we are referring to 

event.target.tagName refers to the DOM element on which event bubbling was first invoked, i.e the DOM element on which user made an event 

this.tagName refers to the current DOM element that we are working with.
*/

// what is event capturing / trickling?
// -- top to bottom execution

// how to stop bubbling or capturing ?
// use event.stopPropogation()

// what is event delegation ?
document.querySelector(".products").addEventListener("click", (e) => {
  console.log(e);

  if (e.target.tagName === "LI") {
    window.location.href = "/" + e.target.className; // conditional rendering
  }
});

/*
if you wan't to apply trickling for some DOM components , then pass {capture:true} for that 
*/

// create a Modal which closes by clicking on negative space ?
