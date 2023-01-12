const cur = document.querySelector(".cursor")

document.addEventListener("mousemove", (mp) => {
    let x = mp.pageX;
    let y = mp.pageY;

    cur.style.top = y + 'px';
    cur.style.left = x + 'px';
    cur.style.display = "block";
});

document.addEventListener("mouseout", () =>{
    cur.style.display = "none";
})