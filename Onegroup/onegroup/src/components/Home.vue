<template>
  <div>
      <body class="fondo">
          <header>
                <b-navbar toggleable type="dark" variant="dark">
                    <b-navbar-brand href="#">OneGroup</b-navbar-brand>
                    <b-navbar-toggle target="navbar-toggle-collapse">
                    <template #default="{ expanded }">
                        <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
                        <b-icon v-else icon="chevron-bar-down"></b-icon>
                    </template>
                    </b-navbar-toggle>
                    <b-collapse id="navbar-toggle-collapse" is-nav>
                    <b-navbar-nav class="ml-auto">
                        <b-nav-item href="/Registro">Registrarse</b-nav-item>
                        <b-nav-item href="/">Iniciar Sesion</b-nav-item>
                        <b-nav-item href="#" disabled>Admins</b-nav-item>
                    </b-navbar-nav>
                    </b-collapse>
                </b-navbar>
          </header>
          <main>
                <div class="width">
                    <b-card bg-variant="dark" text-variant="white" title="Inicio Sesión" class="p-3">
                        <br>
                        <b-card-text>
                            <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                                <b-form-group
                                    id="input-group-1"
                                    label="Email address:"
                                    label-for="input-1"
                                    description="We'll never share your email with anyone else."
                                >
                                    <b-form-input
                                    id="input-1"
                                    v-model="form.email"
                                    type="email"
                                    placeholder="Enter email"
                                    required
                                    ></b-form-input>
                                </b-form-group>

                                <b-form-group id="input-group-2" label="Password:" label-for="input-2">
                                    <b-form-input
                                    type="password"
                                    id="input-2"
                                    v-model="form.password"
                                    placeholder="Enter password"
                                    required
                                    ></b-form-input>
                                </b-form-group>
                                <br>
                                <b-button type="submit" variant="primary">Submit</b-button>
                                
                                <b-button class="margin" type="reset" variant="danger">Clear</b-button>
                                </b-form>
                            </b-card-text>
                        <br>
                        <div>
                            <b-link href="/Registro">Registro</b-link>
                        </div>
                    </b-card>
                </div>
          </main>
          <footer class="footer">
              <h6>@Daarb Prueba Tecnica</h6>
          </footer>
      </body>
  </div>
</template>

<script>
export default {
    data() {
      return {
        form: {
          email: '',
          password: '',
        },
        show: true
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.password = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>

<style>
    .footer{
        background: #2b3138;
        color: aliceblue;
        text-align: center;
        font-family: Helvetica;
        padding: 2%;
    }
    .width{
        width: 30%;
        text-align: center;
        margin-left: 35%;
        margin-top: 4%;
        margin-bottom: 4%;   
    }
    .fondo{
        background-color: rgb(225, 233, 225);
    }
    .margin{
        margin-left: 35px;
    }
    
</style>