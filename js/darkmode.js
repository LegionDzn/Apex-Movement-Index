var DarkModeDesired = false;

function setdark() {
  if (DarkModeDesired == true) {
    console.log("turning on dark mode");
    document.getElementById("masterlightswitch").classList.add('dark');
    $('#Iframe').contents().find('#bodytoggle').addClass('dark');
  } else {
    console.log("turning off dark mode");
    document.getElementById("masterlightswitch").classList.remove('dark');
    $('#Iframe').contents().find('#bodytoggle').removeClass('dark');
  }
}

function ToggleDark() {
  DarkModeDesired = !DarkModeDesired;
  setdark(DarkModeDesired)
}
