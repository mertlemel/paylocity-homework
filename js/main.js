$(document).ready(function() {

	$("#submit").click(function() {
		$("#response").removeClass("hidden");
		computeTotalCost();
	});

	$(".addDependent").click(function() {
		$("#dependents").append("<div class=\"input-group\" id = \"dependents\"><span class=\"input-group-addon\">Dependent's Name</span><input type=\"text\" placeholder=\"Dependent\'s Name\" class=\"form-control dependent\"></input></div>");
	});

	function computeTotalCost() {
		// var dependents = $(".dependents").val() * 500;
		dependents = 0;
		$(".dependent").each(function() {
			var thisDependent = this.value.charAt(0);
			console.log(thisDependent);
			if (thisDependent == "a") {
				dependents += 500 * .9;
				this.append("<span> X 10%</span>")
			} else {
				dependents += 500
			}
		})

		var employeeNameFirstLetter = $("#employeeName").val().charAt(0);
		var discount = 1000
		if (employeeNameFirstLetter == "a") {
			discount = .9 * 1000;
			$("#nameStartsWithA").removeClass("hidden");
		}
		var totalCostBeforeDeductions = 2000 * 26;
		var benefitsTotalCost = dependents + discount
		var totalCost = totalCostBeforeDeductions - benefitsTotalCost;

		$("#totalCostBeforeDeductions").text("$" + totalCostBeforeDeductions);
		$("#benefitsTotalCost").text("$" + benefitsTotalCost);
		$("#totalCost").text("$" + totalCost);
	}

});
