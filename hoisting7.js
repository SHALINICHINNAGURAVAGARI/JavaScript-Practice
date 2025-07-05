function parent() {
    var hoisted = "I am a variable";
    function hoisted() {
        return "I am a function";
    }
    return hoisted;
}

console.log(parent());