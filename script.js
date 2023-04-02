const svgs = document.querySelectorAll(".reveal");
const headerP = document.querySelectorAll(".text-header p");
svgs.forEach(function(svg) {
    // add a click event listener to each SVG element
    svg.addEventListener("click", function() {
      const hiddenText = this.parentNode.parentNode.querySelector(".hidden-text");
      let textHeader = this.parentNode.querySelector("p");

      if (hiddenText.style.display === "none") {
        hiddenText.style.display = "block";
        textHeader.style.fontWeight = "bold";
      } else {
        hiddenText.style.display = "none";
        textHeader.style.fontWeight = "normal";
      }
    });
    
  });