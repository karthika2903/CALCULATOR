let insert=(value)=>{
    display.value+=value;
    console.log("display value is:",display.value)
}
let equal=()=>{
    display.value=eval(display.value);
    console.log("equals to:",display.value)
}
let cleardisplay=()=>{
    display.value = '';
    console.log("value cleared");
}

let deleteLast = () => {
    const display = document.getElementById("display");
    display.value = display.value.slice(0, -1); 
    console.log("Last character deleted, current display value is:", display.value);
}