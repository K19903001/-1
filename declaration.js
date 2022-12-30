const $addButton = document.querySelector('[data-add_button]');
const $modal = document.querySelector('[data-modal]');
const $wrapper = document.querySelector('[data-wrapper]');
const $spinner = document.querySelector('[data-spinner]')
const $errorMessage = document.querySelector('[data-errmsg]')
const $modalCloseBtn = document.querySelector('[data-close]')
const $showModal = document.querySelector('[data-action="show"]')
const $overlay = document.querySelector(".overlay")

const api = new Api('kkonstantinova')
