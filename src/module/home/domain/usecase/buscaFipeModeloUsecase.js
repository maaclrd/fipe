const buscaFipeModeloUsecase = (repository) => async (tipo, marca) => {
    try {
        return await repository(tipo, marca)
    } catch (error) {
        throw error
    }
} 


export { buscaFipeModeloUsecase }

