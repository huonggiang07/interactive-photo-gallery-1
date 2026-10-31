function upDate(previewPic) {
    console.log("Đã di chuột vào ảnh:", previewPic.alt);

    var khungHienThi = document.getElementById('image');

    // Cập nhật dòng chữ
    khungHienThi.innerHTML = previewPic.alt;
    khungHienThi.style.color = "#fff";
    khungHienThi.style.textShadow = "1px 1px 5px rgba(0,0,0,0.9)";

    // Cập nhật ảnh nền
    khungHienThi.style.backgroundImage = "url('" + previewPic.src + "')";
}

function unDo() {
    var khungHienThi = document.getElementById('image');

    // Trả về mặc định
    khungHienThi.style.backgroundImage = "url('')";
    khungHienThi.style.color = "#333";
    khungHienThi.style.textShadow = "none";
    khungHienThi.innerHTML = "Di chuột qua một hình ảnh bên dưới để hiển thị ở đây.";
}