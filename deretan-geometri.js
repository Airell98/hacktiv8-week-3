function tentukanDeretGeometri(arr) {
    // you can only write your code here!
    var hasil;
	for (var a = arr.length - 1; a >= 0; a--) {
		if (arr[a] / arr[a - 1] == arr[a - 1] / arr[a - 2]) {
			hasil = true;
		} else {
			hasil = false;
		}
		return hasil;
	}
  }
  
  // TEST CASES
  console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
  console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
  console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
  console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
  console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false