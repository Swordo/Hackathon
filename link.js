var argStack = [];
var peek;

function createStack(num) {
    argStack.push(num);
}

function poping() {
    argStack.pop();
}

function peek() {
    return argStack[argStack.length - 1];
}

function traverse() {
    for (let i = 0; i < argStack.length; i++) {
        console.log(argStack[i]);
    }
}


