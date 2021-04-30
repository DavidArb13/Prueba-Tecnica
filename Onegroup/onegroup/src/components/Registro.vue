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
                    <b-card bg-variant="dark" text-variant="white" title="Registro" class="p-3">
                       
                        <b-card-text>
                            <div class="pading">
                    <hr>
                    <form v-on:submit.prevent="procesar()">
                        <p>
                           User Name: <input type="text" name="user" placeholder="User" class="form-control" v-model="contacto.UserName">
                        </p>
                        <div v-if="submited && !$v.contacto.UserName.required" class="alert alert-danger">Name is required</div>
                        <div v-if="submited && !$v.contacto.UserName.minLength" class="alert alert-danger">minimo 3</div>
                        <div v-if="submited && !$v.contacto.UserName.maxLength" class="alert alert-danger">maximo 10</div>
                        <p>
                           Password: <input type="password" name="Password" placeholder="Password" class="form-control" v-model="contacto.Password">
                        </p>
                        <div v-if="submited && !$v.contacto.Password.required" class="alert alert-danger">Password is required</div>
                        <div v-if="submited && !$v.contacto.Password.minLength" class="alert alert-danger">minimo 8</div>
                        <div v-if="submited && !$v.contacto.Password.maxLength" class="alert alert-danger">maximo 15</div>
                        <p>
                           Firs Name: <input type="text" name="FirsName" placeholder="FirsName" class="form-control" v-model="contacto.FirsName">
                        </p>
                        <div v-if="submited && !$v.contacto.FirsName.required" class="alert alert-danger">FirsName is required</div>
                        <div v-if="submited && !$v.contacto.FirsName.minLength" class="alert alert-danger">minimo 2</div>
                        <div v-if="submited && !$v.contacto.FirsName.maxLength" class="alert alert-danger">maximo 10</div>
                        <p>
                           Last Name: <input type="text" name="LastName" placeholder="LastName" class="form-control" v-model="contacto.LastName">
                        </p>
                        <div v-if="submited && !$v.contacto.LastName.required" class="alert alert-danger">LastName is required</div>
                        <div v-if="submited && !$v.contacto.LastName.minLength" class="alert alert-danger">minimo 2</div>
                        <div v-if="submited && !$v.contacto.LastName.maxLength" class="alert alert-danger">maximo 10</div>
                        <p>
                           Email: <input type="text" name="Email" placeholder="Email" class="form-control" v-model="contacto.Email">
                        </p>
                        <div v-if="submited && !$v.contacto.Email.required" class="alert alert-danger">Email is required</div>
                        <div v-if="submited && !$v.contacto.Email.minLength" class="alert alert-danger">minimo 8</div>
                        <div v-if="submited && !$v.contacto.Email.maxLength" class="alert alert-danger">maximo 50</div>
                        <div v-if="submited && !$v.contacto.Email.email" class="alert alert-danger">Debe ser un correo valido</div>
                        <hr>
                        <br>
                        <input type="submit" value="enviar" title="Enviar" class="btn btn-primary">
                    </form>
                </div>
                        </b-card-text>
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
    import { required, email, minLength, maxLength  } from 'vuelidate/lib/validators';
    export default {
        name: 'Registro',
        data() {
            return {
                submited: false,
                contacto: {
                    UserName:'',
                    Password:'',
                    FirsName:'',
                    LastName:'',
                    Email:''
                }
        
            }
        },
        methods: {
            procesar(){
                this.submited = true;
                this.$v.$touch();
                if(this.$v.$invalid){
                    return false;
                }
                alert(this.contacto);
            }
        },
        validations: {
            contacto:{
                UserName: {
                    required,
                    minLength: minLength(3),
                    maxLength: maxLength(10)
                },
                Password: {
                    required,
                    minLength: minLength(8),
                    maxLength: maxLength(15)
                },
                FirsName: {
                    required,
                    minLength: minLength(3),
                    maxLength: maxLength(10)
                },
                LastName: {
                    required,
                    minLength: minLength(2),
                    maxLength: maxLength(10)
                },
                Email: {
                    required,
                    minLength: minLength(8),
                    maxLength: maxLength(50),
                    email
                }
            }
        }
    }
</script>

<style>
    .pading{
        padding: 5%;
    }
</style>