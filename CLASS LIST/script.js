function changeBackground(color) {
    let element = document.getElementById('pesan');
    element.className = '';
    element.classList.add("alert");
    element.classList.add("alert-" + color);
}