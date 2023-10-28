let temp = 0; // untuk menyimpan angka sementara
let opr = ''; // untuk menyimpan operasi sementara
// fungsi untuk menampilkan angka ke display
ShowNumber = (number) => {
    let screen = document.getElementById('screen').value;
    // jika tampilan display masih kosong, 
    // maka angka langsung ditambahkan
    // Number(..) digunakan untuk konversi ke tipe numeric
    if(Number(screen) == 0){
        document.getElementById('screen').value = number;
        // jika display sudah ada angkanya,
        // maka angka digabungkan
    }else{
        document.getElementById('screen').value += number;
    }
 }
Operation = (operator) => {
    // mengambil nilai dari display
    let screen = document.getElementById('screen').value;
    // jika nilai temp masing kosong, maka
    // nilai temp akan diisi dengan angka yang ada di display
    if(temp == 0){
        temp = Number(screen);
        // jika nilai temp sudah ada,
        // maka nilai temp akan diolah sesuai dengan operasi yang ada
    }else{
        if(opr == '+'){
            temp += Number(screen);
        }
        else if(opr == '-'){
            temp -= Number(screen);
        }
        else if(opr == '*'){
            temp *= Number(screen);
        }
        else if(opr == '/'){
            if(Number(screen) == 0){
              alert('Cannot devide by zero');
            }else{
              temp /= Number(screen);
            }
        }
    }
    opr = operator;
    // ketika tombol operator diklik maka tampilan display akan kosong
    document.getElementById('screen').value = "";
}

ShowResult = () => {
// fungsi untuk tombol sama dengan (=)
// ketika fungsi ini dipanggil maka akan display menampilkan 
// hasil perhitungan
    let screen = document.getElementById('screen').value;
    if(opr == '+'){
        temp += Number(screen);
        document.getElementById('screen').value = temp;
    }
    else if(opr == '-'){
        temp -= Number(screen);
        document.getElementById('screen').value = temp;
    }
    else if (opr == '*') {
        temp *= Number(screen);
        document.getElementById('screen').value = temp;
    }
    else if(opr == '/'){
        if (Number(screen) == 0) {
            alert('Cannot devide by zero');
        } else {
            temp /= Number(screen);
            document.getElementById('screen').value = temp;
        }
    }
}

Reset = () => { // fungsi untuk mereset calculator
    temp = 0;
    document.getElementById('screen').value = "";
}
