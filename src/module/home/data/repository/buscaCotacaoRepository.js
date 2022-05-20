import { FipeResultado } from "../../domain/model/fipeResultado"

const buscaCotacaoRepository = (axios) => async (tipo, marca, modelo, ano) => {
    try {
        const response = await axios.get(`/${tipo}/marcas/${marca}/modelos/${modelo}/anos/${ano}`)   
        return new FipeResultado(response.data) ?? {}  
       // return response.data.map((item) => new FipeResultado(item))  
    } catch (error) {
        throw Error
    }
}

export { buscaCotacaoRepository } 

