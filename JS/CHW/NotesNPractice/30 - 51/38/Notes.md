# structure of table in html

The basic structure of an HTML table includes several key elements:

<table>: The main container for the table.
<thead>: An optional section for the table header, which contains column headers.
<tbody>: The body of the table, containing the main data rows.
<tfoot>: An optional footer section, often used for summaries or additional information.
<tr>: Defines a row in the table.
<th>: Defines a header cell, typically within <thead>, and it’s bold and centered by default.
<td>: Defines a data cell within the table body.

Basic Table Structure Example
html
Copy code

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Age</th>
      <th>Occupation</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Alice</td>
      <td>25</td>
      <td>Engineer</td>
    </tr>
    <tr>
      <td>Bob</td>
      <td>30</td>
      <td>Designer</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="3">End of table</td>
    </tr>
  </tfoot>
</table>

Explanation of Each Part

<table>: Wraps the entire table structure.
<thead>: Contains a single <tr> with <th> elements for the column headers.
<tbody>: Contains multiple <tr> elements, each with <td> cells for the data.
<tfoot>: Contains a row with information about the table (e.g., totals or notes).

Additional Notes
colspan and rowspan attributes: Used in <td> or <th> elements to merge cells across multiple columns or rows.
Styling: You can add CSS to style the table, set borders, adjust padding, etc.
