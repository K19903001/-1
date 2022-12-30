const gerenationCatCard = (cat) => {
  return `<div data-card_id=${cat.id} class="card mx-2" style="width: 18rem;">
  <img src="${cat.image}" class="card-img-top" alt="${cat.name}">
  <div class="card-body">
    <h5 class="card-title">${cat.name}</h5>
     <p class="card-text">${cat.description}</p>
    <button data-action="show" class="btn btn-primary">Show</button>
    <button data-action="delete" class="btn btn-danger">Delete</button>
    <button data-action="edit" class="btn btn-success">Edit</button>
  </div>
</div>`}

