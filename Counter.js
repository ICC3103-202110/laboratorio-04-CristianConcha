
const view = counter => counter;

const update = (msg, counter) => {
    
    if (msg === '+') return counter++;
    else if (msg === '-') return counter--;
    else return counter;
        
}

