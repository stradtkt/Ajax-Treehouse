let xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            document.getElementById('ajax').innerHTML = xhr.responseText;
        } else {
            alert(xhr.statusText);
        }
    }
};
xhr.open('GET', 'sidebar.html');
function sendAJAX() {
    xhr.send();
    document.getElementById('load').style.display = "none";
}