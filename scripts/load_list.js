const translate_dict = {
    "pt": {
        "Venda": "Venda",
        "Arrendamento": "Arrendamento",
        "Apartamento": "Apartamento",
        "Moradia": "Moradia",
        "Palacete": "Palacete",
        "Prédio": "Prédio",
        "Hotel": "Hotel",
        "Terreno": "Terreno"
    },
    "en": {
        "Venda": "Sale",
        "Arrendamento": "Rental",
        "Apartamento": "Apartment",
        "Moradia": "House",
        "Palacete": "Mansion",
        "Prédio": "Building",
        "Hotel": "Hotel",
        "Terreno": "Land"
    }
};

const format_dict = {
    "pt": {
        "Venda": " €",
        "Arrendamento": " €/mês"
    },
    "en": {
        "Venda": " €",
        "Arrendamento": " €/month"
    } 
};

const icon_dict = {
    "Apartamento": "<svg fill='#EFBF04' version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 256 209' enable-background='new 0 0 256 209' xml:space='preserve'><g id='SVGRepo_bgCarrier' stroke-width='0'></g><g id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'></g><g id='SVGRepo_iconCarrier'> <path d='M246.125,195.063v-82.688h-63v82.688h-7.875V17.823h-23.625V2.125h-47.25v15.698H80.75v177.24h-7.875V80.875h-63v114.188H2 v11.813h252v-11.813H246.125z M47.281,177.344H35.469v-11.813h11.813V177.344z M47.281,145.844H35.469v-11.813h11.813V145.844z M47.281,114.344H35.469v-11.813h11.813V114.344z M119.141,174.391h-11.813v-11.813h11.813V174.391z M119.141,142.891h-11.813 v-11.813h11.813V142.891z M119.141,111.391h-11.813V99.578h11.813V111.391z M119.141,79.891h-11.813V68.078h11.813V79.891z M150.641,174.391h-11.813v-11.813h11.813V174.391z M150.641,142.891h-11.813v-11.813h11.813V142.891z M150.641,111.391h-11.813 V99.578h11.813V111.391z M150.641,79.891h-11.813V68.078h11.813V79.891z M220.531,177.344h-11.813v-11.813h11.813V177.344z M220.531,145.844h-11.813v-11.813h11.813V145.844z'></path> </g></svg>",
    "Moradia": "<svg fill='#EFBF04' height='200px' width='200px' version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 512 512' xml:space='preserve'><g id='SVGRepo_bgCarrier' stroke-width='0'></g><g id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'></g><g id='SVGRepo_iconCarrier'> <g> <g> <path d='M488.724,442.178h-23.272V210.59l10.581,6.884c3.918,2.551,8.318,3.769,12.669,3.769c7.609,0,15.07-3.728,19.53-10.583 c7.01-10.774,3.958-25.189-6.816-32.2L268.692,27.04c-7.719-5.019-17.67-5.019-25.384,0L10.583,178.46 c-10.775,7.01-13.824,21.426-6.816,32.2c7.01,10.774,21.425,13.825,32.2,6.816l10.578-6.884V442.18H23.273 c-12.851,0-23.272,10.42-23.272,23.272s10.421,23.272,23.272,23.272h46.545h139.635h93.09h139.635h46.545 c12.854,0,23.272-10.42,23.272-23.272C511.996,452.598,501.578,442.178,488.724,442.178z M325.817,442.178h-23.272h-23.272 h-46.545h-23.272h-23.272V310.301c0-12.853,10.421-23.272,23.272-23.272h93.09c12.854,0,23.272,10.42,23.272,23.272V442.178z'></path> </g> </g> </g></svg>",
    "Palacete": "<svg fill='#EFBF04' height='200px' width='200px' version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 512.001 512.001' xml:space='preserve'><g id='SVGRepo_bgCarrier' stroke-width='0'></g><g id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'></g><g id='SVGRepo_iconCarrier'> <g> <g> <path d='M87.772,299.886H65.829H43.886v131.657H21.943C9.826,431.544,0,441.368,0,453.486s9.826,21.943,21.943,21.943h43.886 h80.457v-21.943v-21.943V299.886H87.772z'></path> </g> </g> <g> <g> <path d='M490.057,431.544h-21.943V299.886h-21.943h-21.943h-58.514v131.657v21.943v21.943h80.457h43.886 c12.12,0,21.943-9.825,21.943-21.943S502.179,431.544,490.057,431.544z'></path> </g> </g> <g> <g> <path d='M510.11,225.145L451.596,93.487c-3.521-7.923-11.381-13.03-20.053-13.03h-65.829V58.515 c0-12.118-9.823-21.943-21.943-21.943c-12.117,0-21.943,9.825-21.943,21.943v21.943H80.457c-8.672,0-16.53,5.107-20.051,13.03 L1.892,225.145c-3.018,6.788-2.395,14.642,1.654,20.871c4.045,6.227,10.97,9.985,18.397,9.985h21.943h21.943h21.943h58.514 v-21.943c0-6.908,3.253-13.41,8.777-17.554l5.851-4.389l81.92-61.44c7.803-5.851,18.533-5.851,26.333,0l81.92,61.44l5.851,4.389 c5.525,4.144,8.777,10.647,8.777,17.554v21.943h58.514h21.943h21.943h21.943c7.428,0,14.352-3.758,18.4-9.985 C512.505,239.786,513.127,231.932,510.11,225.145z'></path> </g> </g> <g> <g> <path d='M307.202,234.058l-29.257-21.943L256,195.658l-21.943,16.457L204.8,234.058l-14.629,10.971v10.971v175.543v21.943v21.943 h43.886v-21.943v-21.943v-21.952c0-12.12,9.826-21.943,21.943-21.943c12.121,0,21.944,9.823,21.944,21.943v21.952v21.943v21.943 h43.886v-21.943v-21.943V256.001v-10.971L307.202,234.058z'></path> </g> </g> </g></svg>",
    "Prédio": "<svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'><g id='SVGRepo_bgCarrier' stroke-width='0'></g><g id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'></g><g id='SVGRepo_iconCarrier'> <path d='M11.3196 3H5.08961C3.09961 3 2.09961 4.01 2.09961 6.02V22H7.49961V18.25C7.49961 17.84 7.83961 17.5 8.24961 17.5C8.65961 17.5 8.99961 17.83 8.99961 18.25V22H14.2996V6.02C14.2996 4.01 13.3096 3 11.3196 3ZM10.7496 12.75H5.79961C5.38961 12.75 5.04961 12.41 5.04961 12C5.04961 11.59 5.38961 11.25 5.79961 11.25H10.7496C11.1596 11.25 11.4996 11.59 11.4996 12C11.4996 12.41 11.1596 12.75 10.7496 12.75ZM10.7496 9H5.79961C5.38961 9 5.04961 8.66 5.04961 8.25C5.04961 7.84 5.38961 7.5 5.79961 7.5H10.7496C11.1596 7.5 11.4996 7.84 11.4996 8.25C11.4996 8.66 11.1596 9 10.7496 9Z' fill='#EFBF04'></path> <path d='M23 21.2511H20.73V18.2511C21.68 17.9411 22.37 17.0511 22.37 16.0011V14.0011C22.37 12.6911 21.3 11.6211 19.99 11.6211C18.68 11.6211 17.61 12.6911 17.61 14.0011V16.0011C17.61 17.0411 18.29 17.9211 19.22 18.2411V21.2511H1C0.59 21.2511 0.25 21.5911 0.25 22.0011C0.25 22.4111 0.59 22.7511 1 22.7511H19.93C19.95 22.7511 19.96 22.7611 19.98 22.7611C20 22.7611 20.01 22.7511 20.03 22.7511H23C23.41 22.7511 23.75 22.4111 23.75 22.0011C23.75 21.5911 23.41 21.2511 23 21.2511Z' fill='#EFBF04'></path> </g></svg>",
    "Hotel": "<svg fill='#EFBF04' viewBox='0 -32 576 576' xmlns='http://www.w3.org/2000/svg'><g id='SVGRepo_bgCarrier' stroke-width='0'></g><g id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'></g><g id='SVGRepo_iconCarrier'><path d='M560 64c8.84 0 16-7.16 16-16V16c0-8.84-7.16-16-16-16H16C7.16 0 0 7.16 0 16v32c0 8.84 7.16 16 16 16h15.98v384H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h240v-80c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v80h240c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16h-16V64h16zm-304 44.8c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4zm0 96c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4zm-128-96c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4zM179.2 256h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4c0 6.4-6.4 12.8-12.8 12.8zM192 384c0-53.02 42.98-96 96-96s96 42.98 96 96H192zm256-140.8c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4zm0-96c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4z'></path></g></svg>",
    "Terreno": "<svg fill='#EFBF04' height='200px' width='200px' version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 511.999 511.999' xml:space='preserve'><g id='SVGRepo_bgCarrier' stroke-width='0'></g><g id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'></g><g id='SVGRepo_iconCarrier'> <g> <g> <path d='M510.599,437.069l-17.617-30.516c4.579-1.11,7.98-5.235,7.98-10.155c0-2.131-0.637-4.113-1.732-5.765l-18.916-32.762 c4.864-0.892,8.549-5.154,8.549-10.276c0-2.13-0.636-4.113-1.731-5.765L428.75,240.708c-1.866-3.233-5.315-5.224-9.049-5.224 c-3.732,0-7.183,1.992-9.049,5.224l-13.751,23.817l-50.043-86.089c-1.87-3.218-5.311-5.198-9.034-5.198 c-3.723,0-7.163,1.98-9.034,5.198l-13.888,23.891l-49.685-85.476c-1.87-3.218-5.311-5.198-9.033-5.198 c-3.722,0-7.163,1.98-9.034,5.198l-49.884,85.817l-14.087-24.233c-1.87-3.218-5.311-5.198-9.033-5.198 c-3.722,0-7.163,1.98-9.034,5.198l-50.029,86.068l-13.738-23.796c-1.866-3.233-5.316-5.224-9.049-5.224 c-3.732,0-7.183,1.992-9.049,5.224L24.554,342.37c-1.866,3.233-1.866,7.216,0,10.449c1.542,2.671,4.163,4.494,7.132,5.048 l-19.229,33.306c-1.866,3.233-1.866,7.216,0,10.449c1.443,2.498,3.829,4.255,6.563,4.925L1.4,437.068 c-1.866,3.233-1.866,7.216,0,10.449c1.866,3.233,5.316,5.224,9.049,5.224H81.85v38.205H69.151c-5.77,0-10.449,4.679-10.449,10.449 c0,5.771,4.679,10.449,10.449,10.449H443.22c5.771,0,10.449-4.678,10.449-10.449c0-5.77-4.678-10.448-10.449-10.448h-13.07 v-38.205h71.401c3.732,0,7.182-1.992,9.049-5.224C512.465,444.285,512.465,440.302,510.599,437.069z M256.185,142.894 l46.633,80.225l-24.044,41.363l-13.727-23.775c-1.866-3.233-5.315-5.224-9.049-5.224c-3.732,0-7.183,1.992-9.049,5.224 l-13.739,23.796l-23.858-41.042L256.185,142.894z M289.565,352.817l19.301,33.43c-2.732,0.67-5.12,2.426-6.562,4.925 c-1.866,3.233-1.866,7.216,0,10.449l17.449,30.222H192.247l17.449-30.222c1.866-3.231,1.866-7.215,0-10.448 c-1.443-2.499-3.831-4.255-6.564-4.925l19.302-33.43c1.866-3.233,1.866-7.216,0-10.449c-1.542-2.671-4.163-4.494-7.133-5.048 l40.7-70.492l13.438,23.277c0.158,0.311,0.333,0.613,0.525,0.908l26.733,46.307c-2.969,0.553-5.59,2.376-7.131,5.047 C287.699,345.601,287.699,349.584,289.565,352.817z M28.546,431.844l17.449-30.222c1.866-3.233,1.866-7.216,0-10.449 c-1.442-2.498-3.831-4.255-6.563-4.925l19.301-33.43c1.866-3.233,1.866-7.216,0-10.449c-1.542-2.671-4.163-4.494-7.132-5.048 l40.698-70.492l40.698,70.492c-2.97,0.554-5.591,2.377-7.132,5.048c-1.866,3.233-1.866,7.216,0,10.449l19.302,33.43 c-2.733,0.67-5.121,2.426-6.563,4.925c-1.866,3.233-1.866,7.216,0,10.449l17.449,30.222H28.546z M163.7,490.947h-60.952v-38.205 H163.7V490.947z M174.149,421.396l-8.569-14.842c4.58-1.109,7.981-5.236,7.981-10.156c0-2.131-0.636-4.113-1.731-5.765 l-18.917-32.762c4.864-0.892,8.55-5.154,8.55-10.276c0-2.13-0.637-4.113-1.732-5.765l-32.598-56.464l47.016-80.888l47.019,80.888 l-32.912,57.004c-1.866,3.233-1.866,7.216,0,10.449c1.542,2.671,4.163,4.494,7.132,5.048l-19.23,33.307 c-1.866,3.233-1.866,7.216,0,10.449c1.443,2.499,3.831,4.256,6.564,4.926L174.149,421.396z M245.552,490.947h-60.954v-38.205 h60.954V490.947z M327.378,490.947h-60.928v-38.205h60.928V490.947z M337.851,421.396l-8.569-14.843 c4.58-1.11,7.98-5.235,7.98-10.155c0-2.13-0.637-4.113-1.732-5.765l-18.916-32.762c4.863-0.892,8.549-5.154,8.549-10.276 c0-2.131-0.636-4.113-1.731-5.765l-32.61-56.484l47.004-80.867l47.03,80.909l-32.899,56.983c-1.866,3.233-1.866,7.216,0,10.449 c1.541,2.671,4.163,4.494,7.132,5.048l-19.23,33.307c-1.866,3.233-1.866,7.216,0,10.449c1.443,2.499,3.831,4.256,6.564,4.926 L337.851,421.396z M409.253,490.948h-60.977v-38.205h60.977V490.948z M355.948,431.844l17.449-30.222 c1.866-3.233,1.866-7.216,0-10.449c-1.443-2.499-3.831-4.255-6.564-4.925l19.302-33.43c1.866-3.233,1.866-7.216,0-10.449 c-1.542-2.671-4.163-4.494-7.133-5.048l40.7-70.492l40.697,70.493c-2.97,0.553-5.59,2.376-7.131,5.047 c-1.866,3.233-1.866,7.216,0,10.449l19.301,33.43c-2.732,0.67-5.12,2.426-6.562,4.925c-1.866,3.233-1.866,7.216,0,10.449 l17.448,30.222H355.948z'></path> </g> </g> <g> <g> <path d='M33.625,490.948H10.637c-5.77,0-10.449,4.679-10.449,10.449c0,5.771,4.678,10.449,10.449,10.449h22.987 c5.771,0,10.449-4.678,10.449-10.449C44.074,495.626,39.396,490.948,33.625,490.948z'></path> </g> </g> <g> <g> <path d='M500.718,490.948h-21.971c-5.77,0-10.449,4.679-10.449,10.449c0,5.771,4.679,10.449,10.449,10.449h21.971 c5.77,0,10.449-4.678,10.449-10.449C511.167,495.626,506.488,490.948,500.718,490.948z'></path> </g> </g> <g> <g> <path d='M182.066,37.639c-11.758-22.695-35.636-37.485-61.602-37.485s-49.841,14.79-61.598,37.485 c-32.48,0.806-58.654,27.47-58.654,60.13c0,5.77,4.678,10.449,10.449,10.449h219.608c5.771,0,10.449-4.679,10.449-10.449 C240.718,65.109,214.547,38.445,182.066,37.639z M22.522,87.319c4.589-16.585,19.824-28.801,37.859-28.801 c1.318,0,2.686,0.07,4.072,0.21c4.687,0.471,9.121-2.256,10.807-6.659c7.104-18.553,25.271-31.018,45.205-31.018 c19.935,0,38.104,12.465,45.209,31.018c1.686,4.404,6.096,7.13,10.808,6.659c1.382-0.14,2.752-0.21,4.068-0.21 c18.036,0,33.27,12.215,37.858,28.801H22.522z'></path> </g> </g> </g></svg>"
}

