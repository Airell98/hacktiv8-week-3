function tantangan1(kata){
    var char = '';
    for(var i = kata.length -1; i >= 0; i--){
        char += kata[i]
    }
    return char;
}

console.log(tantangan1('hello world!'))