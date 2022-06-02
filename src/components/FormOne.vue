<template>
  <div>
    <!--Title-->
    <div class="row">
      <div class="col-11">
        <h1 class="titulo">Sobre o profissional</h1>
        <h3 class="subtitulo">Dados do Profissional</h3>
      </div>
    </div>

    <!--Iput-->
    <div class="row">
      <div class="col-md-6">
        <!--Nome-->
        <div class="mb-4">
          <label class="form-label"> Nome Completo* </label>
          <input
            type="text"
            class="form-control"
            placeholder="Digite seu nome completo"
          />
        </div>

        <!--CPF-->
        <div class="mb-4">
          <label class="form-label"> CPF* </label>
          <input
            type="text"
            class="form-control w-75"
            placeholder="Digite seu CPF"
            onkeypress="$(this).mask('000.000.000-00');"
            required
          />
        </div>

        <!--Celular-->
        <div class="mb-4">
          <label class="form-label"> Número de celular* </label>
          <input
            type="text"
            class="form-control w-75"
            placeholder="(00) 0 0000-0000"
            onkeypress="$(this).mask('(00) 00000-0000')"
          />
        </div>

        <!-- Estado e Cidade-->
        <div class="row mb-5">
          <!--Estado-->
          <div class="col">
            <label>Estado*</label>
            <select
              class="form-select"
              placeholder="Selecione"
              aria-label="Selecionar seu estado"
            >
              <option value="#"></option>
              <option
                v-for="(estado, i) in estados"
                :key="i"
                value="{{estado.id}}"
              >
                {{ estado.nome }}
              </option>
            </select>
          </div>

          <!--Cidade-->
          <div class="col">
            <label for="">Cidade*</label>
            <select class="form-select" aria-label="Selecionar sua cidade">
              <option value=""></option>
              <option
                v-for="(cidade, i) in cidades"
                :key="i"
                value="{{cidade.id}}"
              >
                {{ cidade.nome }}
              </option>
            </select>
          </div>

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
          <router-link to="/form-secondary">
            <button type="submit" class="btn button">PRÓXIMO</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from '@/services/api'
export default {
  name: 'FormOne',
  data() {
    return {
      nome: null,
      cpf: null,
      telefone: null,
      estados: [],
      cidades: [],
    }
  },
  mounted() {
    // eslint-disable-next-line prettier/prettier
    api.get('/estados').then(response => (this.estados = response.data))
    // eslint-disable-next-line prettier/prettier
    api.get('/cidades').then(response => (this.cidades = response.data))
  },
}
</script>
