function pasanganTerbesar(num) {
	// you can only write your code here!
	var char = '';
	var convert = num.toString();
	for (var i = 0; i < convert.length; i++) {
    if(char < convert[i]+ convert[i+1]){
      char = convert[i] + convert[i+1]
    }
  }
  char = parseInt(char);
  return char;

}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
