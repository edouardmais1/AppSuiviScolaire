import 'es6-promise/auto';
import {createStore} from 'vuex';


const axios = require('axios');

const instance = axios.create({
    baseURL: 'http://localhost:3000/'
  });

let user = localStorage.getItem('user');

if(!user){
    user = {
        userId: -1,
        token: '',
    };
}
else{
    try{
        user = JSON.parse(user);
        instance.defaults.headers.common['Authorization'] = user.Token;
    }
    catch{
        user = {
            userId: -1,
            token: '',
        };
    }
}

const store = createStore({
    state: {
        status: '',
        user: user,

        //modif ceci
        userInfos: [],
    },

    mutations: {
        setStatus: function(state, status){
            state.status = status;
        },
        logUser: function(state, user){
            instance.defaults.headers.common['Authorization'] = user.Token;
            localStorage.setItem('user', JSON.stringify(user));
            state.user = user;
        },
        userInfos: function (state, userInfos) {
            state.userInfos = userInfos;
          },

        logout: function(state){
            state.user = {
                userId: -1,
                token: '',
            }
            localStorage.removeItem('user');
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
                })
                .catch(error =>{
                    commit('setStatus', 'error_create')
                    reject(error);
                });

            });
        },
        login: ({commit}, userInfos) => {

            commit('setStatus', 'loading');
            const url = `http://localhost:3000/connexion/${userInfos}`

            return new Promise((resolve, reject) =>{
                instance.get(url)
                .then(response =>{
                    commit('setStatus', '');
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
            const url = `http://localhost:3000/infos/${userInfos}`;

            return new Promise((resolve, reject) =>{
                instance.get(url)
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