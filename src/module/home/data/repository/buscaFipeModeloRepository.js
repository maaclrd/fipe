import { Fipe } from "../../domain/model/fipe"

const buscaFipeModeloRepository = (axios) => async (tipo, marca) => {
    try {
        const response = await axios.get(`/${tipo}/marcas/${marca}/modelos`)  
        return response.data.modelos.map((item) => new Fipe(item))  
     //   return new Fipe(response.data.map) ?? {}      
    } catch (error) {
        throw Error
    }
}

export { buscaFipeModeloRepository } 

