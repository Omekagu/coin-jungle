import React from 'react';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__sectionOne">
        <div className="footer__copyright">
          <p className="footer__copyright--text">
            © 2023 CoinJungle. All Rights Reserved.
          </p>
        </div>

        <div className="footer__appDownload">
          <img
            src="https://static.coingecko.com/s/coingecko_logos/google_play_store-cb1f298b04afa7f74639a948d9b2e22e4aa6eea9486a2b0442c2cf9bdcda63e8.svg"
            alt="playstore"
            className="footer__appDownload--andriod"
          />

          <img
            className="footer__appDownload--andriod"
            src="https://static.coingecko.com/s/coingecko_logos/apple_app_store-558245a688cc13737dfb861fd82b252d75d5afbaf343c06e3067a454675bbe05.svg"
            alt="applestore"
          />
        </div>
      </div>

      <div className="footer__disclaimer">
        <a href="hah">
          <h5 className="footer__disclaimer--text">
            IMPORTANT DISCLAIMER:{' '}
            <p className="footer__disclaimer--paragraph">
              All content provided herein our website, hyperlinked sites,
              associated applications, forums, blogs, social media accounts and
              other platforms (“Site”) is for your general information only,
              procured from third party sources. We make no warranties of any
              kind in relation to our content, including but not limited to
              accuracy and updatedness. No part of the content that we provide
              constitutes financial advice, legal advice or any other form of
              advice meant for your specific reliance for any purpose. Any use
              or reliance on our content is solely at your own risk and
              discretion. You should conduct your own research, review, analyse
              and verify our content before relying on them. Trading is a highly
              risky activity that can lead to major losses, please therefore
              consult your financial advisor before making any decision. No
              content on our Site is meant to be a solicitation or offer.
            </p>
          </h5>
        </a>
      </div>
    </div>
  );
};

export default Footer;
