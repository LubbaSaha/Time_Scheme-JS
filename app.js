//select the element

const clear = document.querySelector(".clear");
const dataElement = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input");

//class names

const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";

//shoe todays date

const options = {weekday:"long", month:"short", day:"numeric"};
const today = new Data();

dataElement.innerHTML = today.tolocaleDateString("en-EN", options);

// add to do function

function addToDo(toDo){

    const item = `
                    <i class="far fa-check-circle" job="complete" id="0"></i>
                    <p class="text">${toDo}</p>
                    <i class="" job="delete" id="0"></i>
                 `;
    const position = "beforeend";

    list.insertAdjacentHTML(position, item);

}

addToDo("drink coffee");