function toggleCertificate(certId) {
    var certElement = document.getElementById(certId);
    if (certElement.style.display === "none") {
        certElement.style.display = "block";
    } else {
        certElement.style.display = "none";
    }
}

function clickCertificate(certId){
    if(certId=="cert1"||certId=="cert2"){
        toggleCertificate("cert1");
        toggleCertificate("cert2");
    }
    else if(certId=="cert3"||certId=="cert4"){
        toggleCertificate("cert3");
        toggleCertificate("cert4");
    }
    else if(certId=="cert5"||certId=="cert6"){
        toggleCertificate("cert5");
        toggleCertificate("cert6");
    }
    else if(certId=="cert7"||certId=="cert8"){
        toggleCertificate("cert7");
        toggleCertificate("cert8");
    }
}
