let first = [];
let last = [];
let Img = [];
let Memmory = [0, 0, 0]
let count = 0;

let saniye = document.getElementById('saniye');
let time = 25;

saniye.innerHTML = `00:${time} Saniyeniz var`;

bitdi = setInterval(second, 1000);

function second() {
    time--;
    saniye.innerHTML = `00:${time} Saniyeniz var`;
    if (time == 0) {
        clearInterval(bitdi)
        saniye.innerHTML = `00:${time} Vaxtiniz bitdi`
        hide()
    }
}

table();
function table() {
    let k = 1;
    for (let i = 0; i < 16; i++) {
        k = k > 8 ? 1 : k
        first[i] = k++;
    }

    for (let i = 0; i < 4; i++) {
        last[i] = [];
        Img[i] = [];
        for (let j = 0; j < 4; j++) {
            let rnd = Math.floor(Math.random() * first.length);
            last[i][j] = first[rnd];
            Img[i][j] = first[rnd];
            first.splice(rnd, 1);
        }
    }
}

table2();
function table2() {
    let table = document.getElementById('table');
    let tr = "";
    for (let i = 0; i < 4; i++) {
        tr += `<tr/>`;

        for (let j = 0; j < 4; j++) {
            tr += `<td> <img id="A${i},${j}" onclick='Click(${i},${j})' src='assets/${last[i][j]}.jpg'> </td>`;
        };

        tr += '<tr/>';

    }
    table.innerHTML = tr;
}

setTimeout(hide, 2000);

function hide() {

    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            last[i][j] = 0;
        }
        table2()
    }

}

function Click(i, j) {
    last[i][j] = Img[i][j];

    finish();

    table2();

    if (Memmory[2] == 0) {
        Memmory[0] = i;
        Memmory[1] = j;
        Memmory[2] = Img[i][j];
    } else {
        if (Memmory[2] != Img[i][j]) {
            last[i][j] = 0;
            last[Memmory[0]][Memmory[1]] = 0
            setTimeout(() => {
                table2()
            }, 500);
        } else {
            count++;
            console.log(count);
            finish();
            document.getElementById("A" + i + ',' + j).removeAttribute('onclick');
            document.getElementById("A" + Memmory[0] + ',' + Memmory[1]).removeAttribute('onclick');
        }
        Memmory[2] = 0;
    }
}

function finish() {
    if (count == 8) {
        alert("Təbriklər qalib gəldiniz")
        hide();
        count = 0;
    }
}