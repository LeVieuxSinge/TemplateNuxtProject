<template>
  <div v-if="loading" class="loading">
      <div>
        <div class="title">Bienvenue</div>
        <div class="subtitle">Historique et ARRC du Cégep de Saint-Hyacinthe</div>
      </div>
    <div class="progress">0</div>
    <div class="thanks">
      Merci à [Liste de personne et role] pour leur contribition au dévéloppement et à la recherche de l'historique du Cégep.
    </div>
  </div>
</template>

<!-- Settings -->
<script>
export default {
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      let counter = 0;
      let end_request = false;
      let counter_interval = setInterval(() => {
        if (end_request == false && counter < 99 && Math.random() >= 0.85) {
            counter++;
            $('.progress').html(counter);
        } 
        if (end_request == true && Math.random() >= 0.3) {
          counter++;
          $('.progress').html(counter);
          if (counter == 100) {
            clearInterval(counter_interval);
            $('.loading').animate({
              opacity: 0,
            }, 1000, () => {
              this.$nuxt.$loading.finish();
            })
          }
        }
      }, 20);
      if (process.browser) {
        window.onNuxtReady((app) => {
          end_request = true;
        })
      }
    })
  },
  data: () => ({
    loading: false
  }),
  methods: {
    start() {
      this.loading = true
    },
    finish() {
      this.loading = false
    }
  }
}
</script>

<!-- Media Queries -->
<style lang="scss" scoped>
@import '~/assets/sass/controls.scss';

// Small
@include respond-to(S) {}

// Medium
@include respond-to(M) {}

// Large
@include respond-to(L) {}

// xLarge
@include respond-to(xL) {

  .loading {
    z-index: 999;
    position: fixed;
    width: 100vw;
    height: 100vh;
    background: $color1;
    font-family: $font-family-inria;
    padding: 50px 30%;
    text-align: center;
    display: flex;
    flex-flow: column;
    justify-content: space-around;
    align-items: center;
  }

  .title {
    font-size: 2em;
  }

  .subtitle {
    font-size: 1.5em;
    margin-top: 10px;
  }

  .progress {
    font-size: 1.5em;
  }

  .thanks {
    font-size: 1em;
    opacity: 0.8;
  }

}

// Hover Option
@include respond-to(H) {}

</style>