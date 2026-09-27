let search_type_btn = document.querySelectorAll(".search_type_btn");
let closebtn = document.getElementById("close_menu_btn");
let openbtn = document.getElementById("open_menu_btn");
let resultbox=document.getElementById("searchResult");
let searchLoader=document.getElementById("searchLoader");


window.addEventListener("DOMContentLoaded", () => {
    let firsttab = document.querySelector(".featured_tab.active");
    if (firsttab) {
        let cards = firsttab.querySelectorAll(".product_card");
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add("show");
            }, index * 120);
        });
    }
});

let tabsbtn = document.querySelectorAll(".featured_properties_menu_list li button");
let tabs = document.querySelectorAll(".featured_tab");

tabsbtn.forEach((tabsbtn1) => {
    tabsbtn1.addEventListener("click", () => {
        tabsbtn.forEach(tabsbtn2 => tabsbtn2.classList.remove("active"));
        tabs.forEach(tabs1 => {
            tabs1.classList.remove("active")

            tabs1.querySelectorAll(".product_card").forEach(card => card.classList.remove("show"));
        });

        tabsbtn1.classList.add("active");

        let target = tabsbtn1.getAttribute("data-set");
        let activetab = document.getElementById(target);
        activetab.classList.add("active");


        let cards = activetab.querySelectorAll(".product_card");

        cards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add("show");

            }, index * 120);
        });
    });
});


if (document.querySelector(".mySwiper")) {
    let swiper1 = new Swiper(".mySwiper", {
        spaceBetween: 30,
        slidesPerView: 1,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 5,
                spaceBetween: 30
            },
        },
    });
}

if (document.querySelector(".mySwiper2")) {
    let swiper2 = new Swiper(".mySwiper2", {
        spaceBetween: 30,
        loop: true,
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false
        }
    });
}

if (document.querySelector(".mySwiper3")) {
    let swiper3 = new Swiper(".mySwiper3", {
        spaceBetween: 30,
        slidesPerView: 1,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {

            300: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            640: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 5,
                spaceBetween: 30
            },
        },
    });
}

openbtn.addEventListener("click", () => {
    document.body.classList.add("move");
});

closebtn.addEventListener("click", () => {
    document.body.classList.remove("move");
});


let scroll1 = ScrollReveal({
    duration: 2500,
    delay: 800,
    mobile: false,
    origin: "bottom",
    distance: "60px"
});

scroll1.reveal(".heroSection .heroContainer .HeroTextContainer .heroText,.heroSection .heroContainer .HeroTextContainer .heroDescription,.heroSection .heroContainer .Search_Form_Container .search_type_container .search_type_inner,.heroSection .heroContainer .Search_Form_Container .search_form,.featured_properties_section .featured_properties_container .title_container .subtitle,.featured_properties_section .featured_properties_container .title_container .title,.top_properties_container .content_container .top_properties_content_container .product_card,.featured_properties_menu_list,.services_section .services_container .title_container h5, .cities_section .cities_container .title_container h5,.services_section .services_container .title_container h2, .cities_section .cities_container .title_container h2,.cities_content_container,.about_section .about_container .title_container .subtitle,.about_section .about_container .title_container .title,.about_section .about_container .about_row .about_col .img_container img,.about_section .about_container .about_row .text_container .description,.about_section .about_container .about_row .text_container .content,.about_section .about_container .about_row .text_container blockquote,.top_properties_section .top_properties_container .title_container .subtitle,.top_properties_section .top_properties_container .title_container .title,.about_section .about_container, .testimonial_container,.team_section .team_container .title_container .subtitle,.team_section .team_container .title_container .title,.team_section .team_container .contact_info_container .team_row,.brand_section .brand_container .title_container .title,.brand_section .brand_container .content_container");
scroll1.reveal(".services_col .img_container img,.contact_section .contact_container .contact_col:nth-child(1)", { origin: "left" });
scroll1.reveal(".services_col .text_container,.contact_section .contact_container .contact_col:nth-child(2)", { origin: "right" });



let arrow_up=document.querySelector(".arrow_btn");

