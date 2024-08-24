function toggleCertificate(certId) {
    var certElement = document.getElementById(certId);
    if (certElement.style.display === "none") {
        certElement.style.display = "block";
    } else {
        certElement.style.display = "none";
    }
}
