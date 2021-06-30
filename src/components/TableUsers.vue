<template>

  <section class="src-components-table-users">
    <div class="jumbotron" v-if="usersToShow.length">
      <table class="table">
        <thead>
          <th>Nombre</th>
          <th v-if="this.hasAge">Edad</th>
          <th v-if="this.hasPhone">Telefono</th>
          <th>Mail</th>
          <th>Acciones</th>
        </thead>
        <tbody>
          <tr v-for="(user, index) in usersToShow" :key="index">
            <td>{{user.name}}</td>
            <td v-if="hasAge">{{user.age}}</td>
            <td v-if="hasPhone">{{user.phone}}</td>
            <td>{{user.email}}</td>
            <td><button @click="deleteUser(index)">Eliminar</button></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="jumbotr" v-else>No hay usuarios disponibles</div>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-components-table-users',
    props: ['usersToShow', 'options'],
    mounted () {

    },
    data () {
      return {
        hasAge: this.options.hasAge,
        urlToFetch: 'https://60b54a9dfe923b0017c83dfb.mockapi.io/api/users/user',
        hasPhone: this.options.hasPhone
      }
    },
    methods: {
      deleteUser(index) {
        this.$store.dispatch("deleteUser", index);
      }
    },
    computed: {

    }
}


</script>


