/*$(document).ready(function(){
  $('#currencies').slick({
    arrows: false,
    infinite: false
  });
});
*/


var carousel;
carousel = $("ul");
carousel.itemslide(
    {
        one_item: true,
        swipe_sensitivity: 50,
        duration: 600,
      pan_threshold: 1,
      parent_width: true
    }
);

var pay = 4;
var daily = pay * 8;
var weekly = pay * 40;
var monthly = pay * 176;
var yearly = pay * 2080;
updateTextInput(pay);
currencyDigit();
(function() {
  /**
   * Decimal adjustment of a number.
   *
   * @param {String}  type  The type of adjustment.
   * @param {Number}  value The number.
   * @param {Integer} exp   The exponent (the 10 logarithm of the adjustment base).
   * @returns {Number} The adjusted value.
   */
  function decimalAdjust(type, value, exp) {
    // If the exp is undefined or zero...
    if (typeof exp === 'undefined' || +exp === 0) {
      return Math[type](value);
    }
    value = +value;
    exp = +exp;
    // If the value is not a number or the exp is not an integer...
    if (value === null || isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
      return NaN;
    }
    // If the value is negative...
    if (value < 0) {
      return -decimalAdjust(type, -value, exp);
    }
    // Shift
    value = value.toString().split('e');
    value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
    // Shift back
    value = value.toString().split('e');
    return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
  }

  // Decimal round
  if (!Math.round10) {
    Math.round10 = function(value, exp) {
      return decimalAdjust('round', value, exp);
    };
  }
  // Decimal floor
  if (!Math.floor10) {
    Math.floor10 = function(value, exp) {
      return decimalAdjust('floor', value, exp);
    };
  }
  // Decimal ceil
  if (!Math.ceil10) {
    Math.ceil10 = function(value, exp) {
      return decimalAdjust('ceil', value, exp);
    };
  }
})();

function currencyDigit(n) {
  var input = document.getElementById('textInput');
  var el = document.getElementById('input-hourlywage-currency');
  if ( input.value.length = 1)
    el.style.left = "5vmax";
  if ( input.value.length >= 2)
    el.style.left = "2vmax";
   if ( input.value.length > 2)
  el.style.left = "-1vmax";

}

function updateTextInput(val) {
  var input = document.getElementById('textInput');
  input.value = val;
  pay = val;
  
}

function updateRangeInput(num) {
  document.getElementById('rangeInput').value = num;
  pay = num;
  
}



function isNum(args) {
  args = args.toString();

  if (args.length == 0)
    return false;

  for (var i = 0; i < args.length; i++) {
    if ((args.substring(i, i + 1) < "0" || args.substring(i, i + 1) > "9") && args.substring(i, i + 1) != "." && args.substring(i, i + 1) != "-") {
      return false;
    }
  }

  return true;
}

function hwcheck(p) {

  var m = document.hw.m.value;
  var h = document.hw.h.value;
  var d = document.hw.d.value;
  var w = document.hw.w.value;
  var b = document.hw.b.value;
  var y = document.hw.y.value;
  var e = document.hw.e.value;
  var u = document.hw.u.value;
  var f = document.hw.f.value;

  if (p == "9" && !isNum(f)) {
    f = f.substring(0, f.length - 1);
    clearhw();
    return;
  }
  if (p == "8" && !isNum(u)) {
    u = u.substing(0, u.length - 1);
    clearhw();
    return;
  }

  if (p == "7" && !isNum(e)) {
    e = e.substring(0, e.length - 1);
    clearhw();
    return;
  }
  if (p == "1" && !isNum(h)) {
    h = h.substring(0, h.length - 1);
    clearhw();
    return;
  }
  if (p == "2" && !isNum(y)) {
    y = y.substring(0, y.length - 1);
    clearhw();
    return;
  }
  if (p == "3" && !isNum(m)) {
    m = m.substring(0, m.length - 1);
    clearhw();
    return;
  }
  if (p == "4" && !isNum(d)) {
    d = d.substring(0, d.length - 1);
    clearhw();
    return;
  }
  if (p == "5" && !isNum(w)) {
    w = w.substring(0, w.length - 1);
    clearhw();
    return;
  }
  if (p == "6" && !isNum(b)) {
    b = b.substring(0, b.length - 1);
    clearhw();
    return;
  }
  //*/
}


