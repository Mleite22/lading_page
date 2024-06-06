import "./HeaderPage.css"


const HeaderPage = () => {
    return (
        <div className="menu">
            <div className="logo">
                <img src="../img/myLifeBrancoTop.svg" alt="" />
            </div>
            <div className="links-menu">
                <a href="http://">Nossos Trabalhos</a>
                <a href="http://">  Destaques</a>
                <a href="http://">  Depoimentos</a>
                <a href="http://">  Contatos</a>
            </div>
        </div>
    )
}

export default HeaderPage;
