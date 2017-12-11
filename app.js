// Vue instance
new Vue({
    el: "#app",
    data: {
      title: 'Social Widget',
      twitterShow: false,
      souncloudShow: false,
      codepenShow: false
    },
    methods: {
      twitterOnOff() {
        this.twitterShow = !this.twitterShow;
      },
      soundcloudOnOff() {
        this.souncloudShow = !this.souncloudShow;
      },
      codepenOnOff() {
        this.codepenShow = !this.codepenShow;
      }
    }
  })

  // Twitter Embeding script
  ! function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0],
      p = /^http:/.test(d.location) ? 'http' : 'https';
    if (!d.getElementById(id)) {
      js = d.createElement(s);
      js.id = id;
      js.src = p + "://platform.twitter.com/widgets.js";
      fjs.parentNode.insertBefore(js, fjs);
    }
  }(document, "script", "twitter-wjs");



