let edit = false;
let indeks = 0;
Tambah = () => {
    edit = false;
    //mengosongkan form
    document.getElementById('nama').value = "";
    document.getElementById('jurusan').value = "";
    document.getElementById('alamat').value = "";
}
Edit = (index) => {
    edit = true;
    indeks = index;
    let table = document.getElementById('tabel-siswa');
    // mengambil data dari  tabel
    let nama = table.rows[index].cells[0].innerHTML;
    let jurusan = table.rows[index].cells[1].innerHTML;
    let alamat = table.rows[index].cells[2].innerHTML;

    //memasukkan data ke form
    document.getElementById('nama').value = nama;
    document.getElementById('jurusan').value = jurusan;
    document.getElementById('alamat').value = alamat;
}

Simpan = () => {
    let table = document.getElementById('tabel-siswa');
    //menampuang data dari form
    let nama = document.getElementById('nama').value;
    let jurusan = document.getElementById('jurusan').value;
    let alamat = document.getElementById('alamat').value;
        
    // jika aksinya edit
    if(edit){
        table.rows[indeks].cells[0].innerHTML = nama;
        table.rows[indeks].cells[1].innerHTML = jurusan;
        table.rows[indeks].cells[2].innerHTML = alamat;
    //jika aksinya tambah
    }else{
        let element = "";
        element += "<tr>";
        element += "<td>"+nama+"</td>";
        element += "<td>"+jurusan+"</td>";
        element += "<td>"+alamat+"</td>";
        element += "<td>";
        element += '<button type="button" class="btn btn-sm btn-info" data-toggle="modal" data-target="#modal" ';
        element += 'onclick="Edit(this.parentElement.parentElement.rowIndex)">Edit</button>';
        element += '<button type="button" class="btn btn-sm btn-danger" ';
        element += 'onclick="Hapus(this.parentElement.parentElement.rowIndex)">Hapus</button>';
        element += "</td>";
        element += "</tr>";
        table.innerHTML += element;
    }
}

Hapus = (index) => {
    let tabel = document.getElementById('tabel-siswa');
        tabel.deleteRow(index);
}
