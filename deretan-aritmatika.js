function tentukanDeretAritmatika(arr) {
	// you can only write your code here!
	var hasil;
	for (var a = arr.length - 1; a >= 0; a--) {
		if (arr[a] - arr[a - 1] == arr[a - 1] - arr[a - 2]) {
			hasil = true;
		} else {
			hasil = false;
		}
		return hasil;
	}
}

// TEST CASES
console.log(tentukanDeretAritmatika([ 1, 2, 3, 4, 5, 6 ])); // true
console.log(tentukanDeretAritmatika([ 2, 4, 6, 12, 24 ])); // false
console.log(tentukanDeretAritmatika([ 2, 4, 6, 8 ])); // true
console.log(tentukanDeretAritmatika([ 2, 6, 18, 54 ])); // false
console.log(tentukanDeretAritmatika([ 1, 2, 3, 4, 7, 9 ])); // false
