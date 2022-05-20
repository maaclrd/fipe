const buscaValoresGraficoUsecase = (repository) => async (tipo, marca, modelo, anos) => {
    try {
        const anosComValor = await Promise.all(
            anos.map(async (ano) => {
                ano['valor'] = await repository(
                    tipo, 
                    marca, 
                    modelo, 
                    ano.codigo
                )
        return ano 
    }) 
    )
    return anosComValor.reverse() 
} catch (error) {
    throw error
    }
}

export { buscaValoresGraficoUsecase }

