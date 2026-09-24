lucide.createIcons();

const pages = document.querySelectorAll(".page");
const navItems = document.querySelectorAll(".nav-item");

function showPage(pageId, clickedButton = null){

    pages.forEach(page => {
        page.classList.remove("active");
    });

    const page = document.getElementById(pageId);

    if(page){
        page.classList.add("active");
    }

    navItems.forEach(item => {
        item.classList.remove("active");
    });

    if(clickedButton){

        clickedButton.classList.add("active");

    }else{

        navItems.forEach(item => {

            const text = item.innerText.trim();

            if(
                (pageId === "home" && text.includes("الرئيسية")) ||
                (pageId === "ideas" && text.includes("الأفكار")) ||
                (pageId === "tools" && text.includes("الأدوات")) ||
                (pageId === "profile" && text.includes("حسابي"))
            ){

                item.classList.add("active");

            }

        });

    }

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

    setTimeout(() => {
        lucide.createIcons();
    },50);
}


function openIdea(){

    document
        .getElementById("ideaModal")
        .classList.add("show");

    setTimeout(() => {

        document
            .getElementById("ideaInput")
            .focus();

    },200);
}


function closeIdea(){

    document
        .getElementById("ideaModal")
        .classList.remove("show");

}


function saveIdea(){

    const input =
        document.getElementById("ideaInput");

    const idea =
        input.value.trim();

    if(!idea){

        input.style.borderColor="#ff5c7a";

        setTimeout(() => {

            input.style.borderColor="";

        },1000);

        return;
    }

    closeIdea();

    input.value="";

    showToast();

    setTimeout(() => {

        showPage("ideas");

    },500);

}


function showToast(){

    const toast =
        document.getElementById("toast");

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove("show");

    },2500);

}


document
    .getElementById("ideaModal")
    .addEventListener("click",function(e){

        if(e.target === this){
            closeIdea();
        }

    });


document.addEventListener("keydown",function(e){

    if(e.key === "Escape"){
        closeIdea();
    }

});


/* منع ضغط Enter داخل textarea من عمل شيء غير متوقع */

document
    .getElementById("ideaInput")
    .addEventListener("keydown",function(e){

        if(e.key === "Escape"){
            closeIdea();
        }

    });