const tags_dict = {
    "Venda": "Vendas Compras Sales Buys ",
    "Arrendamento": "Arrendamentos Rentals Leasings ",
    "Apartamento": "Apartamentos Apartments Quartos Rooms ",
    "Moradia": "Moradias Casas Vivendas Houses Homes Quartos Rooms ",
    "Palacete": "Palacetes Palácios Mansions, Palaces Quartos Rooms ",
    "Prédio": "Prédios Buildings Apartamentos Apartments ",
    "Hotel": "Hotel Hotéis Quartos Rooms ",
    "Terreno": "Terrenos Terras Lands Terrains Metros Quadrados Square Meters m2 "
};

//const language = document.documentElement.lang;
//const notification = document.getElementById("Notification");
const form = document.getElementById("SubmitForm");

function loadSuccess() {
    this.callback(...this.arguments);
}

function loadError() {
    console.error(this.statusText);
}

function loadData(filePath, callback, ...args) {
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.callback = callback;
    xmlhttp.arguments = args;
    xmlhttp.onload = loadSuccess;
    xmlhttp.onerror = loadError;
    xmlhttp.open("GET", filePath, true);
    xmlhttp.send(null);
}

function formatData(msg,data) {
    //console.log(msg);
    var formatedData = JSON.parse(data);
    if(typeof formatedData != Object) formatedData = JSON.parse(formatedData);
    return formatedData;
}

