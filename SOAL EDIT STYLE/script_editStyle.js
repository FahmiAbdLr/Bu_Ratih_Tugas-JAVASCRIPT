function prosesEdit() {
    //Mengambil nilai
    var width = document.getElementById('width').value;
    var height = document.getElementById('height').value;
    var warna = document.getElementById('backgroundColor').value;
    var text = document.getElementById('input-text').value;
    var warnaText = document.getElementById("warna-text").value;

    //Edit
    document.getElementById('square').style.width = width + "%";
    document.getElementById('square').style.height= height + "%" ;
    document.getElementById('square').style.backgroundColor = warna;
    document.getElementById('square').innerHTML = text;
    document.getElementById('square').style.color = warnaText;
    document.getElementById('square').style.textAlign = "center";  
}