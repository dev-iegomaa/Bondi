window.addEventListener("load", function () {
  const navigation = this.document.querySelector("nav");
  this.document.getElementById(
    "landing"
  ).style.cssText = `height: calc(80vh - ${
    navigation.getBoundingClientRect().height
  }px)`;
});
