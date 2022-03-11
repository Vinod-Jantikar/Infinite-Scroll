


const scroller = document.querySelector("#scroller");


let j = 1
const infinteScroll = (num = 25) => {

    let i = 1;
    while (i <= num) {
        let head = document.createElement("h3");
        head.innerText = `${j} Masai School`
        i++
        j++
        scroller.append(head)
    }

}

infinteScroll()


scroller.addEventListener("scroll", () => {

    // console.log("scrollTop" + scroller.scrollTop);
    // console.log("clientHeight" + scroller.clientHeight);

    // console.log("scrollHeight" + scroller.scrollHeight)
    if (scroller.scrollHeight - scroller.scrollTop == scroller.clientHeight) {
        infinteScroll()
    }

})

