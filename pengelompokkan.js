function groupAnimals(animals) {
	// you can only write your code here!   //ayam, cacing, kuda, anoa, kancil

	var kata;
	// sorting nama- nama hewannya dari a - z
	for (var i = 0; i < animals.length; i++) {
		kata = animals[i];
		for (var j = i; j <= i + 1; j++) {
			if (animals[i] > animals[j]) {
				animals[i] = animals[j];
			}
			if (animals[i] === animals[j]) {
				animals[j] = kata;
			}
		}
	}

	for (var a = 0; a < animals.length; a++) {
		kata = animals[a];
		for (var b = a; b <= a + 1; b++) {
			if (animals[a] > animals[b]) {
				animals[a] = animals[b];
			}
			if (animals[a] === animals[b]) {
				animals[b] = kata;
			}
		}
	}
	//Pengelompokkan multi dimension //ayam, anoa, cacing, kancil,kuda
	var kotak = [];
	var temp = animals.length;

	for (var i = 0; i < temp; i++) {
		var check = true;
		for (var j = 0; j < kotak.length; j++) {
			if (animals[i][0] == kotak[j][0][0]) {
				check = false;
				kotak[j].push(animals[i]);
			}
		}
		if (check) {
			kotak.push([ animals[i] ]);
		}
	}
	return kotak;
}

// TEST CASES
console.log(groupAnimals([ 'cacing', 'ayam', 'kuda', 'anoa', 'kancil' ]));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals([ 'cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
//   // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
