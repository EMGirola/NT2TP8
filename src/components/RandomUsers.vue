<template>

  <section class="src-components-random-users">

    <div class="jumbotron">
      <TableUsers v-bind:usersToShow="obtenerUsuarios" v-bind:options="{hasAge: true, hasPhone: false}" v-on:deleted="refreshPage()" />
    </div>

  </section>

</template>

<script lang="js">

  import TableUsers from './TableUsers';


  export default  {
    name: 'src-components-random-users',
    components: {
      TableUsers
    },
    props: [],
    async mounted () {

      this.$store.dispatch("getUsuarios");

    },
    data () {
      return {
      }
    },
    methods: {
      refreshPage(){
        this.$store.dispatch("getUsuarios");

      }
    },
    computed: {
      obtenerUsuarios(){
        return this.$store.state.usuarios;
      }
    }
}


</script>

<style scoped lang="css">

</style>
