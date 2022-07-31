let roadMines = [false, true, false, true, false, false, false, false, false, false];
let fire = 0;

for (let i in roadMines) {
    console.log('Танк переместился на позицию: ' + (Number(i) + 1));

    if (roadMines(i) == true) {
        fire++;
        console.log('Попали');

        if (fire >= 2) {
            console.log('Танк убит');
            break
        }
    }
}
