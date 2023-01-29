// It's Exist on other languages but not in JavaScript, It's theorically exist in JavaScript.

var teacher = 'Kyle';

function student(question) { 
    var teacher2 = 'Simon';
    console.log(teacher,question) // It's doesn't work lexically and dont pick up teacher from laxically, hes pickup from line no 10; In Dynamic Scope he checks where was function called from. and he is called from line no. 10 so he he will be pick teacher from that line.
}

function student2() {
    var teacher = 'Suzy';
    student('Desuza') // It checks where was student called from.
}

student2()