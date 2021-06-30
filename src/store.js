import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const URL_USUARIOS = 'https://60b54a9dfe923b0017c83dfb.mockapi.io/api/users/user'

Vue.use(Vuex);


export default new Vuex.Store({
    state: {
        usuarios : []
    },
    actions : {
        async sendUsuario(usuario){
            try {
                await axios.post(URL_USUARIOS, usuario);
                this.dispatch('getUsuarios');   
            }
            catch(err) {
                console.log('Error setting new user: ', err)
            }
        },
        async getUsuarios({commit}) {
            try {
                let usuarios = await axios(URL_USUARIOS)
                commit('getUsuarios', usuarios.data)
            }
            catch(err) {
                console.log('Error in axios D:', err);
                commit('getUsuarios',[])
            }
        },
        async deleteUser({commit}, userIdx){
            try {
                console.log(userIdx);
                await axios.delete(URL_USUARIOS+ '/' + this.state.usuarios[userIdx].id);
                this.dispatch('getUsuarios');
                commit("doNothing", userIdx);
            } catch(err) {
                console.log('Error deleting D:', err);
            }
  

        },
    },
    mutations : {
        getUsuarios(state,users) {
            state.usuarios = users
        },
        doNothing(){
            console.log('Do nothing...')
        },
    }
})
