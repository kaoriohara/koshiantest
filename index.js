// forked from ma6ato's "タクトスイッチを押してみる" http://jsdo.it/ma6ato/pppS
// forked from monakaz's "LEDをコントロールしちゃおう☆" http://jsdo.it/monakaz/w1gz
$(function(){

  $("#btn-find").on("tap", function() {
    if($("#btn-find").hasClass("find")) {
      k.find();
    } else {
      k.disconnect();

      // change find button
      $("#btn-find")
        .addClass("find")
        .html("Find konashi");

      $("#s1-status").html("OFF");
    }
  });

  // konashiと接続できた
  k.ready(function() {
    // change find button
    $("#btn-find")
      .removeClass("find")
      .html("Disconnect konashi");

    k.pinMode(k.S1, k.INPUT);
  });

  // 入力が変化した時
  k.updatePioInput( function(data) {    
    k.digitalRead(k.AIO1, function(value) {
      //k.log(value);
      if(value == k.HIGH) {
         $("#s1-status").html("ON");
      } else {
         $("#s1-status").html("OFF");
      }
    });
  });

  //k.showDebugLog();
});
