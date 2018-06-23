let nxt = 0;

const folder = "images/";
const images = [];
$(document).ready(function() {
  $.ajax({
    url: folder,
    success: function(data) {
      $(data)
        .find("a")
        .attr("href", function(i, val) {
          if (val.match(/\.jpeg|\.png|\.gif|\.jpg/)) {
            images.push(val);
            console.log(images);
          }
        });
    }
  });
});
const show = document.getElementById("pic");

document.getElementById("next").addEventListener("click", nxtprev);
document.getElementById("prev").addEventListener("click", nxtprev);

function nxtprev(event) {
  const btn = event.target.id;

  if (btn == "next") {
    nxt++;
    nxt < images.length ? (nxt = nxt) : (nxt = 0);
  } else {
    nxt--;
    nxt < 0 ? (nxt = images.length - 1) : (nxt = nxt);
  }

  show.src = images[nxt];
}
