
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

