const SIForm = document.getElementById("SIForm");
SIForm.addEventListener('submit', function(sub1) {
    sub1.preventDefault();

    const SIname = document.getElementById("SIname").value;
    const SIpassword = document.getElementById("SIpassword").value;
    const SIemailValidation = /^[a-zA-z0-9._-]+@[a-zA-z0-9._-]+\.[a-zA-Z]{2,4}$/;

    if (SIemailValidation.test(SIname)) {
        document.getElementById("spanName").innerHTML = '';
    } else {
        document.getElementById("spanName").innerHTML = 'Введен некорректный email';
    }

    if (document.getElementById("SIpassword").value == '' || SIpassword.length < 8) {
        document.getElementById("spanPassword").innerHTML = 'Введите пароль (не менее 8 символов)';
        return false;
    } else if (document.getElementById("SIname").value == '') {
        document.getElementById("spanName").innerHTML = 'Введите логин';
    } else {
        document.getElementById("spanPassword").innerHTML = '';
        alert('Вход выполнен');
    }
});

window.onload = () => {
    const uploadFile = document.getElementById("uploadFileSI");
    const upload = document.getElementById("uploadSI");
    const spanFile = document.getElementById("spanFileSI");

    upload.addEventListener("click", function() {
        uploadFile.click();
    });

    uploadFile.addEventListener("change", function() {
        if (uploadFile.value) {
            spanFile.innerText = uploadFile.value.match(/[\/\\]([\w\d\s\.\-(\)]+)$/)[1];
        } else {
            spanFile.innerText = "Файл не выбран"
        }
    });
}