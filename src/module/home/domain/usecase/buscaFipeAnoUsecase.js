const buscaFipeAnoUsecase = (repository) => async (tipo, marca, modelo) => {
    try {
        return await repository(tipo, marca, modelo)
    } catch (error) {
        throw error
    }
} 


export { buscaFipeAnoUsecase }

