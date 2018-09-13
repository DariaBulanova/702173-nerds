<script>
  var link = document.querySelector(".write");
  var popup = document.querySelector(".modal-form");
  var close = document.querySelector(".modal-close")
  link.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    var close = popup.querySelector(".modal-close");
    close.addEventListener("click", function(evt) {
      evt.preventDefault();
      popup.classList.remove("modal-show");

      window.addEventListener("keydown", function(evt) {
        if (evt.keyCode === 27) {
          evt.preventDefault();
          if (popup.classList.contains("modal-show")) {
            popup.classList.remove("modal-show");
          }
        }
      });
    });
  });
</script>
