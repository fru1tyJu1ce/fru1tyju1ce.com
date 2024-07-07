
LASTPOS = 'ss';

BASEPATH = 'res/img/'

POS0 = 'cctv_pos0.png';
POS1 = 'cctv_pos1.png';
POS2 = 'cctv_pos2.png';
POS3 = 'cctv_pos3.png';
POS4 = 'cctv_pos4.png';


function checkRelativeCursorPos(x, y) {
    const usrmimg = document.getElementById('usrmimg');
    const rect = usrmimg.getBoundingClientRect();
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

    var path = BASEPAT;
    switch (pos) {
        case 'st':
            path += POS0;
            break;
        case 'sb':
            path += POS1;
            break;
        case 'ls':
            path += POS2;
            break;
        case 'rs':
            path += POS3;
            break;
        case 'lt':
            path += POS4;
            break;
        default:
            path += POS0;
            break;
    }
    fru1timg.src = path;
}

document.addEventListener('mousemove', (event) => {
    var pos = checkRelativeCursorPos(event.clientX, event.clientY);
    console.log(pos);
    //changeEyeSbyPos(pos);
});