import { Component } from "react";
import Tabela from "../../components/tabela";
import CadastraPartida from "../../components/modais/cadastraPartida";
import Clubes from "../../server/rotas/clubes";
import Estatistica from "../../interfaces/estatistica";
import Estatisticas from "../../server/rotas/estatisticas";
import ClubeTabela from "../../interfaces/clubeEstatistica";
import ordenaClubes from "../../scripts/ordenador";
import ClubeEstatistica from "../../server/rotas/clubeEstatisticas";

interface State {
    clubes: ClubeTabela[]
}

export default class Campeonato extends Component<{}, State> {
    private api: ClubeEstatistica = new ClubeEstatistica()
 
    constructor(props: {}) {
        super(props);
        this.state = {clubes: []}
    }

    // async converteClube(estatistica: Estatistica) {
    //     const clube = await this.clube.getOneClube(estatistica.clubeId)
    //     const clubeTabela = {
    //         ...estatistica, 
    //         nome: clube.nome
    //     }

    //     return clubeTabela
    // } 
    
    // Visão ou outro recurso no banco pode resolver

    // async converteTudo(estatisticas: Estatistica[]) {
    //     const clubes: ClubeTabela[] = []
    //     for(let e of estatisticas) {
    //         const clube: any = await this.converteClube(e)
    //         clubes.push(clube)
    //     }
    //     this.setState({clubes: clubes})
    // }

    async componentDidMount() {
        try {
            const clubes: ClubeTabela[] = await this.api.getClubeEstatisticaByCampeonato(1)
            console.log(clubes)
            this.setState({clubes: clubes})
        } catch(error){
            console.error(error);
        }
    }

    render() {
        const titulos = ["POS", "CLUBE", "PTS", "JOGOS", "VIT", "EMP", "DER", "SG", "GP", "GC"]
        
        
        return (
            <>
                <Tabela titulos={titulos} clubes={this.state.clubes}/>
                <CadastraPartida/>
            </>
        )
    }
}