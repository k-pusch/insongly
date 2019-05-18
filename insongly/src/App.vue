<template>
  <div id="app">
    <h1> BE EXCELLENT TO EACHOTHER </h1>
    <b style="display:block"> lets hack insongly! </b>
    <h6> made with 🤝 by paulina kevin and kristina </h6>

    <div>
      <canvas id="paper"></canvas>
    </div>

  </div>
</template>

<script>
import axios from 'axios'
import * as paper from 'paper'
import * as SpotifyWebApi from 'spotify-web-api-js';

export default {
  name: 'app',

  data: () => {
    return {
      paper: null,
      spotify: null,
      kevinsId: '1142850619',
      clientId: 'ab9932d6575b4af28b33bf66c439a60e',
      accessToken: 'BQDf2BGl1VDlFyykoMvCNsaprTe7BTzb9vfmRTa1JFXTA43vk5YKhtq5J-vq3IXnkhxjXZt-tMnk84skPJcxyhWszgsOQ0J9OdWjL2GDCh96W3zw8bckxDgPv_QpfI2jqqsSxvMOaqH24T2wD6sgKelVWgUYrfz2gBbb2co5LwRcexQYYCGyNiZT7dKnF6BCQZaPdrqyt3xE',
    }
  },

  methods: {},

  components: {},

  mounted() {
    // setup spotify
    this.spotify = new SpotifyWebApi();

    // setup paper
    this.paper = paper.setup(document.getElementById('paper'));
    var path = new this.paper.Path();
    path.strokeColor = 'red';
    path.moveTo(new this.paper.Point(Math.random()*200, Math.random()*200));
    path.lineTo(new this.paper.Point(Math.random()*200, Math.random()*200));
    this.paper.view.draw();

    axios.get(`https://accounts.spotify.com/de/authorize/?client_id=${this.clientId}&response_type=code&redirect_uri=https:%2F%2Fdubolt.com%2Fcallback&scope=streaming%20user-top-read%20user-read-private%20playlist-modify-public%20playlist-modify-private%20user-read-playback-state%20user-modify-playback-state%20user-read-birthdate%20user-read-email`).then((resp) => {
      console.log(resp);
    });


    this.spotify.setAccessToken(this.accessToken);
    this.spotify.getMyTopTracks('puschmaster')
      .then(function(data) {
        console.log('User playlists', data);
      }, function(err) {
        console.error(err);
      });


  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
