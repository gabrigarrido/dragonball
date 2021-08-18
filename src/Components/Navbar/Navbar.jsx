import 'Navbar.scss';

export default function Navbar(){
    return(
        <div className="navbar">
            <ul className="navbar_list">
                <li className="navbar__list__item"><a href="#!">Início</a></li>
                <li><a href="#!">Criar</a></li>
                <li><a href="#!">Deletar</a></li>
                <li><a href="#!">Sobre</a></li>
            </ul>     
        </div>
    )
}