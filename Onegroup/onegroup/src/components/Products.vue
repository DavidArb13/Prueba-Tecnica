<template>
  <div>
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
              <br>
              <b-button variant="danger" v-on:click="onclick"
                >Cerrar Sesion</b-button
              >
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </header>
      <main class="container mt-5 mb-5">
        <div class="row">
          <div class="col-1">
            <b-button class="mb-5 ml-5" v-b-toggle.sidebar-footer>Buscar</b-button>
          <b-sidebar
            id="sidebar-footer"
            aria-label="Sidebar with custom footer"
            no-header
            right
            shadow
          >
          <h5 class="text-center mt-5">Buscar Productos por ID</h5>
          <div class="container">
            <b-form  @submit.stop.prevent="buscarp">
              <br>
              <b-form-input v-model="productId" :state="validation" id="feedback-user" placeholder="ID Producto"></b-form-input>
              <b-form-invalid-feedback :state="validation">
                Your user ID must be 23-25 characters long.
              </b-form-invalid-feedback>
              <b-form-valid-feedback :state="validation">
                Looks Good.
              </b-form-valid-feedback>
              <b-button type="submit" class="ml-2 mt-2" variant="dark">Buscar</b-button>
            </b-form>
            <br>
            <!-- <label class="mt-5">{{producto.ImageProduct}}</label> -->
            <br>
            <div class="negrilla">
              <label class="mt-1 ml-4">- Nombre: {{producto.NameProduct}}</label>
              <br>
              <label class="mt-1 ml-4">- Precio: ${{producto.PriceProduct}}</label>
              <br>
              <label class="mt-1 ml-4">- Categoria: {{producto.CatagoryProduct}}</label>
              <br>
              <label class="mt-1 ml-4">- Calificacion: {{producto.Qualification}} de 5</label>
            </div>
          </div>
            <template #footer="{ hide }">
              <div
                class="d-flex bg-dark text-light align-items-center px-3 py-2"
              >
                <strong class="mr-auto">OneGroup</strong>
                <b-button size="sm" @click="hide">Cancelar</b-button>
              </div>
            </template>
            <div class="px-3 py-2">
            </div>
          </b-sidebar>
          </div>
          <div class="col-6">
            <b-button class="mb-5 ml-5" href="/Crearproducto">Crear</b-button>
            
          </div>
        </div>

        <div class="overflow-auto containerr">
          <ul id="my-table" v-for="key in items" v-bind:key="key._id">
            <div class="">
              <b-card
                v-bind:title="key.NameProduct"
                img-src="https://cdn.pixabay.com/photo/2013/07/25/13/01/stones-167089_960_720.jpg"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="text-center shadoww"
              >
                <b-card-text >
                  <ul class="mr-5">
                    <p>Precio: $ {{ key.PriceProduct }}</p>
                    <p>Categoria: {{ key.CatagoryProduct }}</p>
                    <b-form-rating
                      id="rating-inline"
                      disabled
                      v-bind:value="key.Qualification"
                    ></b-form-rating>
                  </ul>
                </b-card-text>
                <div class="row">
                  <b-button
                    class="col-5 ml-5"
                    id="show-btn"
                    variant="dark"
                    v-on:click.prevent="openModal(key)"
                    >Actualizar</b-button
                  >
                  <b-button
                    class="col-2 ml-4"
                    v-on:click="deletee(key._id)"
                    href="#"
                    variant="danger"
                    >X</b-button
                  >
                </div>
              </b-card>
            </div>
          </ul>
        </div>
        
        <b-modal id="bv-modal-example" hide-footer>
          <template #modal-title>
            Actualizar Producto
          </template>
          <div class="d-block ">
            <div>
              <b-form v-on:submit="updatee()">
                <b-form-group id="fieldset-1" label-for="input-1">
                  <br />
                  <div class="row">
                    <div class="col-6 text-center">
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
                    <div class="col-6">
                      <b-form-input
                        class="col-9"
                        id="input-1"
                        v-model="actualizacion.ImageProduct"
                        trim
                      ></b-form-input>
                      <b-form-input
                        class="col-9 mt-3"
                        id="input-2"
                        v-model="actualizacion.NameProduct"
                        trim
                      ></b-form-input>
                      <b-form-input
                        class="col-9 my-3"
                        id="input-3"
                        v-model="actualizacion.PriceProduct"
                        trim
                      ></b-form-input>
                      <b-form-input
                        class="col-9 mt-3"
                        id="input-4"
                        v-model="actualizacion.CatagoryProduct"
                        trim
                      ></b-form-input>
                      <b-form-rating
                        class="mt-3"
                        id="rating-inline"
                        v-model="actualizacion.Qualification"
                        inline
                        value=""
                      ></b-form-rating>
                    </div>
                  </div>
                  <br />
                  <div class="text-center row">
                    <b-button
                      class="ml-5 mt-3 col-4"
                      type="submit"
                      variant="success"
                      >Actualizar</b-button
                    >
                    <b-button
                      class="mt-3 ml-5 col-4"
                      @click="$bvModal.hide('bv-modal-example')"
                      >Cancelar</b-button
                    >
                  </div>
                </b-form-group>
              </b-form>
            </div>
          </div>
        </b-modal>
      </main>
      <footer class="footer">
        <h6>@Daarb Prueba Tecnica</h6>
      </footer>
    </body>
  </div>
</template>

<script>
export default {
  name: "products",
  data() {
    return {
      productId: "",
      producto:[],
      msg: "",
      items: [],
      actualizacion: {
        _id: "",
        ImageProduct: "",
        NameProduct: "",
        PriceProduct: null,
        CatagoryProduct: "",
        Qualification: "",
      },
    };
  },
  methods: {
    makeToast(variant = null, error= null) {

        this.$bvToast.toast(`Producto ${this.productId} no fue encontrado`, {
          title: error,
          variant: variant,
          solid: true
        })
    },
    buscarp(){
      let headers = {
      "x-access-token": localStorage.getItem("token"),
      };
    this.$http
      .get(`http://localhost:3000/api/products/${this.productId}`, { headers })
      .then((res) => {
        if(res.body == "Producto no encontrado"){
          this.makeToast('danger','Error')
        }
        else {
          this.producto = res.body
          }
        })
    },
    openModal(key,) {
      this.actualizacion = key;
      this.$bvModal.show("bv-modal-example");
    },
    onclick() {
      localStorage.clear("token");
      this.$router.push("/");
    },
    deletee(_id) {
      let headers = {
        "x-access-token": localStorage.getItem("token"),
      };
      this.$http
        .delete(`http://localhost:3000/api/products/${_id}`, { headers })
        .then((res) => (this.msg = res.body));
    },
    updatee() {
      let headers = {
        "x-access-token": localStorage.getItem("token"),
      };
      this.$http
        .put(
          `http://localhost:3000/api/products/${this.actualizacion._id}`,
          this.actualizacion,
          { headers }
        )
        .then((res) => (this.msg = res.body));
      this.$bvModal.hide("bv-modal-example");
    },
  },
  computed: {
      validation() {
        return this.productId.length > 23 && this.productId.length < 25
      }
  },
  created() {
    let headers = {
      "x-access-token": localStorage.getItem("token"),
    };
    this.$http
      .get("http://localhost:3000/api/products", { headers })
      .then((res) => (this.items = res.body));
  },
};
</script>

<style>
.containerr {
  display: flex;
  flex-wrap: wrap;
}
.items {
  margin-left: 0px;
}
.tamanoletra {
  font-size: 11px;
}
.shadoww{
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
}
.negrilla{
  font-weight: bold;
}
</style>
