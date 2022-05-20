const buscaCotacaoUsecase = (repository) => async (tipo, marca, modelo, ano) => {
    try {
        return await repository(tipo, marca, modelo, ano)
    } catch (error) {
        throw error
    }
} 


export { buscaCotacaoUsecase }

