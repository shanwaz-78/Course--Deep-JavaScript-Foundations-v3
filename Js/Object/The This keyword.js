function ask(question) {
    console.log(this.teacher,question) // In (this) keyword its not matter where i call it from its matter how i call it.
};

function OtherClass() {
    var mycontext = {
        teacher : 'Suzy'
    } // Explicit Binding because of call method.
    ask.call(mycontext,'why') // In Mycontxt there is a variable and thats gonna be add into ask function bcz i sent it in ask function using call.
}
OtherClass()