function translate(value,lang) {
    if(translate_dict[lang] !== undefined) return translate_dict[lang][value];
    return translate_dict["en"][value];
}

function numeric(value,lang) {
    if(format_dict[lang] !== undefined) return format_dict[lang][value];
    return format_dict["en"][value];
}

function notificationSetup() {
    var close = document.getElementsByClassName("close")[0];

    close.onclick = function() {
        notification.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == notification) {
            notification.style.display = "none";
        }
    }
}

function formSetup() {
    var open = document.getElementsByClassName("open")[0];

    open.onclick = function() {
        if(form.style.display = "none") {
            form.style.display = "block";
            document.getElementsByClassName("form-open")[0].innerHTML = "&times;";
        }
        else {
            form.style.display = "none";
            document.getElementsByClassName("form-open")[0].innerHTML = "&plus;";
        }
    }

    window.onclick = function(event) {
        if (event.target == form) {
            form.style.display = "none";
            document.getElementsByClassName("form-open")[0].innerHTML = "&plus;";
        }
    }
}

function confirmMailTo(lang,deal,location,structure,rooms,size,type,price,reference,details) {
    notification.style.display = "block";
    notification.className = "notification";
    var headerText, bodyText, footerText;

    switch(lang) {
        case "pt":
            headerText = "Enviar pedido de contacto para o negócio "+reference+"?";
            bodyText = "Carregue em \"Ok\" para enviar um pedido de contacto para "+(deal=="buyer"?"o comprador interessado no/a ":"o/a ")+translate(structure,lang)+" "+(rooms?rooms+" com ":"com ")+size+" m² em "+location+" para "+translate(type,lang)+" a "+price+" com o código de referência "+reference+".\n\nDetales adicionais:\n - "+(details?details:"Sem detalhes.");
            footerText = "Cancelar";
            break;
        case "en":
        default:
            headerText = "Send contact request for deal "+reference+"?";
            bodyText = "Press \"Ok\" to send a contact request for the "+(deal=="buyer"?"buyer interested in the ":"")+translate(structure,lang)+" "+(rooms?rooms+" with ":"with ")+size+" m² in "+location+" for "+translate(type,lang)+" at "+price+" with the reference code "+reference+".\n\nAditional details:\n - "+(details?details:"No details.");
            footerText = "Cancel";
            break;
    }

    notification.getElementsByClassName("notification-header")[0].getElementsByTagName("h2")[0].innerText = headerText;
    notification.getElementsByClassName("notification-body")[0].getElementsByTagName("p")[0].innerText = bodyText;
    notification.getElementsByClassName("notification-footer")[0].innerHTML = "";
    const okButton = document.createElement("button");
    okButton.innerText = "Ok";
    okButton.onclick = function() { mailTo(lang,deal,location,structure,rooms,size,type,price,reference); };
    const cancelButton = document.createElement("button");
    cancelButton.innerText = footerText;
    cancelButton.onclick = function() { notification.style.display = "none"; };
    notification.getElementsByClassName("notification-footer")[0].appendChild(okButton);
    notification.getElementsByClassName("notification-footer")[0].appendChild(cancelButton);
}

