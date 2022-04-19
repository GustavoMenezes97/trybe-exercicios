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