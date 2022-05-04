<template>
    <div class ="calendar">
      <div class="row">
        <div class="col-sm">
            <select @change="getEventsByClasse($event)" id="object">
              <option value="NOPE" selected>Choisissez une classe</option>
              <option v-for="item in items[0]" :key="item.Classe" v-bind:value="item.Classe">{{item.Classe}}</option>
            </select>
        </div>
        <div class="col-sm">
            <BoutonProfesseur></BoutonProfesseur>
        </div>

        </div>
            <p class="alertMessage">{{alertMessage}}</p>

            <FullCalendar :options="calendarOptions" class="test"/>
    </div>
</template>



<script>
const url = require("../../url/url.js");
import '@fullcalendar/core/vdom' // solves problem with Vite
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import listPlugin from '@fullcalendar/list'
import timeGridPlugin from '@fullcalendar/timegrid'
import axios from 'axios'
import BoutonProfesseur from './BoutonProfesseur.vue'

export default{
    name : "CalendrierPage",

    components: {
      FullCalendar,
      BoutonProfesseur
    },

    data(){
      return{
        
      items : [],
      alertMessage : '',

      calendarOptions: {
        plugins: [dayGridPlugin, interactionPlugin, listPlugin, timeGridPlugin],
        locale: 'fr',
        buttonText: {
          today:    'Aujourd\'hui',
          month:    'Mois',
          week:     'Semaine',
          day:      'Jour',
          list:     'Liste'
        },
        themeSystem: 'standard',
        initialView: 'dayGridMonth',
        headerToolbar: {
          left: 'today prev,next',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
        },
        dateClick: function(arg) {
          if(arg.view.type=="dayGridMonth"){
            this.changeView("timeGridDay",arg.dateStr);
          }
        },
        events: [
            //contient la liste des evenements reliés à une classe.
          //{ title: 'event 1', date: '2022-03-30' },
          //{ title: 'event 2', date: '2022-03-30' }
        ],

        eventColor: '#6dabe4',
        eventClick: function(info) {
            info.jsEvent.preventDefault(); // don't let the browser navigate

            if (info.event.url) {
            window.open(info.event.url);
            }
        }
      }

    }
  },

  created(){
    this.getClasses();
  },

  methods : {

    async getClasses(){

      let destinationUrl = url.concatUrl("/classes");
      await axios.get(destinationUrl)

        .then(response => {
          this.items = response.data;
        })
        .catch(error =>{
          console.log(error)
        });
    },

    checkSelect(param){
      if(param == "NOPE"){
        return false;

      }
      else{
        return true;
      }
    },


    getEventsByClasse(event){
      const classe = event.target.value;

      if(this.checkSelect(classe)){
        this.alertMessage = ""
        const destinationUrl = url.concatUrl(`/calendrier/${classe}`);

        axios.get(destinationUrl)

        .then(response =>{
          this.calendarOptions.events = response.data;
        })
        .catch(error =>{
          console.log(error);
        });
      }
      else{
        this.alertMessage = "VEUILLEZ CHOISIR UNE CLASSE VALIDE !"
        this.calendarOptions.events = [];
      }
    },


  }
}

</script>

<style scoped> 
#calendar {
  max-width: 900px;
  margin: 40px auto;
}

.initialView {
  color: #6dabe4;
}

.calendar {
  margin: 10% 10%;
  border: 3px solid #6dabe4;
  box-shadow: 0px 15px 16.83px 0.17px rgba(0, 0, 0, 0.05);
  -moz-box-shadow: 0px 15px 16.83px 0.17px rgba(0, 0, 0, 0.05);
  -webkit-box-shadow: 0px 15px 16.83px 0.17px rgba(0, 0, 0, 0.05);
  -o-box-shadow: 0px 15px 16.83px 0.17px rgba(0, 0, 0, 0.05);
  -ms-box-shadow: 0px 15px 16.83px 0.17px rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  -moz-border-radius: 20px;
  -webkit-border-radius: 20px;
  -o-border-radius: 20px;
  -ms-border-radius: 20px;
  padding: 25px;
  font-size: 14px;
  background-color: white;
  height: auto;
  min-width: 500px;
}

.alertMessage{
  color : red;
  margin-top: 5px;
  margin-left: 42%;
}

  </style>