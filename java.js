// BurgerBar 

let navigation = document.getElementById ('navBarLinks');
let toggleButton = document.getElementById ('toggleBurger');
let upLine = document.getElementById ('burger1');
let middleLine = document.getElementById ('burger2');
let downLine = document.getElementById ('burger3');

toggleButton.addEventListener('click', function () {
    navigation.classList.toggle('activeNavigation');
    upLine.classList.toggle('up');
    middleLine.classList.toggle('middle');
    downLine.classList.toggle('down');
})

// 'https://i.pinimg.com/564x/04/e4/04/04e404291fafa674c925dc7b599aa22b.jpg',
       