import { Component } from "react";
import Campeonato from "./pages/campeonato";
import Navbar from "./components/navbar";

type State = {
  tela: string
}

export default class Rotas extends Component<{}, State> {
  constructor(props: {} | Readonly<{}>){
    super(props)
    this.state = {
      tela: 'Home'
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
    const navbar = <Navbar paginas={["Home", "Campeonato"]} mudaTela={this.mudaTela}/>

    if(this.state.tela === "Home"){
      return (
        <>
          {navbar}
        </>
      );
    } else if(this.state.tela === "Campeonato"){
      return (
        <>
          {navbar}
          <Campeonato/>
        </>
      )
    }
  }
}
