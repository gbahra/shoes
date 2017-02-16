<form action = "" method = "POST">
  <form action="/<%= shoe.id %>" method="POST">
  <input type="text" name="name" placeholder="Name" value="<%= shoe.name %>">
  <input type="text" name="colorway" placeholder="Colorway" value="<%= shoe.colorway %>">
  <input type="text" name="material" placeholder="Material" value="<%= shoe.material %>">
  <input type="number" name="price" placeholder="Price" value="<%= shoe.price %>">
  <input type="number" name="year" placeholder="Name" value="<%= shoe.year %>">
  <input type="text" name="image" placeholder="Image URl" value="<%= shoe.image %>">
  <input type="submit" value="Save Post">
  <% if(shoe.id != "") { %>
  <input type="hidden" name="_method" value="PUT">
  <% } %>
</form>

