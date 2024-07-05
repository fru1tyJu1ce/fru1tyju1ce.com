
LASTPOS = 'ss';

BASEPATHEYS = 'res/img/'

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
    const fru1t = document.getElementById('fru1timg');
    const rect = fru1t.getBoundingClientRect();
    var pos = '';

    if (x < rect.left) pos += 'l';
    else if (x > rect.right) pos += 'r';
    else pos += 's';

    if (y < rect.top) pos += 't';
    else if (y > rect.bottom) pos += 'b';
    else pos += 's';

    return pos;
}

function changeEyeSbyPos(pos) {
    const fru1timg = document.getElementById('fru1timg');

    var path = BASEPATHEYS;
    switch (pos) {
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
    fru1timg.src = path;
}

document.addEventListener('mousemove', (event) => {
    //var pos = checkRelativeCursorPos(event.clientX, event.clientY);
    //changeEyeSbyPos(pos);
});