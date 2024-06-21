import { Component } from "react";

async function carregaClubes() {
    const response = await fetch('http://localhost:8080/clube', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
    const result = await response.json()
    console.log(result)
    return result
}

export default class Home extends Component {

    render() {
        return (
            <>
               
            </>
        )
    }
}