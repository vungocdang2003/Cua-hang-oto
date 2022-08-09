function doimau(){
    let a = document.getElementById("sdt");
    let b = document.getElementById("tinhthanh");
    let c = document.getElementById("quanhuyen");
    let d = document.getElementById("ten xe");
    let e = document.getElementById("dangky");

    a.classList.remove("error");

    if(a.value === ""){
        setTimeout(function() {
            a.classList.add("error");           
        }, 100);
        
        return;
    }

    b.classList.removeO("error");
    if(b.value === ""){
        setTimeout(function() {
            b.classList.add("error");           
        }, 100);
        
        return;
    }

    c.classList.removeO("error");
    if(b.value === ""){
        setTimeout(function() {
            c.classList.add("error");           
        }, 100);
        
        return;
    }

    d.classList.removeO("error");
    if(b.value === ""){
        setTimeout(function() {
            d.classList.add("error");           
        }, 100);
        
        return;
    }

   
    
    a = parseFloat(a.value);
    b = parseFloat(b.value);
    c = parseFloat(c.value);
    d = parseFloat(d.value);
    let k = document.getElementById("dangky");
    k.innerText = alert("Dang ky thanh cong");
   
}
