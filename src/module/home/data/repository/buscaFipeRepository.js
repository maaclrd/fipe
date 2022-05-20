import { Fipe } from "../../domain/model/fipe"

const buscaFipeRepository = (axios) => async (tipo) => {
    try {
       
        const response = await axios.get(`/${tipo}/marcas`) 
        return response.data.map((item) => new Fipe(item))  
     //   return new Fipe(response.data.map) ?? {}      
    } catch (error) {
        throw Error
    }
}

export { buscaFipeRepository } 

