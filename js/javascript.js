function toolbarResponsive() {
    var x = document.getElementById("toolbar");
    if (x.className === "toolbar") {
      x.className += " responsive";
    } else {
      x.className = "toolbar";
    }
  }