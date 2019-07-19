/* eslint-disable react/no-danger */
import React from 'react';
import Helmet from 'react-helmet';

// TODO: use Helmet to extract mailchimp style stuff,
// figure out if form should be replaced
const embed = `
<!-- Begin MailChimp Signup Form -->

<div id="mc_embed_signup">
<form action="https://justinmhill.us13.list-manage.com/subscribe/post?u=ca46789441c3579359552494a&amp;id=1dc2519119" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
    <div id="mc_embed_signup_scroll">
	<label for="mce-EMAIL">Subscribe to our mailing list</label>
	<input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="email address" required>
    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_ca46789441c3579359552494a_1dc2519119" tabindex="-1" value=""></div>
    <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
    </div>
</form>
</div>

<!--End mc_embed_signup-->
`;

const MailChimpSignup = () => (
  <React.Fragment>
    <Helmet>
      <link
        href="//cdn-images.mailchimp.com/embedcode/slim-10_7.css"
        rel="stylesheet"
        type="text/css"
      />
      <style type="text/css">
        {`#mc_embed_signup {
            background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif;
          }
	        /* Add your own MailChimp form style overrides in your site stylesheet or in this style block.
            We recommend moving this block and the preceding CSS link to the HEAD of your HTML file.

          */`}
      </style>
    </Helmet>
    <span dangerouslySetInnerHTML={{ __html: embed }} />
  </React.Fragment>
);

export default MailChimpSignup;
