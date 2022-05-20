import * as echarts from 'echarts';
import { Fipe } from "../domain/model/fipe"
import { FipeResultado } from "../domain/model/fipeResultado"

class HomeController {

    nome = ''
    codigo = ''
    marcas = []
    marca = ''
    modelos = []
    modelo = ''
    tipo = 'carros'
    anos = []
    ano = ''
    cotacao = []

    constructor(
        context,
        buscaFipeUsecase,
        buscaFipeModeloUsecase,
        buscaFipeAnoUsecase,
        buscaCotacaoUsecase,
        buscaValoresGraficoUsecase) {
        this.context = context
        this.buscaFipeUsecase = buscaFipeUsecase
        this.buscaFipeModeloUsecase = buscaFipeModeloUsecase
        this.buscaFipeAnoUsecase = buscaFipeAnoUsecase
        this.buscaCotacaoUsecase = buscaCotacaoUsecase
        this.buscaValoresGraficoUsecase = buscaValoresGraficoUsecase
    }

    async buscarMarca(tipo) {
        try {
            this.tipo = tipo
            this.marcas = await this.buscaFipeUsecase(tipo)
        } catch (error) {
            alert(error)
        }
    }

    async buscarModelo() {
        try {
            //console.log(this.tipo, this.marca)
            this.modelos = await this.buscaFipeModeloUsecase(this.tipo, this.marca)
        } catch (error) {
            alert(error)
        }
    }

    async buscarAno() {
        try {
            // this.tipo = tipo
            // this.modelo = modelo
            console.log(this.tipo, this.marca, this.modelo)
            this.anos = await this.buscaFipeAnoUsecase(this.tipo, this.marca, this.modelo)
            //console.log(this.anos)
        } catch (error) {
            alert(error)
        }
    }

    async buscarCotacao() {
        try {
            this.cotacao = await this.buscaCotacaoUsecase(this.tipo, this.marca, this.modelo, this.ano)
            this.criaGrafico()
            //console.log(this.anos)
        } catch (error) {
            alert(error)
        }
    }


    mounted() {
        //   this.criaGrafico()
    }

    async criaGrafico() {
        const grafico = await this.buscaValoresGraficoUsecase(this.tipo, this.marca, this.modelo, this.anos)
        const chartDiv = document.getElementById('chart')
        if (chartDiv) {
            const myChart = echarts.init(chartDiv)
            myChart.setOption({
                grid: {
                    left: 100,
                    bottom: 30,
                    top: 30,
                    right: 30,
                },
                xAxis: {
                    type: 'category',
                    data: grafico.map((grafico) => grafico.valor.AnoModelo),
                },
                yAxis: {
                    type: 'value',
                    axisLabel: {
                        formatter: function (value) {
                            return value
                                .toLocaleString('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL',
                                })
                                .replace('R$ ', '')
                        },
                    },
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow',
                    },
                    formatter: function (params) {
                        var tar = params[0]
                        return (
                            tar.name +
                            '<br/> Valor: ' +
                            tar.value.toLocaleString('pt-BR', {
                                style: 'currency',
                                currency: 'BRL',
                            })
                        )
                    },
                },
                series: [

                    {
                        data: grafico.map((grafico) => {
                            return {
                                value: parseFloat(
                                    grafico.valor.Valor.replace('R$ ', '')
                                        .split('.')
                                        .join('')
                                        .replace(',', '.')
                                ),
                            }
                        }),
                        areaStyle: {
                            opacity: 0.4,
                            color: 'blue',
                        },
                        smooth: true,
                        lineStyle: { color: 'blue' },
                        type: 'line',
                    },
                    {
                        data: grafico.map((grafico) => {
                            return {
                                value: parseFloat(
                                    grafico.valor.Valor.replace('R$ ', '')
                                        .split('.')
                                        .join('')
                                        .replace(',', '.')
                                ),
                                itemStyle: { color: 'red' },
                            }
                        }),
                        type: 'bar',
                    },
                ],
            })
        }

    }
}

export { HomeController } 