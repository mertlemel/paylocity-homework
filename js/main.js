$(document).ready(function(){
  $("#submit").click(function(){
      $("#response").removeClass("hidden");
      computeTotalCost();
});

function computeTotalCost() {
  var dependents = $("#dependents").val() * 500;
  console.log(dependents);

  var employeeNameFirstLetter = $("#employeeName").val().charAt(0);
  console.log("name " + employeeNameFirstLetter);

  var discount = 1
  if( employeeNameFirstLetter == "a"){
    discount = .1;
}
var totalCost = 2000 * 26;
totalCost = totalCost - dependents;
totalCost = totalCost * discount;

console.log("totalCost*discount "+totalCost +" * " + discount +" = " + totalCost);
  $("#totalCost").text( totalCost);
};
});
