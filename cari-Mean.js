function cariMean(arr) {
	// you can only write your code here!
	var kotak = [];

	for (var a = 0; a < arr.length; a++) {
		kotak.push(arr[a]);
	}
	var kosong = 0;
	for (var b = 0; b < kotak.length; b++) {
		kosong += kotak[b];
	}
	var hasil = kosong / kotak.length;
	var akhir = Math.round(hasil);
	return akhir;
}

// TEST CASES
console.log(cariMean([ 1, 2, 3, 4, 5 ])); // 3
console.log(cariMean([ 3, 5, 7, 5, 3 ])); // 5
console.log(cariMean([ 6, 5, 4, 7, 3 ])); // 5
console.log(cariMean([ 1, 3, 3 ])); // 2
console.log(cariMean([ 7, 7, 7, 7, 7 ])); // 7
