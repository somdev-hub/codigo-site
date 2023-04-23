// import clubHistory from "./club-history";

const clubHistory =
  "Codigo Plataforma was established by the Silicon Institute of technology, Sambalpur department of Computer Science and engineering on dt - 27th apr 2019 as the official coding club of the college. This led to the foundation block of a journey of a club with not more than a hundred members and twenty coordinators to make lessons of coding and software development accessible to each student of the college and beyond. <br/><br/>The name Codigo Plataforma was given by Mr. Ashish Saluja faculty of CSE as a attractive and official name of the club. The club is headed and commanded by the faculty-in-charge Dr. Sohan Pandey Faculty of CSE branch, SITWEST. Other than the faculties, the club activities are carried out by the set of student coordinators led by the club secretary.<br/><br/>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum asperiores, laborum assumenda repellat, ullam placeat quasi aliquam itaque, explicabo incidunt quis consequuntur odio voluptatum aspernatur. Necessitatibus ab dolores reiciendis in doloremque rerum, molestiae voluptas sed quisquam nihil esse fuga temporibus aperiam optio ad itaque veniam repellendus neque excepturi error! Ut?<br/><br/>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum asperiores, laborum assumenda repellat, ullam placeat quasi aliquam itaque, explicabo incidunt quis consequuntur odio voluptatum aspernatur. Necessitatibus ab dolores reiciendis in doloremque rerum, molestiae voluptas sed quisquam nihil esse fuga temporibus aperiam optio ad itaque veniam repellendus neque excepturi error! Ut?<br/><br/>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum asperiores, laborum assumenda repellat, ullam placeat quasi aliquam itaque, explicabo incidunt quis consequuntur odio voluptatum aspernatur. Necessitatibus ab dolores reiciendis in doloremque rerum, molestiae voluptas sed quisquam nihil esse fuga temporibus aperiam optio ad itaque veniam repellendus neque excepturi error! Ut? ";

const listItem = document.querySelectorAll(".actual-content ul li");
const pageContentHeading = document.querySelector(".page-content h2");
const pageContentPara = document.querySelector(".page-content p");
const expander = document.querySelector(".expander");

expander.addEventListener("click", () => {
    // expander.classList.toggle("expanded");
    console.log("clicked");
    document.querySelector(".actual-content ul").classList.toggle("expanded");
});

//console.log(listItem[0].innerHTML);
listItem.forEach((item) => {
  item.addEventListener("click", () => {
    console.log(item.innerHTML);
    listItem.forEach((item) => {
      item.style.color = "#434242";
    });
    item.style.color = "#ed4322";

    switch (item.innerHTML) {
      case "Management":
        pageContentHeading.innerHTML = "Management";
        pageContentPara.innerHTML = clubHistory;
        break;
    }
  });
});
