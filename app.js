const starShip = {
    hull: 20,
    firepower: 5,
    accuracy: .7,
    isAlive: true,
    attack(target) {
        let ranNum = Math.random();
        let shortRan = ranNum.toFixed(2)
       alert(`Accuracy threshold is ${shortRan}`);
        if (shortRan < this.accuracy) {
            alert(`It's a direct hit!! Well done Capitan!`);
            target.hull = target.hull - this.firepower;
            alert(`alien has ${target.hull} hull points left.`);
            if (target.hull <= 0) {
                target.isAlive = false;
                alert(`Alien ship is destroyed!!`);
            }
        } else {
            alert(`you missed!`);
        }
    }
}
const aliens = {
    hull: Math.round((Math.random() * (6 - 3)) + 3),
    firepower: Math.round((Math.random() * (4 - 2)) + 2),
    accuracy: (Math.random() * (.8 - .6)) + .6, //for later figure out a way to make it to the hundredth?
    isAlive: true,
    attack(target) {
        let ranNum = Math.random();
        let shortRan = ranNum.toFixed(2)
        alert(`Accuracy threshold is ${shortRan}`);
        if (shortRan< this.accuracy) {
            alert(`You've been hit!`);
            target.hull = target.hull - this.firepower;
            alert(`hero has ${target.hull} hull points left.`);
            if (target.hull <= 0) {
                target.isAlive = false;
                alert(`You have died, your people will now be used as cattle for the CRAVERSSS!!! GRRZZT ZOIK!`);
            }
        } else {
            alert(`You dodged the attack!`);
        }
    }
}
const battle = (player, computer) => {
    var remainingShips = 6
    while(remainingShips>0 && player.isAlive){
        let userInput = prompt("Enemy Space Fleet approaching!! \n" + remainingShips + " ships perfectly in a row, \n do you wish to engage? (yes or no)")
            if(userInput == 'yes'){
                while (player.isAlive && computer.isAlive) {
                    player.attack(computer);
                    if (computer.isAlive) {
                        computer.attack(player);
                    }
                }
            }
            else{
                alert("You have retreated. \n Refresh page to start again.")
                return
            }
            remainingShips--
            computer.isAlive = true
    }
}
battle(starShip, aliens)

//====== btn event listener
             btn.on('click', (e) => {
                 // console.log(e.currentTarget).parent()
                 const completed = $('#completed');
                 toDo.css('background-color', '#ed6495')
                 completed.append(toDo);
                 completed.append(btn.css('background-color', '#ed6495').text('REMOVE'));
                 btn.on('click', (e) => {
                     btn.prev().remove()
                     e.target.remove()
                 })
             });
//* Window Onload
 $(() => {
     //* gets ADD BUTTON from HTML page
     const addBtn = $('#submit');
     //* adds event listener on the button
     addBtn.on('click', (e) => {
         e.preventDefault();
         // gets user input
         let userInput = $('#input-box');
         // gets to-do-list container
         const toDoList = $('#to-do-list');
         // create to-do-arrays to hold all to-dos
         const toDosArr = [];
         // appends user input to to-dos-array
         toDosArr.push(userInput.val());
         console.log(toDosArr)
         $.each(toDosArr, (idx, el) => {
             // create a div  with some css
             const div = $('<div>').css('background-color', 'skyblue');
             // create element for each todo
             const toDo = $('<h2>').text(el);
             // append the toDo (h2) to the div
             div.append(toDo);
             const btn = $('<button>').attr('type', 'button').text('COMPLETED');
             div.append(btn);
             // appends the todo and btn to the todo-list
             toDoList.append(div);
             //* ====== btn event listener
             btn.on('click', (e) => {
                 // console.log(e.currentTarget).parent()
                 // changes the color of the div
                 div.css('background-color', '#ed6495');
                 // grab the completed container
                 const completed = $('#completed');
                 // appends button with new text
                 div.append(btn.text('REMOVE'));
                 // appends div we created on the complete div on the screen
                 completed.append(div);
                 // adds event listener to remove element from the DOM
                 btn.on('click', (e) => {
                     btn.prev().remove()
                     e.target.remove()
                 })
             });
         })
         // clears input
         userInput.val('');
     });
 })