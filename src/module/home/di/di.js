import axios from "axios";
import { HomeController } from "../controller/homeController";
import { buscaCotacaoRepository } from "../data/repository/buscaCotacaoRepository";
import { buscaFipeAnoRepository } from "../data/repository/buscaFipeAnoRepository";
import { buscaFipeModeloRepository } from "../data/repository/buscaFipeModeloRepository";
import { buscaFipeRepository } from "../data/repository/buscaFipeRepository";
import { buscaCotacaoUsecase } from "../domain/usecase/buscaCotacaoUsecase";
import { buscaFipeAnoUsecase } from "../domain/usecase/buscaFipeAnoUsecase";
import { buscaFipeModeloUsecase } from "../domain/usecase/buscaFipeModeloUsecase";
import { buscaFipeResultadoUsecase } from "../domain/usecase/buscaFipeResultadoUsecase";
import { buscaFipeUsecase } from "../domain/usecase/buscaFipeUsecase";
import { buscaValoresGraficoUsecase } from "../domain/usecase/buscaValoresGraficoUsecase";

const axiosInstance = axios.create({
    baseURL: "https://parallelum.com.br/fipe/api/v1"
})

const buscaFipeRepositoryImpl = buscaFipeRepository(axiosInstance)
const buscaFipeUsecaseImpl = buscaFipeUsecase(
    buscaFipeRepositoryImpl
)

const buscaFipeModeloRepositoryImpl = buscaFipeModeloRepository(axiosInstance)
const buscaFipeModeloUsecaseImpl = buscaFipeModeloUsecase(
    buscaFipeModeloRepositoryImpl
)

const buscaFipeAnoRepositoryImpl = buscaFipeAnoRepository(axiosInstance)
const buscaFipeAnoUsecaseImpl = buscaFipeAnoUsecase(
    buscaFipeAnoRepositoryImpl
)

const buscaCotacaoRepositoryImpl = buscaCotacaoRepository(axiosInstance)
const buscaCotacaoUsecaseImpl = buscaCotacaoUsecase(
    buscaCotacaoRepositoryImpl
)

const buscaValoresGraficoUsecaseImpl = buscaValoresGraficoUsecase(
    buscaCotacaoRepositoryImpl
)


const homeController = (context) => 
    new HomeController(context, buscaFipeUsecaseImpl, buscaFipeModeloUsecaseImpl, buscaFipeAnoUsecaseImpl, buscaCotacaoUsecaseImpl, buscaValoresGraficoUsecaseImpl)

export { homeController }

