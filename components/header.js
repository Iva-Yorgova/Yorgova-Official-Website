class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `<header>
    <div class="position-fixed w-100" style="z-index:2000">

        <div id="myNav-new" class="overlay-new">
            <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
            <div class="overlay-content">
                <a href="projects.html">All Cases</a>
                <a href="logos.html">Logos</a>
                <a href="books.html">Books</a>
                <a href="brochures.html">Brochures</a>
                <a href="stationary.html">Stationary</a>
                <a href="variety.html">Variety</a>
                <a href="kids.html">Kids</a>
                <a href="posters.html">Posters</a>
                <a href="web.html">Web</a>
            </div>
        </div>

        <div class="topnav" id="myTopnav">

            <a class="home-link" href="index.html" data-toggle="tooltip" data-placement="bottom" data-container="body" title="Home"
                id="home" style="padding-top:11px; padding-bottom:13px">
                <img class="z-logo-icon" src="" alt="Zonart logo" />
            </a>

            <a href="ourStory.html" id="about">About</a>

            <a href="services.html" id="services">Services</a>

            <div class="dropdown">
                <a class="dropbtn" href="projects.html" id="projects">
                    Projects
                </a>
                <div class="dropdown-content">
                    <a href="brochures.html">Brochures</a>
                    <a href="logos.html">Logos</a>
                    <a href="books.html">Books</a>
                    <a href="posters.html">Posters</a>
                    <a href="kids.html">Kids</a>
                    <a href="web.html">Web</a>
                    <a href="stationary.html">Stationary</a>
                    <a href="variety.html">Variety</a>
                </div>
            </div>

            <a href="contact.html" id="contact">Contact</a>

            <a href="javascript:void(0);" style="font-size:15px;" class="icon" onclick="myFunction()">&#9776;</a>

            <a class="nav-right explore float-right" onclick="openNav()" title="Explore" data-toggle="tooltip"
                data-placement="bottom" data-container="body"><img class="compass" alt="explore" /></a>

        </div>
    </div>

</header>`;
    }
}

customElements.define('header-component', Header);