var MODE = checkDarkMode();
var TEXTCOLOR;
const STYLE = document.createElement('link');
const COLORS = document.createElement('link');
const ICONS = document.createElement('link');
const MODEICON = document.getElementById('mode-icon');
// MOVING EYES

BASEPATH = './res/img/usrimg/';


function checkRelativeCursorPos(x, y) {
    const usrimg = document.getElementById('usrimg');
    const rect = usrimg.getBoundingClientRect();
    var pos = '';

    /* 
    console.log('x: ' + x + ' y: ' + y) // DEBUG
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
    colors: ['black'],
    stroke: {
        width: 0 // this removes the border
    },
    markers: {
        size: 0
    },
    fill: {
        opacity: 0.69,
        colors: ['#0fa']
    },
    series: [{
        name: '%',
        data: [95, 50, 95, 70],

    }],
    chart: {
        height: 320,
        type: 'radar',
        toolbar: {
            show: false
        }
    },
    title: {
        text: ''
    },
    yaxis: {
        stepSize: 100,
        show: false  
    },
    xaxis: {
        show: false,
        labels: {
            style: {
                colors: [TEXTCOLOR, TEXTCOLOR, TEXTCOLOR, TEXTCOLOR], 
                fontFamily: 'Roboto_Mono'
            },
        },
    },
    plotOptions: {
        radar: {
            polygons: {
                strokeColors: 'transparent', 
                connectorColors: TEXTCOLOR,
                fill: {
                    colors: ['transparent', 'transparent'] 
                }
            }
        }
    },
};

var chart = new ApexCharts(document.querySelector("#chart"), options);


// Load dark/light mode

//https://encycolorpedia.de/f6f3ed


function checkDarkMode() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return true;
    } else {
        return false;
    }
}

function changeMode() {

    if (MODE) {
        COLORS.setAttribute('rel', 'stylesheet');
        COLORS.setAttribute('href', 'style/dark.css');
        ICONS.setAttribute('rel', 'stylesheet');
        ICONS.setAttribute('href', 'style/dark-icons.css')
        MODEICON.classList.remove('bx-moon');
        MODEICON.classList.add('bx-sun');
        TEXTCOLOR = '#f1f1f1';
    }
    else {
        COLORS.setAttribute('rel', 'stylesheet');
        COLORS.setAttribute('href', 'style/light.css')
        ICONS.setAttribute('rel', 'stylesheet');
        ICONS.setAttribute('href', 'style/light-icons.css')
        MODEICON.classList.remove('bx-sun');
        MODEICON.classList.add('bx-moon');
        TEXTCOLOR = '#1c1c1c';
    }
    MODE = !MODE;
    document.head.appendChild(COLORS);
    document.head.appendChild(ICONS);

    chart.updateOptions({
        plotOptions: {
            radar: {
                polygons: {
                    strokeColors: 'transparent',
                    connectorColors: TEXTCOLOR,
                    fill: {
                        colors: ['transparent', 'transparent']
                    }
                }
            }
        },
        xaxis: {
            show: false,
            labels: {

                style: {

                    colors: [TEXTCOLOR, TEXTCOLOR, TEXTCOLOR, TEXTCOLOR]
                }
            },                                                       
            categories: ['Systems Engineer', 'Manager', 'Software Engineer', 'DevOps E.']
        },
    });
}

chart.render();
changeMode();

// Events
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    if (MODE != checkDarkMode) changeMode()
});


// Monatsberichte c.a 2 Seiten 
// 1. Monatsbericht Organigram 
// keine ich-form, es wurde gemacht ... 