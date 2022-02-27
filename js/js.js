$(document).ready(function(){

  function popup () {
    const openPopupTriggers = $("body").find(`[data-target="login-popup"]`);
    const closePopupTriggers = $("body").find(`[data-target="close-popup"]`);
    const popup = $(".login-popup");
    const url = "#login";
    const submitButton = $(".login-popup .button[type='submit']");
    let popupOpen = false;

    openPopupTriggers.each(function() {
      let trigger = $(this);

      trigger.click(function(e){
        e.preventDefault()
        showPopup();
      })
    });

    closePopupTriggers.each(function() {
      let trigger = $(this);

      trigger.click(function(e){
        e.preventDefault()
        window.history.back();
        window.history.pushState({}, null, window.location.pathname );
        hidePopup();
      })
    });

    function showPopup() {
      if (popupOpen) {
        window.history.back();
      }

      popupOpen = true;
      window.history.pushState("forward", null, url);
      $(popup).addClass("open");

    }

    function hidePopup() {
      popupOpen = false;
      $(popup).removeClass("open")
    }

    $(window).on("popstate", function() {
      hidePopup();
    });

    $(submitButton).click(function(e){
      e.preventDefault()
    })

  }

  popup()
})
