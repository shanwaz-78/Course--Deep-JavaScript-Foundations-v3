var workshop = {
    teacher : 'Kyle',
     ask(question){
        setTimeout(() => { // An arrow function does not define this keyword at all.
            console.log(this.teacher,question) // When the arrow function is invoked in (this) keyword it will be refers to that own object workshop. It will be go lexically and set the this keyword in ask function as a parameter.
        }, 100);
     },
};

workshop.ask('This is working.')

// The (This) keyword it wiil go up one level to reslove the this.

var workshop2 = {
    teacher : 'Suzy',
    ask : (question) => {
        console.log(this.teacher,question)
    },
};

workshop2.ask('It is Does Not Working')