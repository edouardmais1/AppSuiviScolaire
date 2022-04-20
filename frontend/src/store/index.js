import 'es6-promise/auto';
import {createStore} from 'vuex';

const axios = require('axios');

const instance = axios.create({
    baseURL: 'http://localhost:3000/'
  });

const store = createStore({
    state: {

    },
    actions: {
        createAccount: ({commit}, userInfos) => {

            return new Promise((resolve, reject) =>{
                commit;
                instance.post("/inscription",userInfos)
                .then(response =>{
                    resolve(response);
                })
                .catch(error =>{
                    reject(error);
                });

            });
        },
        /*
        login: ({commit}, userInfos) => {

            return new Promise((resolve, reject) =>{
                commit;
                instance.post("/inscription",userInfos)
                .then(response =>{
                    resolve(response);
                })
                .catch(error =>{
                    reject(error);
                });

            });
        }*/
    }
});


export default store;