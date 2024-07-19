//MOVING EYES

LASTPOS = 'ss';

BASEPATH = './res/img/usrimg/';


function checkRelativeCursorPos(x, y) {
    const usrimg = document.getElementById('usrimg');
    const rect = usrimg.getBoundingClientRect();
    var pos = '';

    /*
    console.log('x: ' + x + ' y: ' + y)
    console.log('r: ' + rect.right + ' l: ' + rect.left)
    console.log('t: ' + rect.top + ' b: ' + rect.bottom)
    */

    if (x < rect.right - (rect.width / 3) && x > rect.left + (rect.width / 3) && y > rect.top + (rect.height / 3) && y < rect.bottom - (rect.width / 3)) {
        return 'ZZ';
    }

    if (x < rect.left) pos += 'L';
    else if (x > rect.right) pos += 'R';
    else pos += 'S';

    if (y < rect.top) pos += 'T';
    else if (y > rect.bottom) pos += 'B';
    else pos += 'S';

    return pos;
}

function changeEyeSbyPos(pos) {
    const usrimg = document.getElementById('usrimg');
    usrimg.src = BASEPATH + pos + '.png';
}

document.addEventListener('mousemove', (event) => {
    var pos = checkRelativeCursorPos(event.clientX, event.clientY);
    changeEyeSbyPos(pos);
});

// CHART

var options = {
    chart: {
        type: 'radar'
    },
    series: [{
        name: 'sales',
        data: [30, 40, 45, 50, 49, 60, 70, 91, 125]
    }],
    xaxis: {
        categories: ['Development', 'Dev Ops', 'Systems engineering', 'Management'],
        labels: {
            show: true,
            style: {
            colors: ["#a8a8a8"],
            fontSize: "11px",
            fontFamily: 'Arial'
            }
        }
    }
}

/*
options = {
  series: [
    {
      name: "Radar Series 1",
      data: [45, 52, 38, 24, 33, 10]
    },
    {
      name: "Radar Series 2",
      data: [26, 21, 20, 6, 8, 15]
    }
  ],
  labels: ['April', 'May', 'June', 'July', 'August', 'September']
}
*/
var chart = new ApexCharts(document.querySelector("#chart"), options);

chart.render();

// TERMINAL 

function typeToterminal(str, delay, textareaId = 'terminal') {
    let i = 0;
    const area = document.getElementById(textareaId);
    if (!area) {
        console.error('Textarea with specified ID not found.');
        return;
    }

    const intervalId = setInterval(() => {
        if (i < str.length) {
            area.value += str[i];
            i++;
        } else {
            clearInterval(intervalId);
        }
    }, delay);
}

function typeToterminal(str, delay, textareaId = 'terminal') {
    let i = 0;
    const area = document.getElementById(textareaId);
    if (!area) {
        console.error('Textarea with specified ID not found.');
        return;
    }

    const intervalId = setInterval(() => {
        if (i < str.length) {
            area.value += str[i];
            i++;
        } else {
            clearInterval(intervalId);
        }
    }, delay);
}

function renderToterminal(str, delay, textareaId = 'terminal') {
    let lines = str.split('\n');
    let currentLine = 0;
    const area = document.getElementById(textareaId);
    if (!area) {
        console.error('Textarea with specified ID not found.');
        return;
    }

    const intervalId = setInterval(() => {
        if (currentLine < lines.length) {
            area.value += lines[currentLine] + '\n';
            currentLine++;
        } else {
            clearInterval(intervalId);
        }
    }, delay);
}

let neofetchStr =
    `
                        'c.          user@crck-mini.local 
                    ,xNMM.          --------------------- 
                .OMMMMo           OS: macOS 14.5 23F79 arm64 
                OMMM0,            Host: Mac14,3 
        .;loddo:' loolloddol;.      Kernel: 23.5.0 
    cKMMMMMMMMMMNWMMMMMMMMMM0:    Uptime: 69 days, 4 hours, 19 mins 
    .KMMMMMMMMMMMMMMMMMMMMMMMWd.    Packages: 48 (brew) 
    XMMMMMMMMMMMMMMMMMMMMMMMX.      Shell: zsh 5.9 
    ;MMMMMMMMMMMMMMMMMMMMMMMM:       Resolution: 4096x2304, 4096x2304 
    :MMMMMMMMMMMMMMMMMMMMMMMM:       DE: Aqua 
    .MMMMMMMMMMMMMMMMMMMMMMMMX.      WM: Quartz Compositor 
    kMMMMMMMMMMMMMMMMMMMMMMMMWd.    WM Theme: Blue (Dark) 
    .XMMMMMMMMMMMMMMMMMMMMMMMMMMk   Terminal: Apple_Terminal 
    .XMMMMMMMMMMMMMMMMMMMMMMMMK.   Terminal Font: AndaleMono 
        kMMMMMMMMMMMMMMMMMMMMMMd     CPU: Apple M2 
        ;KMMMMMMMWXXWMMMMMMMk.      GPU: Apple M2 
        .cooc,.    .,coo:.        Memory: 1447MiB / 16192MiB
`

let cpp =
    `
    ░▒▓██████▓▒░░▒▓███████▓▒░░▒▓███████▓▒░  
    ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░ 
    ░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░ 
    ░▒▓█▓▒░      ░▒▓███████▓▒░░▒▓███████▓▒░  
    ░▒▓█▓▒░      ░▒▓█▓▒░      ░▒▓█▓▒░        
    ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░        
    ░▒▓██████▓▒░░▒▓█▓▒░      ░▒▓█▓▒░    
`

//typeToterminal(neofetchStr, 1);
renderToterminal(cpp, 69);