class BookUi {
	static displayDummyBooks() {
		const courses = [
			{
				name: "Node.js",
				price: 1200,
				author: "Mohamed Alaa",
				description: "Best learn",
			},
			{
				name: "PHP",
				price: 1300,
				author: "Mohamed Hesham",
				description: "Learn Modern PHP",
			},
		];

		for (let course of courses) {
			BookUi.displayBooksIntoTable(course);
		}
	}

	static displayBooksIntoTable(course) {
		const tbody = document.querySelector("tbody"),
			row = document.createElement("tr");
		row.innerHTML = `
            <td>${course.name}</td>
            <td>${course.price}</td>
            <td>${course.author}</td>
            <td>${course.description}</td>
            <td>
                <a href="#" class="btn btn-danger delete-book">delete</a>
            </td>
        `;
		tbody.appendChild(row);
	}
}

document.addEventListener("DOMContentLoaded", BookUi.displayDummyBooks);
