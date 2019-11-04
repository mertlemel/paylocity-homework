$(document).ready(function(){

  $("#submit").click(function(){
      $("#response").removeClass("hidden");
      computeTotalCost();
  });
$(".addDependent").click(function(){
    $("#dependents").append("<div class=\"form-group\"><label for=\"employeeEmail\" class=\"col-sm-2 col-form-label\">Dependent\'s Name</label><input type=\"text\" placeholder=\"Dependent\'s Name\" class=\"form-control dependent\" ><span> X 500 <span  class = \"hidden aName\"> X 10%</p></div>");

});

function computeTotalCost() {
  // var dependents = $(".dependents").val() * 500;
  dependents = 0;
  $(".dependent").each(function(){
    var thisDependent = this.value.charAt(0);
    console.log(thisDependent);
    if(thisDependent == "a"){
      dependents += 500*.1;
    }
    else {
    dependents += 500
    }
})
  console.log(dependents);

  var employeeNameFirstLetter = $("#employeeName").val().charAt(0);
  console.log("name " + employeeNameFirstLetter);

  var discount = 1000
  if( employeeNameFirstLetter == "a"){
    discount = .1 * 1000;
    $("#nameStartsWithA").removeClass("hidden");
}
var totalCostBeforDeductions = 2000 * 26;
var totalCost = totalCostBeforDeductions - dependents;
totalCost = totalCost - discount;

console.log("totalCost*discount "+totalCost +" * " + discount +" = " + totalCost);
  $("#totalCost").text( totalCost);
};
});
