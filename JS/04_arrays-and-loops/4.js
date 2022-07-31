let weekdays = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 
'Воскресенье']
day = 3;

for (let i in roadMines) {
        console.log(i + ' ' + weekdays[(i - 1 + day) % 7]);
}