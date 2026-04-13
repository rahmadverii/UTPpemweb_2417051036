let text = "Halo, Saya ";
let nama = "Rahmad Veri Apriansah";
let i = 0;
let j = 0;

function typing(){
let el = document.getElementById("typing");

if(!el) return;

if(i < text.length){
el.innerHTML += text.charAt(i);
i++;
setTimeout(typing, 50);
}else if(j < nama.length){
el.innerHTML += "<span class='nama'>" + nama.charAt(j) + "</span>";
j++;
setTimeout(typing, 50);
}
}

if(document.getElementById("typing")){
typing();
}

/* TOGGLE HOBI */
function toggle(index){
let desc = document.getElementsByClassName("desc")[index];

if(desc.style.display === "block"){
desc.style.display = "none";
}else{
desc.style.display = "block";
}
}

/* CONTACT */
function ig(){
alert("Menuju Instagram!");
}

function wa(){
alert("Menuju WhatsApp!");
}

function email(){
alert("Email: contoh@gmail.com");
}

/* TRANSISI HALAMAN */
document.querySelectorAll("a").forEach(link => {
link.addEventListener("click", function(e){
e.preventDefault();
let tujuan = this.getAttribute("href");

document.body.style.opacity = 0;

setTimeout(()=>{
window.location.href = tujuan;
},300);
});
});

/* FADE IN SAAT LOAD */
document.body.style.opacity = 0;
window.onload = () => {
document.body.style.transition = "0.5s";
document.body.style.opacity = 1;
};