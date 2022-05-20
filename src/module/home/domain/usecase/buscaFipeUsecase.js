const buscaFipeUsecase = (repository) => async (fipe) => {
    try {
        return await repository(fipe)
    } catch (error) {
        throw error
    }
} 


export { buscaFipeUsecase }

