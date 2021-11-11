class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `<style>
        .footer-title {
            font-size: 50px;
            font-family: 'Raleway', sans-serif;
            letter-spacing: -1px;
            text-align: center;
        }
      </style>
      <footer>
        <div class="wpb_wrapper">
            <div
                class="vc_row wpb_row vc_inner vc_row-fluid left_t case-studie-row vc_row-o-equal-height vc_row-o-content-middle vc_row-flex">

                <div class="wpb_column vc_column_container vc_col-sm-6" style="height:500px; background-color: #f5f5f0">
                    <div class="vc_column-inner">
                        <div class="wpb_wrapper">
                            <div class="wpb_text_column wpb_content_element wpb_animate_when_almost_visible wpb_fadeInRight fadeInRight wpb_start_animation animated">
                                <div class="wpb_wrapper">

                                    <p class="footer-title pt-4 pb-0 mb-0" style="font-family: 'Raleway', sans-serif">
                                        Have a story <br />to tell?</p>
                                    <p style="text-align:center" class="pt-2 pr-3 pl-3 mr-5 ml-5 mt-4 mb-4 pb-4">We'll
                                        help you build out the spine of the narrative <br />and perform a
                                        unique brand experience.</p>
                                    <hr class="solid mt-4 mb-0 pt-0 pb-0"
                                        style="border-top:7px solid orangered; width:10%">
                                </div>
                            </div>

                            <div
                                class="pb-5 mb-5 vc_btn3-container wpb_animate_when_almost_visible wpb_fadeInRight fadeInRight vc_btn3-center wpb_start_animation animated">

                                <a class="btn btn-spec pt-2 pb-2 pl-4 pr-4" style="font-weight: 400" href="projects.html"
                                    asp-action="Add">EXPLORE</a>

                            </div>
                        </div>
                    </div>
                </div>

                <div class="wpb_column vc_column_container vc_col-sm-6 vc_col-has-fill" style="height:500px">
                    <div class="vc_column-inner vc_custom_1582317256604"
                        style="background-color: orangered; background-position: center !important; background-repeat: no-repeat !important; background-size: cover !important;">

                        <div class="wpb_wrapper">
                            <div style="text-align: center">
                                <img class="footer-logo"  src="Images/yorgova-white.svg"alt="LOGO" />
                            </div>

                            <p class=""
                                style="font-size:32px; font-family:Jost; text-align: center; color: white; font-weight: 700; letter-spacing: 4px; margin-top: 0; padding-top: 20px">
                                YORGOVA</p>
                            <p style="text-align: center; color: white; font-size: 12px" class="pr-5 pl-5 mr-5 ml-5">
                                &copy; 2021 Yorgova Design

                                <br />info@yorgova.net
                            </p>
                            <hr class="solid mt-4 mb-0 pt-0 pb-0" style="border-top:4px solid orangered; width:25%">

                            <!--<div class="" style="text-align:center">
        <a href="#"><i class="fa fa-instagram fa-sm" style="color: white; margin-right: 20px"></i></a>
        <a href="#"><i class="fa fa-twitter fa-sm" style="color: white; margin-right: 20px"></i></a>
        <a href="#"><i class="fa fa-behance fa-sm" style="color: white"></i></a>
    </div>-->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>`;
    }
}

customElements.define('footer-component', Footer);