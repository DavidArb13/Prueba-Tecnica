<template>
  <body class="fondo">
    <header>
      <b-navbar toggleable type="dark" variant="dark">
        <b-navbar-brand href="/">OneGroup</b-navbar-brand>
        <b-navbar-toggle target="navbar-toggle-collapse">
          <template #default="{ expanded }">
            <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
            <b-icon v-else icon="chevron-bar-down"></b-icon>
          </template>
        </b-navbar-toggle>
        <b-collapse id="navbar-toggle-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
              <b-nav-item href="/Products">Productos</b-nav-item>
              <br>
            <b-button variant="danger" v-on:click="onclick"
              >Cerrar Sesion</b-button
            >
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </header>
    <main>
      <div class="container mt-5 mb-5">
          <h1 class="mb-5 text-center">Crear Productos</h1>

        <b-form v-on:submit="createdd()">
        <div class="row">
          <div class="col-3 text-center">
            <label class="">Imagen</label>
            <br /><br />
            <label class="">Nombre producto</label>
            <br /><br />
            <label class="">Precio</label>
            <br /><br />
            <label class="">Categoria</label>
            <br /><br />
            <label class="">Calificación</label>
          </div>

          <div class="col-4">
            <b-form-input
              class="col-9"
              id="input-1"
              v-model="crear.ImageProduct"
              trim
            ></b-form-input>
            <b-form-input
              class="col-9 mt-3"
              id="input-2"
              v-model="crear.NameProduct"
              trim
            ></b-form-input>
            <b-form-input
              class="col-9 my-3"
              id="input-3"
              v-model="crear.PriceProduct"
              trim
            ></b-form-input>
            <b-form-input
              class="col-9 mt-3"
              id="input-4"
              v-model="crear.CatagoryProduct"
              trim
            ></b-form-input>
            <b-form-rating
              class="mt-3"
              id="rating-inline"
              v-model="crear.Qualification"
              inline
              value=""
            ></b-form-rating>
            <br><br>
            <b-button variant="success" type="submit">Crear</b-button>
          </div>
            
          <div class="col-4">
              <b-img src="https://cdn.pixabay.com/photo/2017/03/21/02/00/user-2160923_960_720.png" fluid alt="Fluid image"></b-img>
          </div>

        </div>
        </b-form>
      </div>

      <b-container fluid class="p-5 tamano bg-dark">
        <b-row>
            <b-col>
            <b-img class="img" thumbnail fluid src="https://picsum.photos/250/250/?image=54" alt="Image 1"></b-img>
            </b-col>
            <b-col>
            <b-img class="img" thumbnail fluid src="https://picsum.photos/250/250/?image=58" alt="Image 2"></b-img>
            </b-col>
            <b-col>
            <b-img class="img" thumbnail fluid src="https://picsum.photos/250/250/?image=59" alt="Image 3"></b-img>
            </b-col>
            <b-col>
            <b-img class="img" thumbnail fluid src="https://cdn.pixabay.com/photo/2021/04/25/17/23/mountains-6207115_960_720.jpg" alt="Image 3"></b-img>
            </b-col>
            <b-col>
            <b-img class="img" thumbnail fluid src="https://cdn.pixabay.com/photo/2021/04/26/08/54/beach-6208424_960_720.jpg" alt="Image 3"></b-img>
            </b-col>
            <b-col>
            <b-img class="img" thumbnail fluid src="https://cdn.pixabay.com/photo/2020/04/18/16/42/rocky-coast-5059912_960_720.jpg" alt="Image 3"></b-img>
            </b-col>
        </b-row>
</b-container>
    </main>
    <footer class="footer">
      <h6>@Daarb Prueba Tecnica</h6>
    </footer>
  </body>
</template>

<script>
export default {

    data(){
        return{
            crear: {
                ImageProduct: "",
                NameProduct: "",
                PriceProduct: null,
                CatagoryProduct: "",
                Qualification: "",
            }
        }  
    },
    methods:{
        createdd(){
            let headers = {
            "x-access-token": localStorage.getItem("token"),
            }
            this.$http.post('http://localhost:3000/api/products', this.crear, {headers})
            .then((res)=>(this.crear = res.body));
        },
        onclick() {
            localStorage.clear("token");
            this.$router.push("/");
    },
    }
}
</script>

<style>
    .tamano{
        height: 250px;
    }
    .img{
        height: 150px;
    }
</style>
