<template>
  <div>
    <div class="box-box">
      <button
        type="button"
        class="btn-back"
        v-show="!isFirstIndex"
        :disabled="isFirstIndex"
        @click="goBack"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-chevron-left"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
          />
        </svg>
      </button>
    </div>
    <div class="container bg-white">
      <span v-for="(step, i) in steps" :key="i"> {{ i + 1 }}</span>
      <section>
        <form>
          <!--Dados do profissional-->
          <template v-if="currentStep === 0">
            <!--Title-->
            <div class="row">
              <div class="col-11">
                <h1 class="titulo">Sobre o profissional</h1>
                <h3 class="subtitulo">Dados do Profissional</h3>
              </div>
            </div>

            <!--Content-->
            <div class="row">
              <div class="col-md-6">
                <!--Nome-->
                <div class="mb-4 input-error">
                  <label class="form-label"> Nome Completo* </label>
                  <input
                    id="nome"
                    type="text"
                    required
                    minlength="4"
                    maxlength="48"
                    v-model="person.nome"
                    class="form-control"
                    placeholder="Digite seu nome completo"
                  />
                  <span class="error"></span>
                </div>

                <!--CPF-->
                <div class="mb-4">
                  <label class="form-label"> CPF* </label>
                  <input
                    id="cpf"
                    type="text"
                    required
                    v-model="person.cpf"
                    class="form-control w-75"
                    placeholder="Digite seu CPF"
                    minlength="11"
                    onkeypress="$(this).mask('000.000.000-00');"
                  />
                </div>

                <!--Celular-->
                <div class="mb-4">
                  <label class="form-label"> Número de celular* </label>
                  <input
                    id="cel"
                    type="text"
                    required
                    v-model="person.cel"
                    class="form-control w-75"
                    minlength="11"
                    placeholder="(00) 0 0000-0000"
                    onkeypress="$(this).mask('(00) 00000-0000')"
                  />
                </div>

                <!-- Estado e Cidade-->
                <div class="row mb-5">
                  <!--Estado-->
                  <div class="col">
                    <label>Estado*</label>
                    <select v-model="person.estado" class="form-select">
                      <option disabled value="">Selecione um Estado</option>
                      <option
                        id="estado"
                        v-for="(estado, i) in estados"
                        :key="i"
                        value="{{estado.i}}"
                      >
                        {{ estado.nome }}
                      </option>
                    </select>
                  </div>

                  <!--Cidade-->
                  <div class="col">
                    <label for="">Cidade*</label>
                    <select class="form-select" v-model="person.cidade">
                      <option disabled value="">Selecione uma Cidade</option>
                      <option
                        v-for="(cidade, i) in cidades"
                        :key="i"
                        value="{{cidade.i}}"
                      >
                        {{ cidade.nome }}
                      </option>
                    </select>
                  </div>

                  <!--Navegação-->
                  <div>
                    <!--Progruesso-->
                    <div
                      class="d-flex align-items-center bd-highlight justify-content-between py-2 my-3"
                    >
                      <div class="progress" style="height: 25px">
                        <div
                          class="progress-bar"
                          role="progressbar"
                          style="width: 50%"
                          aria-valuemin="0"
                          aria-valuenow="1"
                          aria-valuemax="2"
                        ></div>
                      </div>
                      <h5>1 de 2</h5>
                    </div>

                    <!--Button Próximo-->
                    <button
                      v-if="isFirstIndex"
                      type="submit"
                      @click="goNext"
                      class="btn button"
                    >
                      PRÓXIMO
                    </button>
                  </div>
                </div>
              </div>

              <!--IMG-->
              <div class="col-md-6">
                <img
                  class="img-fluid"
                  src="@/assets/desktop-pagina-1.png"
                  alt="uma"
                />
              </div>
            </div>
          </template>

          <!--Detalhe do atendimento-->
          <template v-if="currentStep === 1">
            <div class="row">
              <div class="col-11">
                <h1 class="titulo">Sobre o atendimento</h1>
                <h3 class="subtitulo">Detalhes do atendimento</h3>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <!--Especialidade-->
                <div class="mb-3">
                  <label class="form-label"> Especialidade principal* </label>
                  <select
                    v-model="person.especialidade"
                    class="form-select"
                    placeholder="Selecione a especialidade"
                  >
                    <option disabled value="">
                      Selecione sua Especialidade
                    </option>
                    <option
                      v-for="(especialidade, i) in especialidades"
                      :key="i"
                      value="{{especialidade.i}}"
                    >
                      {{ especialidade.nome }}
                    </option>
                  </select>
                </div>

                <!--Valor-->
                <div class="mb-3">
                  <label class="form-label">
                    Informe o preço da consulta*
                  </label>
                  <div class="input-group flex-nowrap">
                    <span
                      id="addon-wrapping"
                      class="input-group-text text-white"
                      >R$</span
                    >
                    <input
                      id="valor"
                      type="text"
                      v-model="person.valor"
                      class="form-control"
                      placeholder="Valor"
                      aria-describedby="addon-wrapping"
                      onkeypress="$(this).mask(' ##0,00', {reverse: false});"
                    />
                  </div>
                </div>

                <!--Método de Pagamento-->
                <div class="mb-0">
                  <label class="form-label mb-3">
                    Formas de pagamento da consulta*
                  </label>
                </div>

                <!--Em dinheiro-->
                <div class="boxcheck custom-checkbox mb-4">
                  <input
                    class="mx-4"
                    type="checkbox"
                    id="dinheiro"
                    v-model="person.pagamento.dinheiro"
                  />
                  <label class="py-4 ms-4 w-100" for="dinheiro"
                    ><strong> Em dinheiro</strong></label
                  >
                </div>

                <!--Em Pix-->
                <div class="boxcheck custom-checkbox mb-4">
                  <input
                    class=""
                    type="checkbox"
                    id="pix"
                    v-model="person.pagamento.pix"
                  />
                  <label class="py-4 ms-4 w-100" for="pix"
                    ><strong>Pix</strong></label
                  >
                </div>

                <!--Crédito-->
                <div class="boxcheck custom-checkbox mb-4">
                  <input type="checkbox" name="" id="credit" />
                  <label class="py-4 ms-4 w-100" for="credit">
                    <strong>Cartão de crédito</strong>
                  </label>
                </div>

                <!--Progruesso-->
                <div
                  class="d-flex align-items-center bd-highlight justify-content-between p-2 mb-3"
                >
                  <div class="progress w-75" style="height: 25px">
                    <div
                      class="progress-bar"
                      role="progressbar"
                      style="width: 100%"
                      aria-valuemin="0"
                      aria-valuenow="2"
                      aria-valuemax="2"
                    ></div>
                  </div>
                  <h5>2 de 2</h5>
                </div>

                <button
                  v-if="isMiddleIndex"
                  type="submit"
                  @click="goNext"
                  class="btn button mb-0"
                >
                  PRÓXIMO
                </button>
              </div>

              <!--IMG-->
              <div class="col-md-6 px-0 py-4">
                <img
                  class="img-fluid"
                  src="@/assets/desktop-pagina-2.png"
                  alt=""
                />
              </div>
            </div>
          </template>

          <!--Revisão dos dados-->
          <template v-if="currentStep === 2">
            <div class="row mb-5">
              <div class="col-11">
                <h1 class="titulo">Revisão do cadastro</h1>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-6 col-sm-12">
                <!--Nome-->
                <div class="mb-3">
                  <label class="form-label fw-bolder mb-0">Nome Completo</label>
                  <p>{{ person.nome }}</p>
                </div>

                <!--CPF-->
                <div class="mb-3">
                  <label class="form-label fw-bolder mb-0">CPF</label>
                  <p>{{ person.cpf }}</p>
                </div>

                <!--Celular-->
                <div class="mb-3">
                  <label class="form-label fw-bolder mb-0">
                    Número de celular
                  </label>
                  <p>{{ person.cel }}</p>
                </div>

                <!--Estado/Cidade-->
                <div class="mb-3 col-11">
                  <label class="form-label fw-bolder mb-0">Estado/Cidade</label>
                  <div class="d-flex justify-content-start align-items-center">
                    <ul>
                      <li>{{ person.estado }}</li>
                      <li>{{ person.cidade }}</li>
                    </ul>
                  </div>
                </div>

                <!--Especialidade Principal-->
                <div class="mb-3 col-11">
                  <label class="form-label fw-bolder mb-0">
                    Especialidade principal
                  </label>
                  <p>{{ person.especialidade }}</p>
                </div>

                <!--Preço da consulta-->
                <div class="mb-3 col-11">
                  <label class="form-label fw-bolder mb-0">
                    Preço da consulta
                  </label>
                  <p>{{ person.valor }}</p>
                </div>

                <!--Formas de pagamentos da consulta-->
                <div class="mb-3 col-8">
                  <label class="form-label fw-bolder mb-0">
                    Formas de pagamentos da consulta
                  </label>
                  <div
                    className="d-flex justify-content-start align-items-center"
                  >
                    <ul v-for="(pagar, i) in pagamento" :key="i">
                      <li>{{ pagar.pagamento }}</li>
                    </ul>
                  </div>
                </div>

                <!--Finalizar Cadastro-->
                <div
                  class="d-flex flex-column text-center justify-content-center align-items-center mb-4"
                >
                  <button
                    type="submit"
                    class="btn btn-finish rounded-4 w-100 mb-3"
                    @click="goSubmit"
                  >
                    CADASTRAR PROFISSIONAL
                  </button>

                  <a href="#" class="text-center">Editar cadastro</a>
                </div>
              </div>

              <!--IMG-->
              <div class="col-lg-6 d-flex align-items-center">
                <img
                  class="img-fluid"
                  src="@/assets/desktop-pagina-3.png"
                  alt=""
                />
              </div>
            </div>
          </template>
        </form>
      </section>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

