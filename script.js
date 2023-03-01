function createTable() {
	// Get user input
	var restaurant = document.getElementById("restaurant").value;
	var worker = document.getElementById("worker").value;
	var month = document.getElementById("month").value;

	// Parse month and year from user input
	var monthYear = month.split("-");
	var monthNum = parseInt(monthYear[1]);
	var yearNum = parseInt(monthYear[0]);

	// Get number of days in the month
	var daysInMonth = new Date(yearNum, monthNum, 0).getDate();

	// Create table header
	var tableHtml =
		"<table><thead><tr><th>Jour</th><th>Date</th><th>Horaires Midi</th><th>Horaires Soir</th><th>Total Heures Journée</th></tr></thead><tbody>";

	// Create table rows

	for (var i = 1; i <= daysInMonth; i++) {
		var dateObj = new Date(yearNum, monthNum - 1, i);
		var dayName = dateObj.toLocaleDateString('fr-FR', { weekday: 'short' });
		var dateStr = i.toString().padStart(2, "0") + "-" + monthNum.toString().padStart(2, "0");
		var horairesMidi = " | ";
		var horairesSoir = " | ";
		var totalHeuresJournee = "|";
		if (dayName === "dim.") {
			horairesMidi = "Fermée";
			horairesSoir = "Fermée";
			totalHeuresJournee = "Fermée";

		}

		var rowHtml = "<tr><td>" + dayName + "</td><td>" + dateStr + "</td><td contenteditable class='midi'>" + horairesMidi + "</td><td contenteditable class='soir'>" + horairesSoir + "</td><td contenteditable class='total'>" + totalHeuresJournee + "</td></tr>"; tableHtml += rowHtml;

	}


	document.querySelector



	// Close table
	tableHtml += "</tbody></table>";




	// Add table to the page
	document.getElementById("table-container").innerHTML = tableHtml;


	// Add event listener to "select" button
	document.getElementById("select").addEventListener("click", function () {
		// Get all the selected cells in the table
		var selectedCells = document.querySelectorAll("#table-container td.selected");

		// Get the input from the user
		var value = prompt("Please enter a value for the selected cells:");

		// Update the content of all the selected cells with the input value
		for (var i = 0; i < selectedCells.length; i++) {
			selectedCells[i].innerHTML = value;
		}
	});

	// Add event listeners to table cells to allow selection
	var tableCells = document.querySelectorAll("#table-container td");
	for (var i = 0; i < tableCells.length; i++) {
		tableCells[i].addEventListener("click", function () {
			// Toggle the "selected" class on the clicked cell
			if (this.classList.contains("selected")) {
				this.classList.remove("selected");
			} else {
				this.classList.add("selected");
			}
		});

	}
}



function generateReport() {
	var restaurant = document.getElementById("restaurant").value;
	var worker = document.getElementById("worker").value;
	var month = document.getElementById("month").value;

	var tableHtml = document.getElementById("table-container").innerHTML;
	var reportHtml =
		"<html><head><title>Fiche De Presence</title><style>" +
		"body { font-family: Arial, sans-serif; text-align: center;}" +
		"table { border-collapse: collapse; width: 80%; margin: 0 auto;text-align: center; }" +
		"th, td { border: 1px solid #ddd; padding: 8px; text-align: center;}" +
		"th { text-align: left; background-color: #f2f2f2;text-align: center; }" +
		"tr:nth-child(even) { background-color: #f2f2f2;text-align: center; }" +
		"h1 { text-align: center; text-align: center;}" +
		"</style></head><body>" +
		"<h1>Fiche de Presence</h1><h2>Entreprise: " +
		restaurant +
		"</h2><h2>Nom Prenom Employe: " +
		worker +
		"</h2><h2>Année/Mois: " +
		month +
		"</h2>" +
		tableHtml +
		"</body></html>";

	var reportWindow = window.open("", "Fiche de Presence");
	reportWindow.document.write(reportHtml);
	reportWindow.document.close();
}



