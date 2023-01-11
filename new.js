// const t1 = document.querySelector(".text-red");

// const t2 = document.querySelector(".text-blue");

// console.log(t1.classList);

// t1.addEventListener("click", function (event) {
//     event.target.classList.toggle("text-blue");
// })

const txts = document.querySelectorAll(".text");
txts.forEach(
    function (element) {
        element.addEventListener("click",
        function (event) {
            event.target.classList.toggle("text-blue");
        });
    }
);
