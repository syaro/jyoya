var dash_button = require('node-dash-button');
var dash = dash_button("yourmacaddress", null, null, 'all');
var player = require('play-sound')(opts = {})
dash.on("detected", function (){
  console.log("除夜の鐘がなりました");
  player.play('jyoya.mp3', { timeout: 4000 }, function(err){
    if (err) throw err
  })
});
