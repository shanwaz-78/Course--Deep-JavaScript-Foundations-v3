function ask(question) {
    console.log(this.teacher,question)
}

var workshop1 = {
    teacher : 'Kyle',
    ask,
};

var workshop2 = {
    teacher : 'Suzy',
    ask,
};

workshop1.ask('This is Implicit Binding');
workshop2.ask('This is Implicit Binding');