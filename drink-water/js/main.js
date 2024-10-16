const message_p_1 = document.querySelector("#message p:nth-child(1)");
const message_p_2 = document.querySelector("#message p:nth-child(2)");
const smallCups = document.querySelectorAll(".cup-small");
const listers = document.querySelector(".liters");
const percentage = document.querySelector(".percentage");
const remained = document.querySelector(".remained");

updateTotal();

smallCups.forEach((cup, index) => {
    cup.addEventListener("click", () => {
        higlightCups(index);
    });
});

function higlightCups(index) {
    if (
        smallCups[index].classList.contains("full") &&
        !smallCups[index].nextElementSibling.classList.contains("full")
    ) {
        index--;
    }
    smallCups.forEach((cup, index_2) => {
        if (index_2 <= index) {
            cup.classList.add("full");
            cup.innerHTML = '<i class="fas fa-check"></i>';
        } else {
            cup.classList.remove("full");
            cup.innerHTML = "250ml";
        }
    });
    updateTotal();
}

function updateTotal() {
    const fullCups = document.querySelectorAll(".cup-small.full").length;
    const totalCups = smallCups.length;

    if (fullCups === 0) {
        percentage.style.visibility = "hidden";
        percentage.style.height = 0;
    } else {
        percentage.style.visibility = "visible";
        percentage.style.height = `${(fullCups / totalCups) * 330}px`;
        percentage.innerHTML = `${(250 * fullCups) / 1000}L <br> ${(fullCups / totalCups) * 100
            } %`;
    }

    if (fullCups === totalCups) {
        remained.style.visibility = "hidden";
        remained.style.height = 0;
        message_p_1.style.color = "#23ff00";
        message_p_1.innerHTML =
            'Congratulations! <i class="fas fa-glass-cheers"></i>';

        message_p_2.style.color = "#23ff00";
        message_p_2.innerHTML =
            'You met your daily goal! <i class="fas fa-trophy"></i>';
    } else {
        remained.style.visibility = "visible";
        remained.style.height = "39px";
        listers.innerText = `${2 - (250 * fullCups) / 1000}L`;
        message_p_1.innerText = "Daily Goal: 2 Liters";
        message_p_1.style.color = "#fff";
        message_p_2.style.color = "#fff";
        message_p_2.innerText = "";
    }
}
