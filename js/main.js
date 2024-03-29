$(document).ready(function() {
  var dependentBenefitsCost = 500;
  var discount = .9;
  var employeeBenefitsCost = 1000;
  var employeeSalaryPerMonth = 2000;
  var employeeSalaryPerYear = employeeSalaryPerMonth *26;

	$("#submit").click(function() {
		$("#response").removeClass("hidden");
		computeTotalCost();
	});

	$(".addDependent").click(function() {
		$("#dependents").append("<div class=\"input-group\" id = \"dependents\"><span class=\"input-group-addon\">Dependent's Name</span><input type=\"text\" placeholder=\"Dependent\'s Name\" class=\"form-control dependent\"></input></div>");
	});

	function computeTotalCost() {
		totalDependentsBenefitsCost = 0;
		$(".dependent").each(function() {
			var thisDependentsFirstLetter = this.value.charAt(0);
			console.log(thisDependentsFirstLetter);
			if (thisDependentsFirstLetter == "a") {
				totalDependentsBenefitsCost += dependentBenefitsCost * discount;
			} else {
				totalDependentsBenefitsCost += dependentBenefitsCost
			}
		})

		var employeeNameFirstLetter = $("#employeeName").val().charAt(0);
    var totalEmployeeBenefitsCost = employeeBenefitsCost;
		if (employeeNameFirstLetter == "a") {
			totalEmployeeBenefitsCost = discount * employeeBenefitsCost;
		}
		var totalCostBeforeDeductions = employeeSalaryPerYear;
		var benefitsTotalCost = totalDependentsBenefitsCost + totalEmployeeBenefitsCost
		var totalCost = totalCostBeforeDeductions - benefitsTotalCost;

		$("#totalCostBeforeDeductions").text("$" + totalCostBeforeDeductions);
		$("#benefitsTotalCost").text("$" + benefitsTotalCost);
		$("#totalCost").text("$" + totalCost);
	}

});
