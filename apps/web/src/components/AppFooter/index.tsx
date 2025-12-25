import AppContainer from "@components/AppContainer";
import AppLogo from "@components/AppLogo";
import S from "./styles.module.scss";
export default function AppFooter() {
  return (
    <footer className={S.footer}>
      <AppContainer>
        <div className={S.footer__content}>
          <div className={S.footer__logo}>
            <AppLogo />
            <p className={S.footer__description}>
              O principal catálogo de automação. Crie mais rápido com fluxos de
              trabalho comprovados.
            </p>
          </div>
          <div className={S.footer__policies}>
            <p className={S.footer__copyright}>
              © {new Date().getFullYear()} AutoFlow. Todos os direitos
              reservados.
            </p>
            <ul className={S.footer__links}>
              <li>
                {/* biome-ignore lint:a11y/useValidAnchor -- placeholder link with no actual target */}
                <a className={S.footer__links__item} href="#">
                  Termos
                </a>
              </li>
              <li>
                {/* biome-ignore lint:a11y/useValidAnchor -- placeholder link with no actual target */}
                <a className={S.footer__links__item} href="#">
                  Privacidade
                </a>
              </li>
              <li>
                {/* biome-ignore lint:a11y/useValidAnchor -- placeholder link with no actual target */}
                <a className={S.footer__links__item} href="#">
                  Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>
      </AppContainer>
    </footer>
  );
}
