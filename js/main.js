$(document).ready(function(){

  $("#submit").click(function(){
      $("#response").removeClass("hidden");
      computeTotalCost();
  });
$(".addDependent").click(function(){
    $("#dependents").append("<div class=\"form-group\"><label for=\"employeeEmail\" class=\"col-sm-2 col-form-label\">Dependent\'s Name</label><input type=\"text\" placeholder=\"Dependent\'s Name\" class=\"form-control dependent\" ><span> X 500 </div>");

});

function computeTotalCost() {
  // var dependents = $(".dependents").val() * 500;
  dependents = 0;
  $(".dependent").each(function(){
    var thisDependent = this.value.charAt(0);
    console.log(thisDependent);
    if(thisDependent == "a"){
      dependents += 500*.9;
      this.append("<span> X 10%</span>")
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
    discount = .9 * 1000;
    $("#nameStartsWithA").removeClass("hidden");
}
var totalCostBeforeDeductions = 2000 * 26;
var benefitsTotalCost = dependents + discount
var totalCost = totalCostBeforeDeductions - benefitsTotalCost;

console.log("totalCost*discount "+totalCost +" * " + discount +" = " + totalCost);
  $("#totalCost").text(totalCostBeforeDeductions + " - " + benefitsTotalCost +  " = " + totalCost)};
});
