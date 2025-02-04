import { Component } from "react";
import Tabela from "../../components/tabela";
import CadastraPartida from "../../components/modais/cadastraPartida";
import Clubes from "../../server/rotas/clubes";
import Estatistica from "../../interfaces/estatistica";
import Estatisticas from "../../server/rotas/estatisticas";
import ClubeTabela from "../../interfaces/clubeTabela";
import ordenaClubes from "../../scripts/ordenador";

interface State {
    clubes: ClubeTabela[]
}

export default class Campeonato extends Component<{}, State> {
    private api: Estatisticas = new Estatisticas()
    private clube: Clubes = new Clubes()
 
    constructor(props: {}) {
        super(props);
        this.state = {clubes: []}
    }

    async converteClube(estatistica: Estatistica) {
        const clube = await this.clube.getOneClube(estatistica.clubeId)
        const clubeTabela = {
            ...estatistica, 
            nome: clube.nome
        }

        return clubeTabela
    } 
    
    // Visão ou outro recurso no banco pode resolver

    async converteTudo(estatisticas: Estatistica[]) {
        const clubes: ClubeTabela[] = []
        for(let e of estatisticas) {
            const clube: any = await this.converteClube(e)
            clubes.push(clube)
        }
        this.setState({clubes: clubes})
    }

    async componentDidMount() {
        try {
            const estatisticas: Estatistica[] = await this.api.getEstatisticaByCampeonato(1)
            ordenaClubes(estatisticas)
            await this.converteTudo(estatisticas)
            console.log(this.state.clubes)
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