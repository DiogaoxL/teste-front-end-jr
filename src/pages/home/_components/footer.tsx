
export const Footer = () => {

    return (
        <>
            <footer className="footer">
                <div className="content-footer">
                    <aside className="nav-footer">
                        <ul className="about">
                            <p>Sobre nós</p>
                            <li>Conheça</li>
                            <li>Como comprar</li>
                            <li>Indicação e desconta</li>
                            <ul className="icons-about">
                                <li><img src="/public/assets/icons/023-facebook.svg" alt="" /></li>
                                <li><img src="/public/assets/icons/044-instagram.svg" alt="" /></li>
                                <li><img src="public/assets/icons/116-youtube.svg" alt="" /></li>
                            </ul>
                        </ul>
                        <ul className="infos">
                            <p>Informações úteis</p>
                            <li>Fale Conosco</li>
                            <li>Dúvidas</li>
                            <li>Prazos de entrega</li>
                            <li>Formas de Pagamento</li>
                            <li>Política de Privacidade</li>
                            <li>Trocas e Devoluções</li>
                        </ul>
                        <ul>
                            <p>Formas de Pagamento</p>
                            <ul>
                                <li><img className="icon-card-flag" src="/public/assets/images/formas_pagamento.png" alt="" /></li>
                            </ul>
                        </ul>
                    </aside>
                    <aside className="newsletter">
                        <h4>Cadastre-se e receba nossas <span>Novidades e promoções</span></h4>
                        <p>Assine a nossa newsletter. Inscreva-se para receber novidades, promoções e pesquisas personalizadas</p>
                        <div className="input-newsletter"><input type="email" placeholder="Seu email" />
                            <button>OK</button>
                        </div>
                    </aside>
                </div>
                <aside className="footer-copyrigth">
                    <p>
                        Copyright © 2019. Todos os direitos reservados. Todas as marcas e suas imagens são de propriedade de seus respectivos donos.
                        É vedada a reprodução, total ou parcial, de qualquer conteúdo sem expressa autorização.
                    </p>
                    <div className="img-footer">
                        <img src="public/assets/icons/econverse-logo.svg" alt="logotipo econverse" />
                        <img className="logo-footer" src="public/assets/icons/Icone-logo-fotter.svg" alt="logotipo vtex"/>
                    </div>
                </aside>
            </footer>
        </>
    )

}

