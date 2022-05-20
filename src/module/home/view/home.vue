<template>
  <v-app>
    <v-app-bar app> barra superior </v-app-bar>

    <v-main>
      <v-container>
        <v-row justify="center">
          <v-col cols="12" sm="7" md="8" lg="4" xl="3">
            <v-card color="red" class="white--text" max-width="344" outlined>
              <v-list-item three-line>
                <v-list-item-content>
                  <div class="text-overline mb-4 white--text">Veículos</div>
                </v-list-item-content>
              </v-list-item>
              <v-card-actions>
                <v-btn @click="controller.buscarMarca('carros')" icon>
                  <v-icon>mdi-car-hatchback</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
            <v-card max-width="344" outlined color="blue" class="white--text">
              <v-list-item three-line>
                <v-list-item-content>
                  <div class="text-overline mb-4 white--text">Motos</div>
                </v-list-item-content>
              </v-list-item>
              <v-card-actions>
                <v-btn @click="controller.buscarMarca('motos')" icon>
                  <v-icon>mdi-motorbike</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
            <v-card color="green" class="white--text" max-width="344" outlined>
              <v-list-item three-line>
                <v-list-item-content>
                  <div class="text-overline mb-4 white--text">Caminhões</div>
                </v-list-item-content>
              </v-list-item>
              <v-card-actions>
                <v-btn @click="controller.buscarMarca('caminhoes')" icon>
                  <v-icon>mdi-dump-truck</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>

          <!-- <v-col cols="12" sm="7" md="8" lg="4" xl="3">
            
          </v-col>

          <v-col cols="12" sm="7" md="8" lg="4" xl="3">
            
          </v-col> -->


          <!-- <v-row justify="center"> -->
          <v-col cols="12" sm="7" md="8" lg="4" xl="3">
            <v-card color="cyan" class="white--text">
              <v-card-title> Marca </v-card-title>
              <v-card-text class="white--text">
                <v-autocomplete
                  label="Selecione a Marca"
                  color="white"
                  hide-no-data
                  hide-selected
                  placeholder="Selecione/digite a Marca"
                  prepend-icon="mdi-database-search"
                  :items="controller.marcas"
                  item-text="nome"
                  item-value="codigo"
                  v-model="controller.marca"
                ></v-autocomplete>
              </v-card-text>
            </v-card>

             <v-card color="cyan" class="white--text">
              <v-card-title> Modelo </v-card-title>
              <v-card-text class="white--text">
                <v-autocomplete
                  label="Selecione o Modelo"
                  color="white"
                  hide-no-data
                  hide-selected
                  placeholder="Selecione/digite o Modelo"
                  prepend-icon="mdi-database-search"
                  :items="controller.modelos"
                  item-text="nome"
                  item-value="codigo"
                  v-model="controller.modelo"
                ></v-autocomplete>
              </v-card-text>
            </v-card>

            <v-card color="cyan" class="white--text">
              <v-card-title> Ano </v-card-title>
              <v-card-text class="white--text">
                <v-autocomplete
                  label="Selecione o Ano"
                  color="white"
                  hide-no-data
                  hide-selected
                  placeholder="Selecione/digite o Modelo"
                  prepend-icon="mdi-database-search"
                  :items="controller.anos"
                  item-text="nome"
                  item-value="codigo"
                  v-model="controller.ano"
                ></v-autocomplete>
              </v-card-text>
            </v-card>

            <v-card color="cyan" class="white--text">
              <v-card-actions>
                <v-btn @click="controller.buscarCotacao()">Pesquisar</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>

          <!-- <v-card > -->
              <!-- <v-card-title> Flex box </v-card-title> -->
              <!-- <v-card-text class="white--text d-flex justify-space-between"> -->
                
                <v-list color="grey" class="white--text" width="20%">
                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title>Valor:</v-list-item-title>
                      <v-list-item-subtitle
                        v-text="controller.cotacao.Valor"
                      ></v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title>Marca:</v-list-item-title>
                      <v-list-item-subtitle
                        v-text="controller.cotacao.Marca"
                      ></v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title>Modelo:</v-list-item-title>
                      <v-list-item-subtitle
                        v-text="controller.cotacao.Modelo"
                      ></v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>

                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title>AnoModelo:</v-list-item-title>
                      <v-list-item-subtitle
                        v-text="controller.cotacao.AnoModelo"
                      ></v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title>Combustivel:</v-list-item-title>
                      <v-list-item-subtitle
                        v-text="controller.cotacao.Combustivel"
                      ></v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title>CodigoFipe:</v-list-item-title>
                      <v-list-item-subtitle
                        v-text="controller.cotacao.CodigoFipe"
                      ></v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title>MesReferencia:</v-list-item-title>
                      <v-list-item-subtitle
                        v-text="controller.cotacao.MesReferencia"
                      ></v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title>TipoVeiculo:</v-list-item-title>
                      <v-list-item-subtitle
                        v-text="controller.cotacao.TipoVeiculo"
                      ></v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title>SiglaCombustivel:</v-list-item-title>
                      <v-list-item-subtitle
                        v-text="controller.cotacao.SiglaCombustivel"
                      ></v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              <!-- </v-card-text> -->
            <!-- </v-card> -->

            <v-card color="#ECEFF1" class="white--text" width="500">
              <!-- <v-card-title> Gráfico </v-card-title> -->
              <!-- <v-card-text class="white--text"> -->
                <div id="chart" style="height: 200px; width: 100%"></div>
              <!-- </v-card-text> -->
            </v-card>


          <!-- <v-col cols="12" sm="7" md="8" lg="4" xl="3">
           
          </v-col>

          <v-col cols="12" sm="7" md="8" lg="4" xl="3">
            
          </v-col>

          <v-col cols="12" sm="7" md="8" lg="4" xl="3">
            
          </v-col> -->

          <!-- </v-row> -->
          
          

          <!-- <v-col cols="12" sm="7" md="8" lg="4" xl="3">
            
          </v-col>

          <v-col cols="12" sm="7" md="8" lg="4" xl="3">
            
          </v-col> -->
        </v-row>




        
      </v-container>
    </v-main>
  </v-app>
</template>


<script>
import { homeController } from "../di/di";
export default {
  data: (context) => ({
    controller: homeController(context),
  }),
  watch: {
    "controller.marca"() {
      this.controller.buscarModelo();
    },
    "controller.modelo"(novo, antigo) {
      console.log(novo, antigo);
      this.controller.buscarAno();
    },
  },
  mounted() {
    this.controller.mounted();
    // this.marcas = contreoller.resultado
  },
};
</script>