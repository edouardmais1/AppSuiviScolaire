import 'es6-promise/auto';
import {createStore} from 'vuex';

//importer le fichier pour l'url dynamique
const url = require('../../url/url');


const axios = require('axios');

const instance = axios.create({
    baseURL: 'http://localhost:3000/'
  });


const store = createStore({
    state: {
        status: '',
        user: '',

        //contient le Mail, role, prenom,
        userInfos: [],
    },

    mutations: {
        setStatus: function(state, status){
            state.status = status;
        },
        logUser: function(state, user){
            instance.defaults.headers.common['Authorization'] = user.Token;
            state.user = user;
        },
        userInfos: function (state, userInfos) {
            state.userInfos = userInfos;
          },

        logout: function(state){
            state.user = {};
            state.status = '';
        }
    },

    actions: {
        createAccount: ({commit}, userInfos) => {
            
            commit('setStatus', 'loading');
            return new Promise((resolve, reject) =>{
                commit;
                instance.post("/inscription",userInfos)
                .then(response =>{
                    commit('setStatus', 'created')
                    resolve(response);
                    console.log(response);
                })
                .catch(error =>{
                    commit('setStatus', 'error_create')
                    reject(error);
                });

            });
        },
        login: ({commit}, userInfos) => {

            let destinationUrl = url.concatUrl(`/connexion/${userInfos}`);

            commit('setStatus', 'loading');

            return new Promise((resolve, reject) =>{
                instance.get(destinationUrl)
                .then(response =>{
                    commit('setStatus', 'logged');
                    commit('logUser', response.data);
                    resolve(response);
                })
                .catch(error =>{
                    commit('setStatus', 'error_login')
                    reject(error);
                });

            });
        },
        
        getUserInfos: ({commit},userInfos) =>{

            let destinationUrl = url.concatUrl(`/infos/${userInfos}`)

            return new Promise((resolve, reject) =>{
                instance.get(destinationUrl)
                .then(response =>{
                    commit('userInfos', response.data)
                    resolve(response);

                })
                .catch(error =>{
                    commit('setStatus', 'error_create')
                    reject(error);
                });

            });
        }
        
    }
});


export default store;