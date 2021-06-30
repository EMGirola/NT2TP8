<template>

<section class="src-components-form-user-form">
  <div class="jumbotron">

    <h1>Formulario de inserción</h1>
    <br/>

    <vue-form :state="formState" @submit.prevent="submitForm()">

      <validate tag="div">
        <label for="name">Nombre</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          class="form-control"
          autocomplete="off"
          v-model.trim="formData.name"
          required
          :minlength="nameLengthMin"
          :maxlength="nameLengthMax"
        >
        <field-messages name="name" show="$dirty">
          <div slot="required" class="alert alert-danger">Campo requerido</div>            
        
          <div slot="minlength" class="alert alert-danger">
            Minimos caracteres no alcanzados, cantidad: {{ nameLengthMin }} caracteres
          </div>            
          <div v-if="formData.name.length == nameLengthMax" class="alert alert-warning">
            Maximos caracteres alcanzados, cantidad: {{ nameLengthMax }} caracteres
          </div>            
        </field-messages>

      </validate>
      <br>

      <validate tag="div">
        <label for="age">Edad</label>
        <input 
          type="number" 
          id="age" 
          name="age" 
          class="form-control"
          autocomplete="off"
          v-model.number="formData.age"
          required
          :min="ageMin"
          :max="ageMax"
        >

        <field-messages name="age" show="$dirty">
          <div slot="required" class="alert alert-danger">Campo requerido</div>            
          <div slot="min" class="alert alert-danger">Minima edad: {{ageMin}} años</div>            
          <div slot="max" class="alert alert-danger">Maxima edad: {{ageMax}} años</div>            
        </field-messages>

      </validate>
      <br>

      <validate tag="div">
        <label for="email">Email</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          class="form-control"
          autocomplete="off"
          v-model.trim="formData.email"
          required
        >

        <field-messages name="email" show="$dirty">
          <div slot="required" class="alert alert-danger">Campo requerido</div>            
          <div slot="email" class="alert alert-danger">Email no válido</div>            
        </field-messages>

      </validate>
      <br>

      <button class="btn btn-success my-3" :disabled="formState.$invalid" type="submit">Insertar</button>

    </vue-form>


  </div>
</section>

</template>

<script lang="js">


  export default  {
    name: 'src-components-form-user-form',
  components: {
  },
  props: [],
  data () {
    return {
      submittedUsers : [],
      urlToFetch: 'https://60b54a9dfe923b0017c83dfb.mockapi.io/api/users/user',
      formData : this.getInicialData(),
      formState : {},
      nameLengthMin : 3,
      nameLengthMax : 15,
      ageMin : 18,
      ageMax : 120
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    getInicialData() {
      return {
        name: '',
        age: '',
        email: ''
      }
    },

    submitForm() {
      let newUser = {
        name: this.formData.name,
        age: this.formData.age,
        email: this.formData.email
      };

      this.$store.dispatch("sendUsuario", newUser);

      this.formData = this.getInicialData()
      this.formState._reset()
    }

  }
}


</script>

<style scoped lang="css">



</style>
