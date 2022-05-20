import { Fipe } from "../../domain/model/fipe"

const buscaFipeResultadoRepository = (axios) => async (tipo, marca, modelo) => {
    try {
        const response = await axios.get(`/${tipo}/marcas/${marca}/modelos/${modelo}/Resultados`)   
        return response.data.map((item) => new Fipe(item))  
     //   return new Fipe(response.data.map) ?? {}      
    } catch (error) {
        throw Error
    }
}

export { buscaFipeResultadoRepository } 

