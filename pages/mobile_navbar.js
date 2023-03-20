class MobileNavbar{
    constructor(mobileMenu, navlist){
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navlist = document.querySelector(navlist);
        this.navlinks = document.querySelectorAll(navlinks)
        this.activeClass = 'active';
    }
    addClickEvent(){
        this.mobileMenu.addEventListener("click", () => console.log('hey'));
    }

    init(){
        if(this.mobileMenu){
            this.addClickEvent();
        }
    }
}

constmobileNavbar = new MobileNavbar(
    ".mobile_menu",
    ".nav_list"
    );