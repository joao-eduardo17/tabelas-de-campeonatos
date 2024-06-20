import { Component } from "react";
import PlacarInput from "../placarInput";
import Select from "../select";

export default class Placar extends Component {
    render() {
        return (
            <>
                <Select titulo="Time Casa" opcoes={["Corinthians", "Palmeiras"]}/>
                <PlacarInput />
                <Select titulo="Time Fora" opcoes={["Corinthians", "Palmeiras"]}/>
            </>
        )
    }
}