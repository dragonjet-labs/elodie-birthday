<template>
  <div class="project">
    <div class="project-description">
      <h2>Artworks for Elodie</h2>
    </div>
    <div class="project-close">
      <v-btn
        @click="$root.$emit('closeProject')"
        block large elevation="1" color="purple lighten-4">
        Close
      </v-btn>
    </div>
    <div class="project-content">
      <div v-masonry="'bdayarts'" transition-duration="0.3s" item-selector=".card" stagger="0s">
        <div v-masonry-tile class="card" >
          <img src="@/game/assets/art/frank.jpg" />
          <div class="card-name">Frank</div>
        </div>
        <div v-masonry-tile class="card" >
          <img src="@/game/assets/art/hel.png" />
          <div class="card-name">Hel</div>
        </div>
        <div v-masonry-tile class="card" >
          <img src="@/game/assets/art/telo.png" />
          <div class="card-name">Telo</div>
        </div>
        <div v-masonry-tile class="card" >
          <img src="@/game/assets/art/nobu.png" />
          <div class="card-name">Nobu</div>
        </div>
        <div v-masonry-tile class="card" >
          <img src="@/game/assets/art/orange.jpg" />
          <div class="card-name">Orange</div>
        </div>
        <div v-masonry-tile class="card" >
          <img src="@/game/assets/art/keektang.png" />
          <div class="card-name">Keektang</div>
        </div>
        <div v-masonry-tile class="card" >
          <img src="@/game/assets/art/minnijay.png" />
          <div class="card-name">MinniJay</div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  mounted() {
    setTimeout(() => { this.$redrawVueMasonry('bdayarts'); }, 1000);
    setTimeout(() => { this.$redrawVueMasonry('bdayarts'); }, 3000);
    setTimeout(() => { this.$redrawVueMasonry('bdayarts'); }, 5000);
  },
};
</script>

<style lang="scss" scoped>
.project {
  height:86vh;
  position:relative;
  .project-description {
    position:absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 80px;
    overflow:hidden;
    h3 {
      padding:0;
      margin:0;
    }
    p {
      padding:0;
      margin:0;
    }
  }
  .project-content {
    position:absolute;
    top: 60px;
    left: 0;
    right: 0;
    bottom: 0;
    background:#c1c5dd;
    overflow-y:scroll;
  }
  .project-close {
    position:absolute;
    top: 0;
    right: 0;
    width: 100px;
    height: 50px;
  }
}

.card {
  background:#FFFFFF;
  position:relative;
  padding:20px;
  padding-bottom:30px;
  min-height:100px;
  width:24%;
  margin:10px 0.5%;
  border:2px solid #858ED1;
  border-left:7px solid #858ED1;
  text-align:center;
  img {
    width:100%;
    // max-height:250px;
  }
  .card-name {
    text-align:center;
    font-size:20px;
    height:30px;
    line-height:30px;
    position:absolute;
    font-weight:bold;
    bottom:0;
    left:0;
    right:0;
    background:#b6bce7;
  }
}

@media only screen and (max-width: 1800px) {
  .card {
    width:32%;
    margin:10px 0.5%;
  }
}
@media only screen and (max-width: 1264px) {
  .card {
    width:48%;
    margin:10px 1%;
  }
}
@media only screen and (max-width: 700px) {
  .card {
    width:96%;
    margin:10px 2%;
  }
}
</style>

<style lang="scss">
.card-text {
  img {
    height:1.4rem;
  }
}
</style>
