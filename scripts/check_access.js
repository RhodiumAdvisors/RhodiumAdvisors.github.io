const hash = "c88a8f2237db484f2764cea7af1e03b5ddf669bd05cf4ab9e5271c74502f06b9";

const language = document.documentElement.lang;
const notification = document.getElementById("Notification");

function setCookie(name, value, days) {
  const d = new Date();
  d.setTime(d.getTime() + (days*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie(name) {
  var cookie = name + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(cookie) == 0) {
      return c.substring(cookie.length, c.length);
    }
  }
  return "";
}

async function sha256Hex(message) {
  const bytes = new TextEncoder().encode(message);
  const hash = await crypto.subtle.digest("SHA-256", bytes);
  return Array.from(new Uint8Array(hash), b => b.toString(16).padStart(2, "0")).join("");
}

async function checkHash(msg) {
    const pswd = await sha256Hex(prompt(msg));
    return pswd == hash;
}

async function requestAccess(lang) {
    notification.style.display = "block";
    notification.className = "notification";
    var headerText, bodyText;

    switch(lang) {
        case "pt":
            headerText = "A verificar as suas credênciais...";
            bodyText = "Introduza a palavra-chave para ganhar acesso a esta página:";
            break;
        case "en":
        default:
            headerText = "Checking your credentials...";
            bodyText = "Insert the password to gain access to this page:";
            break;
    }

    notification.getElementsByClassName("notification-header")[0].getElementsByTagName("h2")[0].innerText = headerText;
    notification.getElementsByClassName("notification-body")[0].getElementsByTagName("p")[0].innerText = bodyText;
    notification.getElementsByClassName("notification-footer")[0].innerHTML = "";

    
    if(await checkHash(bodyText)) {
        grantAccess(lang);
    }
    else {
        denyAccess(lang);
    }
}

function grantAccess(lang) {
    notification.style.display = "block";
    notification.className = "notification";
    var headerText, bodyText;

    switch(lang) {
        case "pt":
            headerText = "Acesso permitido!";
            bodyText = "Por favor desfrute da versão beta da Lista - powered by Rhodium Advisors!\nBugs encontrados e sugestões podem ser enviadas por email para info@rhodiumadvisors.com.";
            break;
        case "en":
        default:
            headerText = "Access granted!";
            bodyText = "Please enjoy the beta version of The List - powered by Rhodium Advisors!\nBug reports and suggestions can be sent via email to info@rhodiumadvisors.com.";
            break;
    }

    notification.getElementsByClassName("notification-header")[0].getElementsByTagName("h2")[0].innerText = headerText;
    notification.getElementsByClassName("notification-body")[0].getElementsByTagName("p")[0].innerText = bodyText;
    notification.getElementsByClassName("notification-footer")[0].innerHTML = "";
    const okButton = document.createElement("button");
    okButton.innerText = "Ok";
    okButton.onclick = function() { notification.style.display = "none"; };
    notification.getElementsByClassName("notification-footer")[0].appendChild(okButton);

    setCookie("has-beta-access", true, 30);
}

function denyAccess(lang) {
    var messageText, location;

    switch(lang) {
        case "pt":
            messageText = "Acesso rejeitado!\nConfirme se introduziu a palavra-chave corretamente, e se recebeu um convite para esta beta.";
            location = "https://www.rhodiumadvisors.com/";
            break;
        case "en":
        default:
            messageText = "Access rejected!\nPlease confirm that introduced the correct password, and that you were invited to this beta teste.";
            location = "https://www.rhodiumadvisors.com/en/";
            break;
    }

    alert(messageText);
    window.location.href = location;
}

if(!getCookie("has-beta-access")) {
    requestAccess(language);
}
//setCookie("has-beta-access",false,0)