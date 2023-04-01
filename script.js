const svgs = document.querySelectorAll(".reveal");
const headerP = document.querySelectorAll(".text-header p");
svgs.forEach(function(svg) {
    // add a click event listener to each SVG element
    svg.addEventListener("click", function(a) {
      // get the next sibling element with class "hidden-text"
      const hiddenText = this.parentNode.nextElementSibling;
      const parentNode = this.parentNode.parentNode;

      let pHeader = parentNode.querySelector("p");
      let bElement = document.createElement("b");
      bElement.innerHTML = pHeader.innerHTML;
      pHeader.replaceWith(bElement);
      console.log(bElement.innerHTML);

      hiddenText.style.display = 'block';
      // toggle the "hidden" class to show/hide the hidden text
      hiddenText.classList.toggle("hidden");
      // toggle the "active" class to highlight the SVG as active/inactive
      this.classList.toggle("active");
    });
  });