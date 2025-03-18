import Lista from "../../components/listas/lista";
import CadastraPerfil from "../../components/modais/cadastraPerfil";

export default function Perfis() {
    return (
        <>
            <CadastraPerfil onClubesUpdated={() => {}}/>
            <Lista titulo="Perfis" itens={[]} />
        </>
    );
}