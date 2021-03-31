var qual_link=document.querySelector("#qual");
console.dir(qual_link);
var info_link=document.querySelector("#info")
var info=document.querySelector(".info");
var qual=document.querySelector(".qual");

qual_link.addEventListener('click',function(){
    info.style.display='none';
    qual.style.display='flex';
})
info_link.addEventListener('click',function(){
    info.style.display="block";
    qual.style.display="none";
})