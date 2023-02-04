// Every function and object in javascript has an property called prototype.

function workshop1(teacher) {
    this.teacher = teacher;
}
workshop1.prototype.ask = function (question) {
    console.log(this.teacher,question)
}

const obj = new workshop1('Kyle')
obj.ask('Is prototype a class');


Array.prototype.add = function () {
    var a = [1,2,3,4]
    const val = a.reduce((acc,crr)=> acc + crr)
    console.log(val)    
}  