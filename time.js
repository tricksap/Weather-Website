module.exports = convert;
function convert(t) {
  var dt = new Date(t * 1000);
  var hr = dt.getHours() % 12;
  var m = "0" + dt.getMinutes();
  return hr + ":" + m.substr(-2);
}