function errorMailTo(lang,reference) {
    notification.style.display = "block";
    notification.className = "notification error";
    var headerText, bodyText;

    switch(lang) {
        case "pt":
            headerText = "Erro a processar pedido de contacto.";
            bodyText = "Ocorreu um erro ao processar o seu pedido de contacto, por favor refresque a página e tente outra vez ou envie um pedido de contacto manualmente para info@rhodiumadvisors.com com a referência de negócio "+reference+".";
            break;
        case "en":
        default:
            headerText = "Error while processing contact request.";
            bodyText = "An error has occurred while processing your contact request, please refresh the page and try again or send a manual contact request to info@rhodiumadvisors.com with the deal reference "+reference+".";
            break;
    }

    notification.getElementsByClassName("notification-header")[0].getElementsByTagName("h2")[0].innerText = headerText;
    notification.getElementsByClassName("notification-body")[0].getElementsByTagName("p")[0].innerText = bodyText;
    notification.getElementsByClassName("notification-footer")[0].innerHTML = "";
    const okButton = document.createElement("button");
    okButton.innerText = "Ok";
    okButton.onclick = function() { notification.style.display = "none"; };
    notification.getElementsByClassName("notification-footer")[0].appendChild(okButton);
}

function mailTo(lang,deal,location,structure,rooms,size,type,price,reference) {
    var message = "";
    switch(lang){
        case "pt":
            message = "mailto:info@rhodiumadvisors.com?subject=Interesse no negócio "+(deal=="buyer"?"de comprador ":"de propriedade")+reference+" | Lista - powered by Rhodium!&body=Olá!\nEstou interessado/a "+(deal=="buyer"?"no comprador para o/a":"no/a ")+translate(structure,lang)+" "+(rooms?rooms+" com ":"com ")+size+" m² em "+location+" para "+translate(type,lang)+" a "+price+" com o código de referência "+reference+".\n\nMensagem Automática da Lista - powered by Rhodium!";
            break;
        case "en":
        default:
            message = "mailto:info@rhodiumadvisors.com?subject=Intrested in the "+(deal=="buyer"?"buyer deal ":"property deal ")+reference+" | The List - powered by Rhodium!&body=Hello!\nI'm interested in the "+(deal=="buyer"?"buyer for the ":"")+translate(structure,lang)+" "+(rooms?rooms+" with ":"with ")+size+" m² in "+location+" for "+translate(type,lang)+" at "+price+" with the reference code "+reference+".\n\nAutomatic Message via The List - powered by Rhodium!"
            break;
    }

    try {
        uri = encodeURI(message);
        window.open(uri, "_blank");
    }
    catch(e) {
        console.log(e);
        errorMailTo(lang,reference);
    }
}

