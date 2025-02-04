import { Component } from "react";
import Campeonato from "./pages/campeonato";
import Navbar from "./components/navbar";
import CriacaoCampeonato from "./pages/criacaoCampeonato";
import CadastroUsuario from "./pages/cadastros/cadastro";
import Estatisticas from "./pages/estatisticas";
import LoginUsuario from "./pages/cadastros/login";

type State = {
  tela: string
}

export default class Rotas extends Component<{}, State> {
  constructor(props: {} | Readonly<{}>){
    super(props)
    this.state = {
      tela: 'Home' // Mudar conforme a aplicação pede
    }
    this.mudaTela = this.mudaTela.bind(this)
  }

  mudaTela(novaTela: string, evento: Event) {
    evento.preventDefault()
    this.setState({
      tela: novaTela
    })
  }

  render() {
    const navbar = <Navbar paginas={["Home", "Criação de Campeonato", "Campeonato", "Cadastro Usuário", "Estatísticas(teste)", "Login"]} mudaTela={this.mudaTela}/>

    if(this.state.tela === "Home"){
      return (
        <>
          {navbar}
        </>
      );
    } else if(this.state.tela === "Criação de Campeonato"){
      return (
        <>
          {navbar}
          <CriacaoCampeonato/>
        </>
      )
    } else if(this.state.tela === "Campeonato"){
      return (
        <>
          {navbar}
          <Campeonato/>
        </>
      )
    } else if(this.state.tela === "Cadastro Usuário"){
      return(
        <>
          {navbar}
          <CadastroUsuario/>
        </>
      )
    } else if(this.state.tela === "Estatísticas(teste)"){
      return(
        <>
          {navbar}
          {/*<Estatisticas clube={{derrotas:0, empates: 3, vitorias: 17, jogos: 20, pontos: 44, pos: 1, gc: 2, gp: 24, sg: 22, campId: 1, clubeId:2}} historico={[{clubeCasaId: 2, clubeForaId: 3, placarCasa: 4, placarFora: 2, rodadaId: 1}, {clubeCasaId: 2, clubeForaId: 3, placarCasa: 4, placarFora: 2, rodadaId: 1}}]}/>*/}
        </>
      )
    } else if(this.state.tela === "Login"){
      return(
        <>
          <LoginUsuario />
        </>
      )
    }
  }
}
