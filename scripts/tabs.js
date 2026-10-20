function openTab(evt, tabName) {
    var i, submitform, formText, tabcontent, tablinks;
    var lang = language;

    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tab-links");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
    switch(lang) {
        case "pt":
            formText = "Submeter "+(tabName=="Properties"?"Propriedades":"Compradores");
            break;
        case "en":
        default:
            formText = "Submit "+(tabName=="Properties"?"Properties":"Buyers");
            break;
    }
    document.getElementById("SubmitText").innerText = formText;
    evt.currentTarget.className += " active";
}