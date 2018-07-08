import React from 'react';

const SiteFooter = ({ contact, social }) => (
  <footer class="footer">
    <div class="pure-menu pure-menu-horizontal">
      <ul>
        <li class="pure-menu-item footer-item">
          <a href={`mailto:${contact.email}`}>
            <i class="fa fa-envelope" /> Email
          </a>
        </li>

        <li class="pure-menu-item footer-item">
          <a href={`https://gitlab.com/${social.gitlab}`}>
            <i class="fa fa-gitlab" /> GitLab
          </a>
        </li>

        <li class="pure-menu-item footer-item">
          <a href={`https://github.com/${social.github}`}>
            <i class="fa fa-github" /> GitHub
          </a>
        </li>

        <li class="pure-menu-item footer-item">
          <a href={`https://twitter.com/${social.twitter}`}>
            <i class="fa fa-twitter" /> Twitter
          </a>
        </li>
      </ul>
    </div>
  </footer>
);

export default SiteFooter;
