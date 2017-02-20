<form action="/<%= shoe.id %>" method="POST">
  <div class="form-group row">
     <label for="name" class="col-2 col-form-label">Name:</label>
     <div class="col-10">
     <input type="text" name="name" value="<%= shoe.name %>">
     </div>
   </div>
   <div class="form-group row">
     <label for="colorway" class="col-2 col-form-label">Colorway:</label>
     <div class="col-10">
       <input type="text" name="colorway" value="<%= shoe.colorway %>">
     </div>
   </div>
   <div class="form-group row">
     <label for="materials" class="col-2 col-form-label">Materials:</label>
     <div class="col-10">
      <input type="text" name="materials" value="<%= shoe.materials %>">
     </div>
   </div>
    <div class="form-group row">
     <label for="price" class="col-2 col-form-label">Price:</label>
     <div class="col-10">
      <input type="number" name="price" value="<%= shoe.price %>">
     </div>
   </div>
  <div class="form-group row">
     <label for="year" class="col-2 col-form-label">Year:</label>
     <div class="col-10">
       <input type="number" name="year" value="<%=shoe.year %>">
     </div>
   </div>
   <div class="form-group row">
     <label for="image" class="col-2 col-form-label">Image URL:</label>
     <div class="col-10">
       <input type="text" name="image" value="<%= shoe.image %>">
     </div>
   </div>
   <input type="hidden" name="likes" value="0">
   <input type="submit" value="Save Post">
   <% if(shoe.id != "") { %>
   <input type="hidden" name="_method" value="PUT">
   <% } %>
 </form>




