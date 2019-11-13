import React, {Component} from 'react'
import Rodape from '../components/Rodape'
import '../assets/css/flexbox.css';
import '../assets/css/reset.css';
import '../assets/css/style.css';
import '../assets/css/cabecalho.css';
import logo from '../assets/img/icon-login.png'
class Categoria extends Component {
    render(){
        return (
            <div>
                <header class="cabecalhoPrincipal">
                    <div class="container">
                        <img src={logo} />

                        <nav class="cabecalhoPrincipal-nav">
                            Administrador
                    </nav>
                    </div>
                </header>

                <main class="conteudoPrincipal">
                    <section class="conteudoPrincipal-cadastro">
                        <h1 class="conteudoPrincipal-cadastro-titulo">Categorias</h1>
                        <div class="container" id="conteudoPrincipal-lista">
                            <table id="tabela-lista">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Título</th>
                                    </tr>
                                </thead>

                                <tbody id="tabela-lista-corpo"></tbody>
                            </table>
                        </div>

                        <div class="container" id="conteudoPrincipal-cadastro">
                            <h2 class="conteudoPrincipal-cadastro-titulo">
                                Cadastrar Tipo de Evento
                        </h2>
                            <form>
                                <div class="container">
                                    <input
                                        type="text"
                                        id="nome-tipo-evento"
                                        placeholder="tipo do evento"
                                    />
                                    <button class="conteudoPrincipal-btn conteudoPrincipal-btn-cadastro">
                                        Cadastrar
                                </button>
                                </div>
                            </form>
                        </div>
                    </section>
                </main>
                <Rodape />
            </div>
        )
    }
}

export default Categoria