// import FormOne from '@/components/FormOne.vue'
import api from '@/services/api'

export default {
  name: 'FormMain',
  data() {
    const currentStep = 0
    const steps = []
    const person = {
      nome: null,
      cpf: null,
      cel: null,
      estado: null,
      cidade: null,
      especialidade: null,
      valor: null,
      pagamento: {
        dinheiro: null,
        pix: null,
        credit: {
          parceladoxUm: null,
          parceladoxDois: null,
          parceladoxTres: null,
        },
      },
    }

    return {
      currentStep,
      steps,
      person,
      estados: [],
      cidades: [],
      profissionais: [],
      especialidades: [],
    }
  },
  computed: {
    isFirstIndex() {
      return this.currentStep === 0
    },
    isMiddleIndex() {
      return this.currentStep === this.steps.length + 1
    },
    isLastIndex() {
      return this.currentStep === this.steps.length - 1
    },
  },
  created() {
    this.form = [
      { title: 'Dados do profissional' },
      { title: 'Detalhe do atendimento' },
      { title: 'Revisão dos dados' },
    ]
    // eslint-disable-next-line prettier/prettier
    api.get('/estados').then(response => (this.estados = response.data))
    // eslint-disable-next-line prettier/prettier
    api.get('/cidades').then(response => (this.cidades = response.data))
    api
      .get('/profissionais')
      // eslint-disable-next-line prettier/prettier
      .then(response => (this.profissionais = response.data))
    api
      .get('/especialidades')
      // eslint-disable-next-line prettier/prettier
      .then(response => (this.especialidades = response.data))
  },
  methods: {
    goBack() {
      if (!this.isFirstIndex) {
        this.currentStep -= 1
      }
    },
    goNext() {
      if (!this.isLastIndex) {
        this.currentStep += 1
      }
    },
    goSubmit(values) {
      console.log(values)
    },
  },
}
</script>
