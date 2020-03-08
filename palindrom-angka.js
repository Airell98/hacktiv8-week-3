// palindrom - angka
function angkaPalindrome(num) {
	// you can only write your code here!
	if (num < 9) {
		num++;
	} else {
		do {
			var angka1 = '';
			var angka2 = '';
			num++;
			var str = num.toString();

			for (var a = 0; a < str.length; a++) {
				angka1 += str[a];
			}

			for (var b = str.length - 1; b >= 0; b--) {
				angka2 += str[b];
			}
		} while (angka1 != angka2);
	}
	return num;
}

//   // TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
