function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

let dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function allDaysOfTheMonth() {
    let ulDays = document.querySelector('#days');

    for (let index = 0; index < dezDaysList.length; index += 1) {
        let day = dezDaysList[index];
        let dayElement = document.createElement('li');

        if (day === 24 | day === 31) {
            dayElement.className = 'day holiday';
            dayElement.innerText = day;
            ulDays.appendChild(dayElement);
        } else if (day === 4 | day === 11 | day === 18) {
            dayElement.className = 'day friday';
            dayElement.innerText = day;
            ulDays.appendChild(dayElement);
        } else if (day === 25) {
            dayElement.className = 'day holiday friday';
            dayElement.innerText = day;
            ulDays.appendChild(dayElement);
        } else {
            dayElement.className = 'day';
            dayElement.innerText = day;
            ulDays.appendChild(dayElement);
        }
    }
}

allDaysOfTheMonth();

function holidaysButton(holiday) {
    let buttonSpace = document.querySelector('.buttons-container');
    let newButton = document.createElement('button');
    let newButtonId = 'btn-holiday';

    newButton.id = newButtonId;
    newButton.innerText = holiday;
    buttonSpace.appendChild(newButton);
}

holidaysButton("Feriados");

function displayHolidays() {
    let holidayButton = document.querySelector('#btn-holiday');
    let holidays = document.querySelectorAll('.holiday');
    let backGroundColor = 'rgb(238,238,238)';
    let setNewColor = 'red';

    holidayButton.addEventListener('click', function() {
        for (let index = 0; index < holidays.length; index += 1) {
            if (holidays[index].style.backgroundColor === setNewColor) {
                holidays[index].style.backgroundColor = backGroundColor;
            } else {
                holidays[index].style.backgroundColor = setNewColor;
            }
        }
    })
}

displayHolidays();

function fridaysButton(friday) {
    let buttonSpace = document.querySelector('.buttons-container');
    let newButton = document.createElement('button');
    let newButtonId = 'btn-friday';

    newButton.id = newButtonId;
    newButton.innerText = friday;
    buttonSpace.appendChild(newButton);
}

fridaysButton('Sexta-feira');

function displayFridays() {
    let fridayButton = document.querySelector('#btn-friday');
    let fridays = document.querySelectorAll('.friday');
    let backgroundColor = 'rgb(238,238,238)';
    let setNewColor = 'green';

    fridayButton.addEventListener('click', function() {
        for (let index = 0; index < fridays.length; index += 1) {
            if (fridays[index].style.backgroundColor === setNewColor) {
                fridays[index].style.backgroundColor = backgroundColor;
            } else {
                fridays[index].style.backgroundColor = setNewColor;
            }
        }
    })
}

displayFridays();

function zoomIn() {
    let days = document.querySelector('#days')

    days.addEventListener('mouseover', function(event) {
        event.target.style.fontSize = '30px';
        event.target.style.fontWeight = '600';
    })
}

function zoomOut() {
    let days = document.querySelector('#days')

    days.addEventListener('mouseout', function(event) {
        event.target.style.fontSize = '20px';
        event.target.style.fontWeight = '200';
    })
}

zoomIn();
zoomOut();

function customTask(task) {
    let taskFather = document.querySelector('.my-tasks');
    let newTaskElement = document.createElement('span');

    newTaskElement.innerText = task;
    taskFather.appendChild(newTaskElement);
}

customTask('Estudar');


