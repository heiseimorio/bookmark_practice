'use strict';

{
  const addUrlButton = document.getElementById("add_url");
  const mask = document.getElementById("mask");
  const modal = document.getElementById("modal");
  const cancelButton = document.getElementById("cancel");
  const addButton = document.getElementById("add");

  
  addUrlButton.addEventListener('click', () => {
    mask.classList.remove("hidden");
    modal.classList.remove("hidden");
  });

  cancelButton.addEventListener('click', () => {
    mask.classList.add("hidden");
    modal.classList.add("hidden");
  });

  addButton.addEventListener('click', () => {
    mask.classList.add("hidden");
    modal.classList.add("hidden");
  });


}