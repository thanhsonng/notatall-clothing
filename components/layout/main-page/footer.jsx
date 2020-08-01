function Footer() {
  const currentYear = (new Date()).getFullYear();

  return (
    <footer>
      <div className="media">
        <a href="https://www.instagram.com/fustic.studio">
          <img src="/instagram.png" alt="Fustic on Instagram" className="instagram" />
        </a>
        <a href="https://www.facebook.com/Fustic.studio">
          <img src="/facebook.png" alt="Fustic on Facebook" className="facebook" />
        </a>
        <a href="https://fustic.studio">
          <img src="/eye.png" alt="Fustic Website" className="web" />
        </a>
      </div>

      <div className="copyright">
        All rights reserved • @fustic. {currentYear}
      </div>

      <style jsx>
        {`
        footer {
          display: grid;
          grid-template-rows: 1fr 1fr;
          row-gap: 0.8em;
          justify-items: center;

          text-align: center;

          .media {
            display: grid;
            grid-template-columns: min-content min-content min-content;
            column-gap: 15px;

            > a {
              display: flex;
              align-items: center;
            }

            img {
              &.instagram, &.facebook {
                height: 13px;
              }

              &.web {
                height: 8px;
              }
            }
          }

          .copyright {
            text-transform: uppercase;
            font-size: var(--fontsize-xs);
            font-weight: var(--fontweight-bold);
          }

          @media screen and (min-width: 1200px) {
            position: fixed;
            bottom: 0;
            z-index: 1000;
            width: 100%;
            padding: var(--padding-header);

            max-width: 1920px;

            grid-template-rows: none;
            grid-template-columns: 1fr 1fr;
            align-items: center;

            .media {
              justify-self: start;
              column-gap: 18px;
            }

            .copyright {
              justify-self: end;
            }
          }
        }
        `}
      </style>
    </footer>
  );
}

export default Footer;