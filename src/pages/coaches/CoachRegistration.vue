<template>
  <section>
    <base-card>
      <h2>Register as a coach</h2>
      <coach-form @save-data="saveData"></coach-form>
    </base-card>
  </section>
</template>

<script>
import CoachForm from "@/components/coaches/CoachForm.vue";
export default {
  components: { CoachForm },
  computed: {},
  methods: {
    saveData(data) {
      this.$store.dispatch("coachesKey/registerCoach", data);
      this.$router.replace("/coaches");
    },
  },
};
</script>

<style scoped></style>
