//MOVING EYES

LASTPOS = 'ss';

BASEPATH = '/res/img/usrimg_dynamic/';

ZZ = 'ZZ.png';
SS = 'SS.png';
ST = 'ST.png';
SB = 'SB.png';
SL = 'SL.png';
SR = 'SR.png';
LT = 'LT.png';
LB = 'LB.png';
RT = 'RT.png';
RB = 'RB.png';


function checkRelativeCursorPos(x, y) {
    const usrimg = document.getElementById('usrimg');
    const rect = usrimg.getBoundingClientRect();
    var pos = '';

    console.log('x: ' + x + ' y: ' + y)
    console.log('r: ' + rect.right + ' l: ' + rect.left)
    console.log('t: ' + rect.top + ' b: ' + rect.bottom)


    if (x < rect.right - (rect.width / 3) && x > rect.left + (rect.width / 3) && y > rect.top + (rect.height / 3) && y < rect.bottom - (rect.width / 3)) {
        return 'zz';
    }

    if (x < rect.left) pos += 'l';
    else if (x > rect.right) pos += 'r';
    else pos += 's';

    if (y < rect.top) pos += 't';
    else if (y > rect.bottom) pos += 'b';
    else pos += 's';

    return pos;
}

function changeEyeSbyPos(pos) {
    const usrimg = document.getElementById('usrimg');

    var path = BASEPATH;
    switch (pos) {
        case 'zz':
            path += ZZ;
            break;
        case 'st':
            path += ST;
            break;
        case 'sb':
            path += SB;
            break;
        case 'ls':
            path += SL;
            break;
        case 'rs':
            path += SR;
            break;
        case 'lt':
            path += LT;
            break;
        case 'lb':
            path += LB;
            break;
        case 'rt':
            path += RT;
            break;
        case 'rb':
            path += RB;
            break;
        default:
            path += SS;
            break;
    }
    usrimg.src = path;
}

document.addEventListener('mousemove', (event) => {
    var pos = checkRelativeCursorPos(event.clientX, event.clientY);
    changeEyeSbyPos(pos);
});


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
    }, delay );
}

let multilineString = 
`
                    'c.          Vadim@crck-mini.local 
                 ,xNMM.          --------------------- 
               .OMMMMo           OS: macOS 14.5 23F79 arm64 
               OMMM0,            Host: Mac14,3 
     .;loddo:' loolloddol;.      Kernel: 23.5.0 
   cKMMMMMMMMMMNWMMMMMMMMMM0:    Uptime: 1 day, 3 hours, 19 mins 
 .KMMMMMMMMMMMMMMMMMMMMMMMWd.    Packages: 48 (brew) 
 XMMMMMMMMMMMMMMMMMMMMMMMX.      Shell: zsh 5.9 
;MMMMMMMMMMMMMMMMMMMMMMMM:       Resolution: 1920x1080, 1920x1080 
:MMMMMMMMMMMMMMMMMMMMMMMM:       DE: Aqua 
.MMMMMMMMMMMMMMMMMMMMMMMMX.      WM: Quartz Compositor 
 kMMMMMMMMMMMMMMMMMMMMMMMMWd.    WM Theme: Blue (Dark) 
 .XMMMMMMMMMMMMMMMMMMMMMMMMMMk   Terminal: Apple_Terminal 
  .XMMMMMMMMMMMMMMMMMMMMMMMMK.   Terminal Font: AndaleMono 
    kMMMMMMMMMMMMMMMMMMMMMMd     CPU: Apple M2 
     ;KMMMMMMMWXXWMMMMMMMk.      GPU: Apple M2 
       .cooc,.    .,coo:.        Memory: 1447MiB / 8192MiB
`

typeToterminal(multilineString, 2);