class FipeResultado {
    constructor(
        {
            Valor = '', 
            Marca = '', 
            Modelo = '',
            AnoModelo = '',
            Combustivel = '',
            CodigoFipe = '',
            MesReferencia = '',
            TipoVeiculo  = '',
            SiglaCombustivel = ''
        }
    )   { 
            this.Valor = Valor 
            this.Marca = Marca 
            this.Modelo = Modelo
            this.AnoModelo = AnoModelo
            this.Combustivel = Combustivel
            this.CodigoFipe = CodigoFipe
            this.MesReferencia = MesReferencia
            this.TipoVeiculo  = TipoVeiculo
            this.SiglaCombustivel = SiglaCombustivel    
        }
} 

export { FipeResultado }
