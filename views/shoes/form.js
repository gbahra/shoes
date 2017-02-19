<form action="/<%shoe.id%>" method="POST">
   <div class="form-group row">
     <label for="example-text-input" class="col-2 col-form-label">name</label>
     <div class="col-10">
       <input class="form-control" name:"name" type="text" value="<%= shoe.name %>" id="example-text-input">
     </div>
   </div>
   <div class="form-group row">
     <label for="example-text-input" class="col-2 col-form-label">Colorway:</label>
     <div class="col-10">
       <input class="form-control" name:"colorway" type="text" value="<%= shoe.colorway %>" id="example-text-input">
     </div>
   </div>
   <div class="form-group row">
     <label for="example-text-input" class="col-2 col-form-label">Materials:</label>
     <div class="col-10">
       <input class="form-control" name:"materials" type="text" value="<%= shoe.materials %>" id="example-text-input">
     </div>
   </div>
   <div class="form-group row">
     <label for="example-text-input" class="col-2 col-form-label">Price:</label>
     <div class="col-10">
       <input class="form-control" type="number" value="<%= shoe.price %>" id="example-text-input">
     </div>
   </div>
   <div class="form-group row">
     <label for="example-text-input" class="col-2 col-form-label">Year:</label>
     <div class="col-10">
       <input class="form-control" name:"year" type="number" value="<%= shoe.year %>" id="example-text-input">
     </div>
   </div>
   <div class="form-group row">
     <label for="example-text-input" class="col-2 col-form-label">Image URL:</label>
     <div class="col-10">
       <input class="form-control" name:"image" type="text" value="<%= shoe.image %>" id="example-text-input">
     </div>
   </div>
   <input type="submit" value="Save Post">
   <% if(shoe.id != "") { %>
   <input type="hidden" name="_method" value="PUT">
   <% } %>
 </form>





