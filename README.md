# Designing-a-Web-Page


---

## 1. Requirements

### Functional Requirements
* **Real-time Search:** Users can filter the service table by typing in the search bar. The table updates instantly as the user types.
* **Data Visualization:** The system displays services with clear status indicators (Online/Offline).
* **Dynamic Feedback:** The interface provides immediate visual feedback based on user input.

### Non-functional Requirements
* **Semantic HTML:** Implementation uses structured tags like `<table>`, `<thead>`, and `<main>` for better accessibility and SEO.
* **External Styling:** All visual design is stored in an external `style.css` file and mapped via classes.
* **Unobtrusive JavaScript:** JS events (`input`) are used to provide core functionality (filtering) rather than just visual effects.
* **Performance:** Filtering is performed locally on the client side for maximum responsiveness.

---

## 2. Page Design (Schema)

The application follows a clean, data-centric design schema:

### Layout Structure
* **Header Section:** Displays the main title of the report.
* **Control Layer:** Contains a full-width search input field for quick data access.
* **Data Layer:** A central table that serves as the primary information carrier.



### Component Map
| Component | Technology | Purpose |
| :--- | :--- | :--- |
| **Search Bar** | HTML `<input>` | Capture user filter criteria |
| **Report Table** | HTML `<table>` | Display structured service data |
| **Status Badges** | CSS Classes | Color-code status (Green = OK, Red = Fail) |
| **Filter Logic** | JS `addEventListener` | Dynamically show/hide rows based on input |

### Interaction Flow
1. User types into the **Search Bar**.
2. JavaScript captures the **`input` event**.
3. The script iterates through all **table rows**.
4. Rows that do not match the search term are set to `display: none`.

---

## 3. Self-Evaluation Checklist
- [x] Functional and non-functional requirements provided.
- [x] Page design (schema) is complete and unambiguous.
- [x] HTML is semantic and uses classes.
- [x] CSS is external and mapped via classes.
- [x] JS events affect the actual functionality of the page.
