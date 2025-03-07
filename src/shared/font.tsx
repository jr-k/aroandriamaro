import { FC } from "react"
import { Global, css } from "@emotion/react"

const Font: FC = () => {
  return (
    <Global
      styles={css`
        /* Fira Code */
        @font-face {
          font-family: "Fira Code";
          src: local("Fira Code"), url("/fonts/fira-code.regular.ttf");
          font-weight: 400;
          font-display: swap;
        }
        /* Metropolis */
        @font-face {
          font-family: "Metropolis";
          src: local("Metropolis"), url("/fonts/metropolis/metropolis.thin.otf");
          font-weight: 100;
          font-display: swap;
        }
        @font-face {
          font-family: "Metropolis";
          src: local("Metropolis"),
            url("/fonts/metropolis/metropolis.extra-light.otf");
          font-display: swap;
          font-weight: 200;
        }
        @font-face {
          font-family: "Metropolis";
          src: local("Metropolis"),
            url("/fonts/metropolis/metropolis.light.otf");
          font-weight: 300;
          font-display: swap;
        }
        @font-face {
          font-family: "Metropolis";
          src: local("Metropolis"),
            url("/fonts/metropolis/metropolis.regular.otf");
          font-weight: 400;
          font-display: swap;
        }
        @font-face {
          font-family: "Metropolis";
          src: local("Metropolis"),
            url("/fonts/metropolis/metropolis.medium.otf");
          font-weight: 500;
          font-display: swap;
        }
        @font-face {
          font-family: "Metropolis";
          src: local("Metropolis"),
            url("/fonts/metropolis/metropolis.semi-bold.otf");
          font-weight: 600;
          font-display: swap;
        }
        @font-face {
          font-family: "Metropolis";
          src: local("Metropolis"), url("/fonts/metropolis/metropolis.bold.otf");
          font-weight: 700;
          font-display: swap;
        }
        @font-face {
          font-family: "Metropolis";
          src: local("Metropolis"),
            url("/fonts/metropolis/metropolis.extra-bold.otf");
          font-weight: 800;
          font-display: swap;
        }
        @font-face {
          font-family: "Metropolis";
          src: local("Metropolis"),
            url("/fonts/metropolis/metropolis.black.otf");
          font-weight: 900;
          font-display: swap;
        }
      `}
    />
  )
}

export default Font
