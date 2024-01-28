let load = document.querySelector("#load");
 window.addEventListener("scroll",()=>
 {
    let scroll = window.scrollY;
    console.log(scroll);
    let widthvalue = `${scroll/3.3}px`;
    load.style.width=widthvalue;
    console.log(load);
 })