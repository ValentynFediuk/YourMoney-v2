// $(function () {
//   const slider = document.getElementById("slider");
//   const SelectValue = document.getElementById("SelectValue");
//   slider.oninput = function () {
//     SelectValue.innerHTML = numberWithCommas(this.value);
//   }
//   function numberWithCommas(sum) {
//     return sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
//   }
// })
$(function () {
  var inputLeft = document.getElementById("input-left");
  var inputRight = document.getElementById("input-right");

  var thumbLeft = document.querySelector(".slider > .thumb.left");
  var thumbRight = document.querySelector(".slider > .thumb.right");
  var range = document.querySelector(".slider > .range");
  const SelectValue = document.getElementById("SelectValue");

  function setLeftValue() {
    var _this = inputLeft,
      min = parseInt(_this.min),
      max = parseInt(_this.max);

    _this.value = Math.min(parseInt(_this.value), parseInt(inputRight.value) - 1);

    var percent = ((_this.value - min) / (max - min)) * 100;

    thumbLeft.style.left = percent + "%";
    range.style.left = percent + "%";
  }
  setLeftValue();

  function setRightValue() {
    var _this = inputRight,
      min = parseInt(_this.min),
      max = parseInt(_this.max);

    _this.value = Math.max(parseInt(_this.value), parseInt(inputLeft.value) + 1);

    var percent = ((_this.value - min) / (max - min)) * 100;

    thumbRight.style.right = (100 - percent) + "%";
    range.style.right = (100 - percent) + "%";
  }
  setRightValue();

  inputLeft.addEventListener("input", setLeftValue);
  inputRight.addEventListener("input", setRightValue);
  
  function numberWithCommas(sum) {
    return sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  }
  SelectValue.innerHTML = numberWithCommas(inputRight.value);

  inputRight.oninput = function () {
      SelectValue.innerHTML = numberWithCommas(this.value);
  }
  inputLeft.oninput = function () {
      SelectValue.innerHTML = numberWithCommas(this.value);
  }
    function numberWithCommas(sum) {
     return sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  }

})
$(function () {
  var inputLeft = document.getElementById("term-input-left");
  var inputRight = document.getElementById("term-input-right");

  var thumbLeft = document.querySelector(".term-slider > .term-thumb.term-left");
  var thumbRight = document.querySelector(".term-slider > .term-thumb.term-right");
  var range = document.querySelector(".term-slider > .term-range");
  const SelectValue = document.getElementById("term-SelectValue");

  function setLeftValue() {
    var _this = inputLeft,
      min = parseInt(_this.min),
      max = parseInt(_this.max);

    _this.value = Math.min(parseInt(_this.value), parseInt(inputRight.value) - 1);

    var percent = ((_this.value - min) / (max - min)) * 100;

    thumbLeft.style.left = percent + "%";
    range.style.left = percent + "%";
  }
  setLeftValue();

  function setRightValue() {
    var _this = inputRight,
      min = parseInt(_this.min),
      max = parseInt(_this.max);

    _this.value = Math.max(parseInt(_this.value), parseInt(inputLeft.value) + 1);

    var percent = ((_this.value - min) / (max - min)) * 100;

    thumbRight.style.right = (100 - percent) + "%";
    range.style.right = (100 - percent) + "%";
  }
  setRightValue();

  inputLeft.addEventListener("input", setLeftValue);
  inputRight.addEventListener("input", setRightValue);
  
  function numberWithCommas(sum) {
    return sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  }
  SelectValue.innerHTML = numberWithCommas(inputRight.value);

  inputRight.oninput = function () {
      SelectValue.innerHTML = numberWithCommas(this.value);
  }
  inputLeft.oninput = function () {
      SelectValue.innerHTML = numberWithCommas(this.value);
  }
    function numberWithCommas(sum) {
     return sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  }

})



// $(function () {
//   var inputLeft = document.getElementById("term-input-left");
//   var inputRight = document.getElementById("term-input-right");

//   var thumbLeft = document.querySelector(".slider > .term-thumb.left");
//   var thumbRight = document.querySelector(".slider > .term-thumb.right");
//   var range = document.querySelector(".slider > .term-range");
//   const SelectValue = document.getElementById("term-SelectValue");

//   function setLeftValue() {
//     var _this = inputLeft,
//       min = parseInt(_this.min),
//       max = parseInt(_this.max);

//     _this.value = Math.min(parseInt(_this.value), parseInt(inputRight.value) - 1);

//     var percent = ((_this.value - min) / (max - min)) * 100;

//     thumbLeft.style.left = percent + "%";
//     range.style.left = percent + "%";
//   }
//   setLeftValue();

//   function setRightValue() {
//     var _this = inputRight,
//       min = parseInt(_this.min),
//       max = parseInt(_this.max);

//     _this.value = Math.max(parseInt(_this.value), parseInt(inputLeft.value) + 1);

//     var percent = ((_this.value - min) / (max - min)) * 100;

//     thumbRight.style.right = (100 - percent) + "%";
//     range.style.right = (100 - percent) + "%";
//   }
//   setRightValue();

//   inputLeft.addEventListener("input", setLeftValue);
//   inputRight.addEventListener("input", setRightValue);

//   function numberWithCommas(sum) {
//     return sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
//   }
//   SelectValue.innerHTML = numberWithCommas(inputRight.value);

//   inputRight.oninput = function () {
//     SelectValue.innerHTML = numberWithCommas(this.value);
//   }
//   inputLeft.oninput = function () {
//     SelectValue.innerHTML = numberWithCommas(this.value);
//   }
//   function numberWithCommas(sum) {
//     return sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
//   }

// })