function buildPropertyList(msg) {
    const list = formatData(msg,this.responseText);
    const tab = document.getElementById("Properties");

    //console.log(list);
    for(var property in list) {
        const v = list[Object.keys(list).length - property - 1];

        const propertyBox = document.createElement("div");
        propertyBox.className = "list-box";

        const propertyIcon = document.createElement("div");
        propertyIcon.className = "list-icon " + v.property_structure;
        propertyIcon.innerHTML = icon_dict[v.property_structure];

        const propertyData = document.createElement("div");
        propertyData.className = "list-data";

        const propertyLocation = document.createElement("div");
        propertyLocation.className = "list-location";
        propertyLocation.textContent = v.property_location +" | "+ translate(v.property_structure,language) + (v.property_rooms?(" "+ v.property_rooms):"");

        const propertyType = document.createElement("div");
        propertyType.className = "list-type";
        propertyType.textContent = translate(v.property_type,language) +" • "+ v.property_size +" m²";

        const propertyPrice = document.createElement("div");
        propertyPrice.className = "list-price";
        propertyPrice.textContent = new Intl.NumberFormat("pt-PT").format(v.property_price) + numeric(v.property_type,language);

        const propertyReference = document.createElement("div");
        propertyReference.className = "list-reference";
        propertyReference.textContent = v.property_reference;

        const propertyTags = document.createElement("span");
        propertyTags.className = "list-tags";
        propertyTags.textContent = tags_dict[v.property_type] + tags_dict[v.property_structure] + v.property_details;

        propertyData.appendChild(propertyLocation);
        propertyData.appendChild(propertyType);
        propertyData.appendChild(propertyPrice);
        propertyData.appendChild(propertyReference);
        propertyData.appendChild(propertyTags);

        propertyBox.appendChild(propertyIcon);
        propertyBox.appendChild(propertyData);
        propertyBox.onclick = function() { confirmMailTo(language,"property",v.property_location,v.property_structure,v.property_rooms,v.property_size,v.property_type,new Intl.NumberFormat("pt-PT").format(v.property_price)+numeric(v.property_type,language),v.property_reference,(v.property_details?v.property_details:undefined)); };
        tab.appendChild(propertyBox);
    }

    tab.querySelector(".loading-text").style.display = "none";
    tab.querySelector(".loader").style.display = "none";
}

