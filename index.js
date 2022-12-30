api
  .getCats()
  .then((responce) => {
    return responce.json()
  })
  .then((data) => {
    setTimeout(() => {
      $spinner.classList.add('hidden')
      data.forEach(cat => {
        $wrapper.insertAdjacentHTML('beforeend', gerenationCatCard(cat))
      });
    }, 1000);
  });



$wrapper.addEventListener('click', (event) => {
  const $currentCard = event.target.closest("[data-card_id]");
  const catId = $currentCard.dataset.card_id;
  switch (event.target.dataset.action) {
    case 'delete':     
      api.delCat(catId);
      $currentCard.remove()
      break;

    case 'show':
   
      break;

    case 'edit':
      console.log(event.target);
      // найти id
      // запрос к api.getOneCat(id)
      // открываться модалка с формой редактирования
      // set data в поля формы
      break;

    default:
      break;
  }
})


// const getCatOnAsyncAwait = async () => {
//   const responce = await api.getCats();
//   const cats = await responce.json();

//   setTimeout(() => {
//     $spinner.classList.add('hidden')
//     cats.forEach(cat => {
//       $wrapper.insertAdjacentHTML('beforeend', gerenationCatCard(cat))
//     });
//   }, 2000);
// }
// getCatOnAsyncAwait() - переписанная функция запроса всех котов на async/await (1 строка)



//TODO: добавить форму редактирования
//TODO: сделать закрытие модалок по клику на крестик или на пространство вокруг
//TODO: чистить формы если человек закрыл их сам
//TODO: спрашивать перед удалением "Вы уверены?"
//TODO: заюзать LocalStorage
