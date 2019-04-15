<template>
  <v-container grid-list-lg>
    <v-layout row wrap justify-center>
      <v-flex
        v-for="(record, index) in records"
        :key="index"
        :class="['xs12', index > 0 ? 'sm6' : '']"
      >
        <PersonalRecordsItem :record="record" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import PersonalRecordsItem from './PersonalRecordsItem.vue';

export default {
  components: {
    PersonalRecordsItem
  },
  data() {
    return {
      records: [
        {
          competitionType: 'Halbmarathon',
          competitionDistance: '21,1km Laufen',
          competitionDescription: 'Linz Marathon 2019',
          time: {
            hours: 1,
            minutes: 42,
            seconds: 50
          }
        },
        {
          competitionType: 'Triathlon Sprintdistanz',
          competitionDistance: '0,75km Schwimmen, 25km Radfahren, 5km Laufen',
          competitionDescription: 'Linz Triathlon 2018',
          time: {
            hours: 1,
            minutes: 31,
            seconds: 31
          }
        },
        {
          competitionType: 'Viertelmarathon',
          competitionDistance: '10,1km Laufen',
          competitionDescription: 'Linz Marathon 2007',
          time: {
            hours: 0,
            minutes: 46,
            seconds: 59
          }
        }
      ]
    };
  }
};
</script>

<style scoped></style>
