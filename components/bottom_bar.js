class bottomBar extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <!--Start Footer Section-->
	
      <div class="footer-clean">
            <footer>
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-sm-4 col-md-3 item">
                          <h3>MD4SG</h3>
                          <p class="copyright"> As a multi-institutional initiative, our goal is to improve access to opportunity using algorithms, optimization and mechanism design. </p>
                        </div>
                        <div class="col-sm-4 col-md-3 item">
                          <h3>QUICK LINKS</h3>
                          <ul>
                              <li><a href="https://www.md4sg.com/aboutus.html">About Us</a></li>
                              <li><a href="https://www.md4sg.com/workshop/index.html">Events</a></li>
                              <li><a href="https://www.md4sg.com/colloquium/index.html">Colloquium Series</a></li>
                              <li><a href="https://www.md4sg.com/workinggroups/index.html">Working Groups</a></li>
                          </ul>
                      </div>
                        <div class="col-sm-4 col-md-3 item">
                            <h3>JOIN US</h3>
                            <ul>
                                <li><a href="https://forms.gle/yq8wbrv3LzhRfLjz7">Mailing List</a></li>
                            </ul>
                        </div>
                        <div class="col-lg-3 item social"><a href="https://twitter.com/MD4SG"><i class="icon ion-social-twitter"></i></a><a href="https://www.youtube.com/channel/UC2hBoxmzDtAwTTjRRM99f4w/videos"><i class="icon ion-social-youtube"></i></a><a href="mailto:organizers@md4sg.com"><i class="icon ion-email"></i></a><a href="https://calendar.google.com/calendar/r?cid=dTZqdnE1dW9pNjdiaXE2bGlvZ3Zkb2RoM2tAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ"><i class="icon ion-android-calendar"></i></a><a href="https://medium.com/@md4sg"><i class="icon ion-social-markdown"></i></a>
                            <p class="copyright">Updated March 2021. Website design by:<br>Kira Goldner + Sritej Attaluri + <a href="georgeobaido.com">George Obaido</a></p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
        <script>
            (function (i, s, o, g, r, a, m) {
                i["GoogleAnalyticsObject"] = r;
                (i[r] =
                    i[r] ||
                    function () {
                        (i[r].q = i[r].q || []).push(arguments);
                    }),
                    (i[r].l = 1 * new Date());
                (a = s.createElement(o)), (m = s.getElementsByTagName(o)[0]);
                a.async = 1;
                a.src = g;
                m.parentNode.insertBefore(a, m);
            })(window, document, "script", "../www.google-analytics.com/analytics.js", "ga");

            ga("create", "UA-93664120-1", "auto");
            ga("send", "pageview");
        </script>
    
      <!--Close Footer Section-->
      `;
    }
  }
  
  customElements.define('bottom-bar-component', bottomBar);