window.addEventListener("scroll",() => {
    
    if(window.scrollY > 300) 
    {
        arrow_up.classList.add("show");
    }
    else 
    {
        arrow_up.classList.remove("show");
    }
});


arrow_up.addEventListener("click",() => {
    window.scrollTo( {
      top:0,
      behavior:"smooth"
    });
});


let words=["Simple","Hassle","Smart way"];
let colors=["#ff4d4d","#00bcd4","#4fcaf50","#ff9800"];

let i=0;//word
let j=0;//letter
let isDeleting=false;//writing

let textelement=document.getElementById("text");

function typeeffect() {
     let currentword=words[i];
     
     if(isDeleting) {
       j--;
     }
     else 
     {
        j++;
     }

     textelement.innerHTML=currentword.slice(0,j);
     textelement.style.color=colors[i];

     if(!isDeleting && j===currentword.length) {
        setTimeout(() => {
         isDeleting=true;
        typeeffect();
        },1000);

        return;
     }


     if(isDeleting && j===0) {
        isDeleting=false;
        i++;
        if(i===words.length) {
            i=0;
        }
     }
     
     setTimeout(typeeffect,isDeleting ? 60 : 120)
}
typeeffect();



let SearchForm=document.querySelector(".search_form");
let keywordinput=document.getElementById("keyword");
let propertytypeinput=document.getElementById("PropertyType");
let locationinput=document.getElementById("location");





function showerror(input,message) {
    input.classList.add("error");
    let errorelement=input.parentElement.querySelector(".error_message");
    if(errorelement) 
    {
      errorelement.textContent=message;
    }
}

function clearerror(input) {
    input.classList.remove("error");
    let errorelement=input.parentElement.querySelector(".error_message");
    if(errorelement)
    {
    errorelement.textContent="";
    }
}


function validateKeyword() {
    if(keywordinput.value.trim() ==="") {
        showerror(keywordinput,"Keyword is required");
        return false;
    }
    if(keywordinput.value.trim().length < 3) {
        showerror(keywordinput,"Keyword must be at least 3 characters");
        return false;
    }
    clearerror(keywordinput);
    return true;
}


function validatePropertyType() {

    if(propertytypeinput.value==="") {
        showerror(propertytypeinput,"Please choose a property type");
        return false;
    }

    clearerror(propertytypeinput);
    return true;
}


function validateLocation() {

    if(locationinput.value.trim() === "") {
        showerror(locationinput,"Location is required");
        return false;
    }

    if(locationinput.value.trim().length < 2) {
        showerror(locationinput,"Location must be at least 2 characters");
        return false;
    }
    clearerror(locationinput);
    return true;
}
 

let productcards=document.querySelectorAll(".featured_properties_section .product_card");//search for all cards

 productcards.forEach((card) => {
    let cardtitle=card.querySelector("h3");
    card.dataset.title=cardtitle.textContent;
 });



