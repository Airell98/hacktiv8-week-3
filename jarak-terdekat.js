function targetTerdekat(arr) {
	// you can only write your code here!
	var a = [];
	var b = [];
	var c = [];
	// Menemukan index dari huruf x
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] == 'x') {
			a.push(i);
		}
	}

	// Menemukan index dari huruf o
	for (var j = 0; j < arr.length; j++) {
		if (arr[j] == 'o') {
			b.push(j);
		}
	}

	// Proses pengurangan antara kotak a dan kotak b
	for (var d = 0; d < a.length; d++) {
		for (var e = 0; e < b.length; e++) {
			if (a[d] > b[e]) {
				c.push(a[d] - b[e]);
			} else {
				c.push(b[e] - a[d]);
			}
		}
	}

	//Pembuatan hasil 0 jika x atau o tidak ditemukan dalam satu kotak
	for (var cek1 = 0; cek1 <= a.length; cek1++) {
		if (a.length === 0) {
			c.push(0);
		}
	}

	for (var cek2 = 0; cek2 <= b.length; cek2++) {
		if (b.length === 0) {
			c.push(0);
		}
	}

	//Sorting hasil dari pengumpulan data di kotak c
	for (var i = 0; i < c.length; i++) {
		var nomor = c[i];
		for (var j = 0; j < c.length - 1; j++) {
			var nomor = c[j];
			if (c[j] > c[j + 1]) {
				c[j] = c[j + 1];
			}
			if (c[j] == c[j + 1]) {
				c[j + 1] = nomor;
			}
		}
	}

	// return hasil untuk jawaban soal
	var hasil = c[0];
	return hasil;
}

// TEST CASES

console.log(targetTerdekat([ ' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x' ])); // 3
console.log(targetTerdekat([ 'o', ' ', ' ', ' ', 'x', 'x', 'x' ])); // 4
console.log(targetTerdekat([ 'x', ' ', ' ', ' ', 'x', 'x', 'o', ' ' ])); // 1
console.log(targetTerdekat([ ' ', ' ', 'o', ' ' ])); // 0
console.log(targetTerdekat([ ' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x' ])); // 2
