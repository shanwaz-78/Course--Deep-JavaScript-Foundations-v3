// (Super) keyword, If you have a child class that defines a method of the same name as a parent class then we have to use Super Keyword.

class workshop{
    constructor(teacher){
        this.teacher = teacher;
    }
    ask(question){
        console.log(this.teacher,question)
    }
}

class Anotherworkshop extends workshop{
 ask(msg){
    super.ask(msg)

 }
}

const obj = new Anotherworkshop('Kyle');
obj.ask('This is without super')


 // Implicit Binding;
function fn(question) {
    console.log(this.teacher,question)
}

var workshop1 = {
    teacher : 'Jemes',
    fn,
}

var workshop2 = {
    teacher : 'Suzy',
    fn,
}

// workshop1.fn("This is workkng")
fn.call(workshop1,'That Explicit is working')