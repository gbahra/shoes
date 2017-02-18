//text
<div class="form-group row">
  <label for="example-text-input" class="col-2 col-form-label">Text</label>
  <div class="col-10">
    <input class="form-control" type="text" value="Artisanal kale" id="example-text-input">
  </div>
</div>
//email
<div class="form-group row">
  <label for="example-email-input" class="col-2 col-form-label">Email</label>
  <div class="col-10">
    <input class="form-control" type="email" value="bootstrap@example.com" id="example-email-input">
  </div>
</div>
//password
<div class="form-group row">
  <label for="example-password-input" class="col-2 col-form-label">Password</label>
  <div class="col-10">
    <input class="form-control" type="password" value="hunter2" id="example-password-input">
  </div>
</div>

<form action="/users" method="POST">
  <div class="form-group row">
    <label for="example-text-input" class="col-2 col-form-label">First Name:</label>
    <div class="col-10">
      <input class="form-control" type="text" value="" id="example-text-input">
    </div>
  </div>
  <div class="form-group row">
    <label for="example-text-input" class="col-2 col-form-label">Last Name:</label>
    <div class="col-10">
      <input class="form-control" type="text" value="" id="example-text-input">
    </div>
  </div>
  <div class="form-group row">
    <label for="example-email-input" class="col-2 col-form-label">Email:</label>
    <div class="col-10">
      <input class="form-control" type="email" value="@example.com" id="example-email-input">
    </div>
  </div>
  <div class="form-group row">
    <label for="example-password-input" class="col-2 col-form-label">Password:</label>
    <div class="col-10">
      <input class="form-control" type="password" value="" id="example-password-input">
    </div>
  </div>

  <input type="submit" value="Register">
</form>
