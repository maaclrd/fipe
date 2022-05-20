import { Fipe } from "../../domain/model/fipe"

const buscaFipeAnoRepository = (axios) => async (tipo, marca, modelo) => {
    try {
        const response = await axios.get(`/${tipo}/marcas/${marca}/modelos/${modelo}/anos`)   
        return response.data.map((item) => new Fipe(item))  
     //   return new Fipe(response.data.map) ?? {}      
    } catch (error) {
        throw Error
    }
}

export { buscaFipeAnoRepository } 

