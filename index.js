const $wrapper = document.querySelector('[data-wrapper]');
const $addButton = document.querySelector('[data-add_button]');
const $modal = document.querySelector('[data-modal]');
const $spinner = document.querySelector('[data-spinner]')
const $modalCloseBtn = document.querySelector('[data-close]')



const api = new Api('kkonstantinova')

const gerenationCatCard = (cat) => `<div data-card_id=${cat.id} class="card mx-2" style="width: 18rem;">
<img src="${cat.image}" class="card-img-top" alt="${cat.name}">
<div class="card-body">
  <h5 class="card-title">${cat.name}</h5>
  <p class="card-text">${cat.description}</p>
  <button data-action="show" class="btn btn-primary">Show</button>
  <button data-action="delete" class="btn btn-danger">Delete</button>
  <button data-action="Edit" class="btn btn-success">Edit</button>
</div>
</div>`

const showCatCard = (cat) => 
`<div data-cardCatShow>
   <img src="${cat.image}" class="showCatCard" alt="${cat.name}">
    <div class="card__info"> 
    <h3 class="card-title mt-2">${cat.name}</h3>
    <p class="card-text text-center p-3">${cat.description}</p>
    <button data-action-add class="btn btn-success btn-success-edit">Редактировать</button>
  </div>
  </div>
`;
const createShowModalEditCard = (cat) => `<div data-modal class="modal-wrapper hidden">
<div class="custom-modal">
    <form name="catsFormEdit">
    <input
      type="text"
      name="name"
      placeholder="Имя кота"
      class="form-control mb-2"
      id="exampleInputEmail1"
    />
    <input
      type="text"
      name="description"
      placeholder="Описание кота"
      class="form-control mb-2"
      id="exampleInputEmail2"
    />
    <input
      type="text"
      name="image"
      placeholder="Url картинки"
      class="form-control mb-2"
      id="exampleInputEmail3"
    />
    <input
      type="number"
      name="age"
      placeholder="Возраст"
      class="form-control mb-2"
      id="exampleInputEmail5"
    />
    <input
      type="number"
      name="rate"
      placeholder="Рейтинг"
      class="form-control mb-2"
      id="exampleInputEmail6"
    />
    <div class="mb-3 form-check">
      <input
        name="favorite"
        type="checkbox"
        class="form-check-input"
        id="exampleCheck1"
      />
      <label class="form-check-label" for="exampleCheck1"
        >Милаха?</label>
        
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    </div>
  </div>
    `

// это действия при нажатии на кнопки
$wrapper.addEventListener('click', (event) => {
  switch (event.target.dataset.action) {
    case 'delete':
      const $currentCard = event.target.closest("[data-card_id]");
      const catId = $currentCard.dataset.card_id;
      api.delCat(catId);
      $currentCard.remove();
      event.target.reset();
      break;

    case 'show':
      

  //   default:
  //     break;
  }
})


document.forms.catsForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const data = Object.fromEntries(new FormData(event.target).entries());

  data.age = Number(data.age)
  data.id = Number(data.id)
  data.rate = Number(data.rate)
  data.favorite = data.favorite === 'on'

  console.log(data);

  api.addCat(data)
    .then(res => {
      return res.ok ? reGenData() : res.json()
    })
    .then(errMsg => {
      return $errorMessage.innerHTML = errMsg?.message
    })
})

$addButton.addEventListener('click', () => {
  $modal.classList.remove('hidden')
  
})

api.getCats()
  .then((responce) => {
    return responce.json()
  })
  .then((data) => {
    setTimeout(() => {
      $spinner.classList.add('hidden')
      data.forEach(cat => {
        $wrapper.insertAdjacentHTML('beforeend', gerenationCatCard(cat))
      })
    }, 2000);
  });

  $modalCloseBtn.addEventListener('click', () => {
    $modal.style.display = 'none';
    document.body.style.overflow = '';
  });
 
  showCatCard.addEventListener('click', () => {
    $modal.classList.add('hidden')
    
  })

//TODO: после добавления кота через форму, делать новый запрос на бэк и обновлять список котов
//TODO: добавить форму редактирования
//TODO: сделать закрытие модалок по клику на крестик или на пространство вокруг
//TODO: чистить форму если человек ее закрыл сам

