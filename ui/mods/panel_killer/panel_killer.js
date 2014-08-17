(function() {
  var blacklist = [
    "building_planets",
    //"popup", // sure you want to exit etc
    "bottom_right_pip_border",
    //"pip_br_tl", // options
    "pip_br_tr", // close button
    "version",
    //"econ",
    "header",
    //"players",
    //"devmode", // already kind of shut off
    //"sandbox", // ditto
    //"planets",
    //"message", // spawn commander, annihliate planet, etc
    //"menu", //exit, settings
    //"chat",
    //"celestial_control",
    "unit_alert",
    "preview_pip_border",
    "gamestats",
    //"action_bar",
    "footer",
    "build_hover",
    //"build_bar",
    //"options_bar", // pip, cronocam, uberbar, etc
    //"time_bar",
    //"selection",
    //"world_popup_panel", // hover
    //"game_paused_panel",
    //"game_over_panel",
    //"settings",
  ]
  $('panel').each(function(i, panel) {
    //console.log(i, panel.id)
    if (blacklist.indexOf(panel.id) != -1) {
      console.log('remove', panel.id)
      $(panel).remove()
    }
  })
})()