function performsearch() // for search optional
{
                 
            searchLoader.classList.add("show");
             

             setTimeout(() => {

            let productcards=document.querySelectorAll(".featured_properties_section .product_card");//search for all cards
         
            let keywordvalue=keywordinput.value.trim().toLowerCase();
            let propertyvalue=propertytypeinput.value.toLowerCase();
            let locationvalue=locationinput.value.trim().toLowerCase();
            let statusvalue=currentsearch==="For Rent" ? "rent" :"sale";
            
            let matchcount=new Set();
            let firstmatchtab=null;

                 productcards.forEach((card) => {


                    let cardtype=(card.dataset.type || "").toLowerCase();
                    let cardlocation=(card.dataset.location || "").toLowerCase();
                    let cardkeyword=(card.dataset.keyword || "").toLowerCase();
                    let cardstatus=(card.dataset.status || "").toLowerCase();


                    let cardtitle=card.querySelector("h3");
                    let originaltitle=card.dataset.title || cardtitle.textContent;

                          
                    let matcheskeyword=keywordvalue==="" || matchesallwords(cardkeyword,keywordvalue);
                    let matchestype= propertyvalue==="" || cardtype === propertyvalue;
                    let matcheslocation=locationvalue==="" || cardlocation.includes(locationvalue);
                    let matchesstatus=cardstatus===statusvalue;


                    if(matcheskeyword && matchestype && matcheslocation && matchesstatus)
                    {
                        card.style.display="flex";
                          let propertyID=card.dataset.id;
                          matchcount.add(propertyID);


                          cardtitle.innerHTML=highlight(originaltitle,keywordvalue);
                      
                          
                     if(!firstmatchtab) 
                    {
                        firstmatchtab=card.closest(".featured_tab");
                    }

                    }
                    else 
                    {
                        card.style.display="none";
                        originaltitle.textContent=card.dataset.title;
                    }

                 });

                 if(propertyvalue==="office") {
                    firstmatchtab=document.getElementById("tab-3");
                 }
                 else if(propertyvalue==="villa") {
                    firstmatchtab=document.getElementById("tab-4");
                 }
                 else if(propertyvalue==="house") {
                    firstmatchtab=document.getElementById("tab-5");
                 }
                 else if(propertyvalue==="apartment") {
                    firstmatchtab=document.getElementById("tab-2");
                 }

                if(firstmatchtab) 
                {
                    tabs.forEach(tab => tab.classList.remove("active"));
                    tabsbtn.forEach(btn => btn.classList.remove("active"));

                    firstmatchtab.classList.add("active");

                    firstmatchtab.querySelectorAll(".product_card").forEach((card) => {
                       card.classList.add("show_card");
                    }); 

                    let matchbtn = document.querySelector(`[data-set="${firstmatchtab.id}"]`);

                    if(matchbtn) 
                    {
                        matchbtn.classList.add("active");
                    }

                }
                
                if(matchcount.size > 0 ) 
                {
                    resultbox.textContent=`${matchcount.size} properties found`;
                    resultbox.classList.remove("error");
                    resultbox.classList.add("success");
                }
                else 
                {
                    resultbox.textContent="No properties found";
                    resultbox.classList.remove("success");
                    resultbox.classList.add("error");
                }
                 searchLoader.classList.remove("show");
    },300);
}

SearchForm.addEventListener("submit",(e) => {//submit for validation
        e.preventDefault();

        let iskeywordvalid=validateKeyword();
        let ispropertytypevalid=validatePropertyType();
        let islocationvalid=validateLocation();

        if(iskeywordvalid && ispropertytypevalid && islocationvalid) {
            performsearch();
        }
    });


keywordinput.addEventListener("input",debounce(performsearch,300));
propertytypeinput.addEventListener("change",debounce(performsearch,300));
locationinput.addEventListener("input",debounce(performsearch,300));


keywordinput.addEventListener("input",validateKeyword);
propertytypeinput.addEventListener("change",validatePropertyType);
locationinput.addEventListener("input",validateLocation);



let currentsearch="For Rent";

search_type_btn.forEach((btn1) => {
    btn1.addEventListener("click", () => {
        search_type_btn.forEach((btn2) => btn2.classList.remove("active"));
            btn1.classList.add("active");
        currentsearch=btn1.textContent.trim();
        performsearch();
    });
});



let resetSearchBtn=document.getElementById("resetSearchBtn");

resetSearchBtn.addEventListener("click",() => {

    keywordinput.value="";
    propertytypeinput.value="";
    locationinput.value="";

    clearerror(keywordinput);
    clearerror(propertytypeinput);
    clearerror(locationinput);
    resultbox.textContent="";
     
    let productcards=document.querySelectorAll(".featured_properties_section .product_card");

    productcards.forEach((card) => {
      card.style.display="flex";
      card.classList.add("show_card");
    let cardtitle=card.querySelector("h3");
    let originaltitle=card.dataset.title;
    cardtitle.textContent=originaltitle;
    });

    tabs.forEach(tab => tab.classList.remove("active"));
    tabsbtn.forEach(btn => btn.classList.remove("active"));

    document.getElementById("tab-1").classList.add("active");
    document.querySelector(`[data-set="tab-1"]`).classList.add("active");
   
});



