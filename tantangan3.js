var input = [ '0001', 'Roman Alamsyah', 'Bandar Lampung', '21/05/1989', 'Membaca' ];

function dataHandling2(kata) {
	kata.splice(1, 2, 'Roman Alamsyah Elsharawy', 'Provinsi Bandar Lampung');
	kata.splice(4, 1, 'Pria', 'SMA Internasional Metro');
	var nama = kata[1].slice(0, 14);
	var pisah = kata[3].split('/');
	var pisahSortJoin = pisah.join('-');
	var pisahSort = pisah.sort((a, b) => b.length - a.length);
	var bulan = pisahSort[2];

	switch (bulan) {
		case '01':
			bulan = 'Januari';
			break;
		case '02':
			bulan = 'Febuari';
			break;
		case '03':
			bulan = 'Maret';
			break;
		case '04':
			bulan = 'April';
			break;
		case '05':
			bulan = 'Mei';
			break;
		case '06':
			bulan = 'Juni';
			break;
		case '07':
			bulan = 'Juli';
			break;
		case '08':
			bulan = 'Agustus';
			break;
		case '09':
			bulan = 'September';
			break;
		case '10':
			bulan = 'Oktober';
			break;
		case '11':
			bulan = 'November';
			break;
		case '12':
			bulan = 'Desember';
			break;
		default:
			bulan = '';
			break;
	}
	console.log(kata);
	console.log(bulan);
	console.log(pisahSort);
	console.log(pisahSortJoin);
	console.log(nama);
	return '';
}

console.log(dataHandling2(input));
