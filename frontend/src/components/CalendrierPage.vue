<script>
import '@fullcalendar/core/vdom' // solves problem with Vite
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'

export default {
  components: {
    FullCalendar // make the <FullCalendar> tag available
  },
  data() {
    return {
      calendarOptions: {
        plugins: [ dayGridPlugin, interactionPlugin ],
        initialView: 'dayGridMonth',
        dateClick: this.handleDateClick,
        events: [
            //Ajouter une ligne title et date.
          { title: 'event 1', date: '2022-03-30' },
          { title: 'event 2', date: '2022-03-30' }
        ],
        eventClick: function(info) {
            info.jsEvent.preventDefault(); // don't let the browser navigate

            if (info.event.url) {
            window.open(info.event.url);
            }
        }
      }
    }
  },
  methods: {
    handleDateClick: function(arg) {
      alert('date click! ' + arg.dateStr)
    }
  }
}
</script>
<template>
<div class = "calendar">

        <FullCalendar :options="calendarOptions" />

</div>
</template>

<style>
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
    }
</style>