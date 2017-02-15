 function indexShoes(req, res) {
    res.send('index');
  }

  function showShoes(req, res) {
    res.send('show');
  }

  function newShoes(req, res) {
    res.send('new');
  }

  function createShoes(req, res) {
    res.send('create');
  }

  function editShoes(req, res) {
    res.send('edit');
  }

  function updateShoes(req, res) {
    res.send('update');
  }

  function deleteShoes(req, res) {
    res.send('delete');
  }

  module.exports = {
    index: indexShoes,
    show: showShoes,
    new: newShoes,
    create: createShoes,
    edit: editShoes,
    update: updateShoes,
    delete: deleteShoes
  }
