<script>
import '@fullcalendar/core/vdom' // solves problem with Vite
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import listPlugin from '@fullcalendar/list'
import timeGridPlugin from '@fullcalendar/timegrid'

export default {
  components: {
    FullCalendar // make the <FullCalendar> tag available
  },
  data() {
    return {
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
            //Ajouter une ligne title et date.
          { title: 'event 1', date: '2022-03-30' },
          { title: 'event 2', date: '2022-03-30' }
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
}
</script>


<template>
<div class = "calendar">

        <FullCalendar :options="calendarOptions" />

</div>
</template>

<style>
#calendar {
  max-width: 900px;
  margin: 40px auto;
}
.initialView{
  font-color: #6dabe4;
}
.calendar{
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
}
</style>