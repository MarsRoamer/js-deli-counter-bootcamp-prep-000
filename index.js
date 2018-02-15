var katzDeli = [];
var KatzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.indexOf(name) + 1} in line.`
}

function nowServing() {

  var person = katzDeliLine[0];
    if(katzDeliLine.length > 0) {
    katzDeliLine.shift();
    return person;
  } else {
    return 'There is nobody waiting to be served!'
  }
}
