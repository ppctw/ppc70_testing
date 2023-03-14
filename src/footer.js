'use strict';

class Footer_c extends React.Component {
 
  render() {
 
    return (   
      <div class="footer">
      <div class="container text-center    ">
          <div class="row-fluid">          
          <div class="span4 smallspacetop">
            <p class="smaller">
              Copyright 2023 © Pingtung Peace Church.
            </p>
          </div>
         
          <div class="span4">
            <div class="text-center">
              <a class="totop" href='#'><i class="icon-chevron-up"></i></a>
            </div>
          </div>
          
          <div class="span4 smallspacetop">
            <ul class="social-links pull-right">
            <li class="facebook-link">
              <a
                href="https://www.facebook.com/PPC.EKKLESIA/?locale=zh_TW"
                class="facebook has-tip"
                target="_blank"
                title="Join us on Facebook"
                >Facebook</a
              >
            </li>
            <li class="youtube-link">
              <a
                href="https://www.youtube.com/@PingtungPeaceChurch"
                class="youtube has-tip"
                title="youtube"
                target="_blank"
                >youtube</a
              >
            </li>
            <li class="instagram-link">
              <a
                href="https://www.instagram.com/ppcofficial/"
                class="instagram has-tip"
                title="instagram"
                target="_blank"
                >instagram</a
              >
            </li>
            <li class="website-link">
              <a
                href="https://www.ppctw.org/"
                class="website has-tip"
                title="website"
                target="_blank"
                >webiste</a
              >
            </li>
            <li class="line-link">
              <a
                href="https://www.ppctw.org/"
                class="line has-tip"
                title="line"
                target="_blank"
                >webiste</a
              >
            </li>
            </ul>
            <div class="clearfix"></div>
          </div>          
        </div>
      </div>  
      </div>  
      );
  }
}

const root = ReactDOM.createRoot(document.getElementById('footer_c'));
root.render(<Footer_c />);