function hwcal(p) {




  daily = pay * 8;
  weekly = pay * 40;
  monthly = pay * 176;
  yearly = pay * 2080;
  var u = document.hw.u.value;
  var f = document.hw.f.value;
  var e = document.hw.e.value;
  var m = document.hw.m.value;
  var h = document.hw.h.value;
  var d = document.hw.d.value;
  var w = document.hw.w.value;
  var b = document.hw.b.value;
  var y = document.hw.y.value;

  if (p == "10") {
    e = Math.round10(h * 1.13569982, -2);
    u = Math.round10(h * 1.33447, -2);
    f = Math.round10(h * 356.81016, -2);
    b = Math.floor(h / yearly);
    new_h = h % yearly;
    w = Math.floor(new_h / monthly);
    new_h = h % monthly;
    d = Math.floor(new_h / weekly);
    new_h = h % weekly;
    m = Math.floor(new_h / daily);
    new_h = h % daily;
    y = Math.floor(new_h / pay);
  }

  if (p == "9") {
    u = Math.round10(f * 0.00374, -2);
    e = Math.round10(f * 0.00318292455, -2);
    h = Math.round10(f * 0.00280261077, -2);
    b = Math.floor(h / yearly);
    new_h = h % yearly;
    w = Math.floor(new_h / monthly);
    new_h = h % monthly;
    d = Math.floor(new_h / weekly);
    new_h = h % weekly;
    m = Math.floor(new_h / daily);
    new_h = h % daily;
    y = Math.floor(new_h / pay);
  }
  if (p == "8") {

    h = Math.round10(u * 0.74936117, -2);
    e = Math.round10(u * 0.851049344, -2);
    f = Math.round10(u * 267.379679, -2);
    b = Math.floor(h / yearly);
    new_h = h % yearly;
    w = Math.floor(new_h / monthly);
    new_h = h % monthly;
    d = Math.floor(new_h / weekly);
    new_h = h % weekly;
    m = Math.floor(new_h / daily);
    new_h = h % daily;
    y = Math.floor(new_h / pay);
  }
  if (p == "7") {
    h = Math.round10(e * 0.880514362, -2);
    f = Math.round10(e * 314.176471, -2);
    u = Math.round10(e * 1.17502, -2);
    b = Math.floor(h / yearly);
    new_h = h % yearly;
    w = Math.floor(new_h / monthly);
    new_h = h % monthly;
    d = Math.floor(new_h / weekly);
    new_h = h % weekly;
    m = Math.floor(new_h / daily);
    new_h = h % daily;
    y = Math.floor(new_h / pay);
  }
  if (p == "1") {
    e = Math.round10(h * 1.13569982, -2);
    u = Math.round10(h * 1.33447, -2);
    f = Math.round10(h * 356.81016, -2);
    b = Math.floor(h / yearly);
    new_h = h % yearly;
    w = Math.floor(new_h / monthly);
    new_h = h % monthly;
    d = Math.floor(new_h / weekly);
    new_h = h % weekly;
    m = Math.floor(new_h / daily);
    new_h = h % daily;
    y = Math.floor(new_h / pay);
    
    /* w = Math.floor(new_h / monthly) + "(" + Math.floor(h / monthly) + ")";
    new_h = h % monthly;
    d = Math.floor(new_h / weekly) + "(" + Math.floor(h / weekly) + ")";
    new_h = h % weekly;
    m = Math.floor(new_h / daily) + "(" + Math.floor(h / daily) + ")";
    new_h = h % daily;
    y = Math.floor(new_h / pay) + "(" + Math.floor(h / pay) + ")";
    
    */
  }
  if (p == "2") {
    h = pay * y;
    e = Math.round10(h * 1.13569982, -2);
    u = Math.round10(h * 1.33447, -2);
    f = Math.round10(h * 356.81016, -2);
  }
  if (p == "3") {
    h = daily * m;
    e = Math.round10(h * 1.13569982, -2);
    u = Math.round10(h * 1.33447, -2);
    f = Math.round10(h * 356.81016, -2);
  }
  if (p == "4") {
    h = weekly * d;
    e = Math.round10(h * 1.13569982, -2);
    u = Math.round10(h * 1.33447, -2);
    f = Math.round10(h * 356.81016, -2);
  }
  if (p == "5") {
    h = monthly * w;
    e = Math.round10(h * 1.13569982, -2);
    u = Math.round10(h * 1.33447, -2);
    f = Math.round10(h * 356.81016, -2);
  }
  if (p == "6") {
    h = yearly * b;
    e = Math.round10(h * 1.13569982, -2);
    u = Math.round10(h * 1.33447, -2);
    f = Math.round10(h * 356.81016, -2);
  }
  document.hw.f.value = f;
  document.hw.u.value = u;
  document.hw.e.value = e;
  document.hw.m.value = m;
  document.hw.h.value = h;
  document.hw.d.value = d;
  document.hw.w.value = w;
  document.hw.b.value = b;
  document.hw.y.value = y;
  
  $( '#clear_label' ).removeClass( 'hide' );

}

function clearhw() {

  document.hw.f.value = "";
  document.hw.u.value = "";
  document.hw.e.value = "";
  document.hw.m.value = "";
  document.hw.h.value = "";
  document.hw.d.value = "";
  document.hw.w.value = "";
  document.hw.b.value = "";
  document.hw.y.value = "";
  $( '#rangeInput' ).val('4');
  $( '#textInput' ).val('4');
  
  
   $( '#clear_label' ).addClass( 'hide' );
}