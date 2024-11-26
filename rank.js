
document.addEventListener("DOMContentLoaded", function () {

    const rankUsers = document.querySelectorAll(".rank-user");


    const usersArray = Array.from(rankUsers).map((user) => {
        const name = user.querySelector(".rank-name").textContent;
        const points = parseInt(user.querySelector(".rank-points").textContent);
        return { element: user, name, points };
    });

 
    usersArray.sort((a, b) => b.points - a.points);


    const rankSection = document.querySelector(".principal-rank");
    rankSection.innerHTML = ""; 
    usersArray.forEach((user, index) => {
        user.element.querySelector(".rank-number").textContent = String(index + 1).padStart(2, '0');
        rankSection.appendChild(user.element); 
    });


    if (usersArray.length > 0) {
        const firstPlace = usersArray[0].element;
        firstPlace.classList.add("highlight-first");
    }
});
