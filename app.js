window.addEventListener("resize", function () {
    var zoomLevel = window.devicePixelRatio;
    var screenWidth = window.screen.width;
    var mainImage = document.getElementById("heads");
    var getvertical = document.getElementsByClassName("social-icons")[0];

    if (screenWidth < 400 || zoomLevel > 3) {
      mainImage.src = ".\\Assets\\Images\\Y_N_SPRIT_LOGO_KANPUR.jpg";
      mainImage.style.width = "100%";
      mainImage.style.height = "auto";
      getvertical.style["flex-direction"] = "column";
      console.log("screeen zoom in");
    } else if (screenWidth > 500 || zoomLevel < 6) {
      mainImage.src = ".\\Assets\\Images\\headingimage.png";
      if (zoomLevel < 3) {
        mainImage.style.width = "100%";
        mainImage.style.height = "100%";
      } else {
        mainImage.style.height = "200px";
        mainImage.style.width = "110%";
      }
    }
  });

  let btn = document.querySelector(".btn");

  let table = document.querySelector(".table-responsive");

//   let show = 1;
//   btn.addEventListener("click", () => {
//     if (show) {
//       table.classList.add("hidden");
//       show = 0;
//       // console.log("heloo");
//     } else {
//       table.classList.remove("hidden");
//       show = 1;
//     }
//   });

  let hindi_text = document.querySelectorAll(".hindi");

  let english_text = document.querySelectorAll(".english");

  let zoom = document.querySelector(".zoom");


  let hindi_ver = () => {
    for (let i = 0; i < hindi_text.length; i++) {
      hindi_text[i].classList.remove("hidden");
      english_text[i].classList.add("hidden");
    }
  };

  let english_ver = () => {
    for (let j = 0; j < hindi_text.length; j++) {
      english_text[j].classList.remove("hidden");
      hindi_text[j].classList.add("hidden");
    }
  };


  // zoom.addEventListener("click", () => {
    
  // });



  let language_btn = document.querySelector(".language_btn");
  let current = 1;
  language_btn.addEventListener("click",()=>{
    if(current){
        hindi_ver();
        current=0;
        language_btn.innerHTML= "अंग्रेजी";
    }
    else{
        english_ver();
        current=1;
        language_btn.innerHTML="Hindi";

    }
  });