function buildBuyerList(msg) {
    const list = formatData(msg,this.responseText);
    const tab = document.getElementById("Buyers");
    //console.log(list);
    for(var buyer in list) {
        const v = list[Object.keys(list).length - buyer - 1];

        const buyerBox = document.createElement("div");
        buyerBox.className = "list-box";

        const wantedIcon = document.createElement("div");
        wantedIcon.className = "list-icon " + v.wanted_structure;
        wantedIcon.innerHTML = icon_dict[v.wanted_structure];

        const wantedData = document.createElement("div");
        wantedData.className = "list-data";

        const wantedLocation = document.createElement("div");
        wantedLocation.className = "list-location";
        wantedLocation.textContent = v.wanted_location +" | "+ translate(v.wanted_structure,language) + (v.wanted_rooms?(" "+ v.wanted_rooms):"");

        const wantedType = document.createElement("div");
        wantedType.className = "list-type";
        wantedType.textContent = translate(v.wanted_type,language) +" • "+ v.min_size + (v.max_size?(" - "+v.max_size):"+") +" m²";
        
        const wantedPrice = document.createElement("div");
        wantedPrice.className = "list-price";
        wantedPrice.textContent = new Intl.NumberFormat("pt-PT").format(v.min_price) + " - " + new Intl.NumberFormat("pt-PT").format(v.max_price) + numeric("Venda",language);

        const buyerReference = document.createElement("div");
        buyerReference.className = "list-reference";
        buyerReference.textContent = v.buyer_reference;

        const wantedTags = document.createElement("span");
        wantedTags.className = "list-tags";
        wantedTags.textContent = tags_dict[v.wanted_type] + tags_dict[v.wanted_structure] + v.wanted_details;

        wantedData.appendChild(wantedLocation);
        wantedData.appendChild(wantedType);
        wantedData.appendChild(wantedPrice);
        wantedData.appendChild(buyerReference);
        wantedData.appendChild(wantedTags);

        buyerBox.appendChild(wantedIcon);
        buyerBox.appendChild(wantedData);
        buyerBox.onclick = function() { confirmMailTo(language,"buyer",v.wanted_location,v.wanted_structure,v.wanted_rooms,(v.min_size + (v.max_size?(" - "+v.max_size):"+")),v.wanted_type,(new Intl.NumberFormat("pt-PT").format(v.min_price)+" - "+new Intl.NumberFormat("pt-PT").format(v.max_price)+numeric("Venda",language)),v.buyer_reference,(v.wanted_details?v.wanted_details:undefined)); };
        tab.appendChild(buyerBox);
    }

    tab.querySelector(".loading-text").style.display = "none";
    tab.querySelector(".loader").style.display = "none";
}

loadData("/data/properties.json", buildPropertyList, "Loaded Property Data Successfully");
loadData("/data/buyers.json", buildBuyerList, "Loaded Buyer Data Successfully");
notificationSetup();
formSetup();