function highlight(text,keyword) {
    if(keyword==="") {
        return text;
    }
    let reg=new RegExp(`${keyword}`,"gi");
    return text.replace(reg,function(match) {
         return `<span class="highlight">${match}</span>`;
    });
}


function matchesallwords(text,searchvalue) {
     let words=searchvalue.toLowerCase().trim().split(" ").filter(word => word !=="");//["modern","family"]
     
     return words.every(word => text.includes(word));
};




function debounce(func,delay) {
  let timeout;
 
  return function() {
    clearTimeout(timeout);

 timeout= setTimeout(() => {
         func();
       },delay);
}
};


let contactform=document.getElementById("contact_form");
let nameinput=document.getElementById("name");
let emailinput=document.getElementById("email");
let phoneinput=document.getElementById("phone");
let messageinput=document.getElementById("message");


function showcontacterror(input,message) {
    input.classList.add("error");
    let errorelement=input.parentElement.querySelector(".error_message");
    if(errorelement) {
        errorelement.textContent=message;
    }
}

function clearcontacterror(input) {
    input.classList.remove("error");
    let errorelement=input.parentElement.querySelector(".error_message");
    if(errorelement) {
        errorelement.textContent="";
    }
} 



function validatename() {
    if(nameinput.value.trim()=="") {
      showcontacterror(nameinput,"Name is required");
      return false;
    }
    if(nameinput.value.trim().length < 3) {
        showcontacterror(nameinput,"Name must be at least 3 characters");
        return false;
    }
    clearcontacterror(nameinput);
    return true;
}


function validateemail() {

   let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(emailinput.value.trim()=="") {
        showcontacterror(emailinput,"Email is required");
        return false;
    }

    if(!emailPattern.test(emailinput.value.trim())) {
        showcontacterror(emailinput,"Please enter a valid email");
        return false;
    }
    clearcontacterror(emailinput);
    return true;
}



function validatephone() {

    let phonePattern = /^[0-9+\-\s]{7,15}$/;
    if(phoneinput.value.trim()=="") {
        showcontacterror(phoneinput,"Phone number is required");
        return false;
    }
    
    if(!phonePattern.test(phoneinput.value.trim())) {
        showcontacterror(phoneinput,"Please enter a valid phone number");
        return false;
    }
    clearcontacterror(phoneinput);
    return true;
}


function validatemessage() {
    if(messageinput.value.trim()=="") {
        showcontacterror(messageinput,"Message is required");
        return false;
    }

    if(messageinput.value.trim().length < 10) {
        showcontacterror(messageinput,"Message must be at least 10 characters");
        return false;
    }
    clearcontacterror(messageinput);
    return true;
}




contactform.addEventListener("submit",(e) => {
      e.preventDefault();

      let isnamevalid=validatename();
      let isemailvalid=validateemail();
      let isphonevalid=validatephone();
      let ismessagevalid=validatemessage();

      if(isnamevalid && isemailvalid && isphonevalid && ismessagevalid) {

         Swal.fire({
           title:"Sending....",
           text:"Please wait",
           allOutsideClick:false,
           didOpen:() => {
             Swal.showLoading();
           }
         });

         setTimeout(() => {
             Swal.fire({
          icon:"success",
          title:"Message Sent!",
          text:"we will contact you soon",
          confirmButtonText:"OK",
          showClass: {
            popup:"animate__animated animate__fadeInDown"
          },
          hideClass: {
            popup:"animate__animated animate__fadeOutUp"
          }
        });

    },1500);
        
        contactform.reset();

        clearcontacterror(nameinput);
        clearcontacterror(emailinput);
        clearcontacterror(phoneinput);
        clearcontacterror(messageinput);

      }
      else 
      {
        Swal.fire({
           icon:"error",
           title:"There was a transmission error",
           text:"Please fill all fields correctly",
           confirmButtomText:"try Again",
           showClass: {
             popup:"animate__animated animate__shakeX"
           },
           hideClass: {
            popup:"animate__animated animate__fadeOut"
           }
        });
      }
});



nameinput.addEventListener("input",validatename);
emailinput.addEventListener("input",validateemail);
phoneinput.addEventListener("input",validatephone);
messageinput.addEventListener("input",validatemessage);