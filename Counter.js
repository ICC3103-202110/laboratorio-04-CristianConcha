
function view(counter) {
    return `   Counter: ${counter}\n\n     
    (+) (-)\n\n
    (q) for quit\n`;
}
function update(msg, counter) {

    if (msg === '+') return ++counter;
    else if (msg === '-') return --counter;
    else if (msg === 'q') return false;  
    else return counter;  
}

function app (counter){

    while (true) {
        
        const currentView = view(counter);
        console.clear();
        console.log(currentView);

        const prompt = require('prompt-sync')();
        const msg = prompt('What would you do? ');
        counter = update(msg, counter);

        if (counter === false) break;

    }
}
app(0);

