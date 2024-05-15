
import { pets } from '../../public/database/database'
import '../scss/style.scss'
import * as bootstrap from 'bootstrap'

const main = document.querySelector("main")

for (const pet of pets) {
    main.innerHTML += `
    <article class="card" style="width: 18rem;">
        <figure>
            <img src=${pet.image} class="card-img-top object-fit-cover" alt="pet">
        </figure>
        <div class="card-body my-0">
            <h5 class="card-title text-center">${pet.name}</h5>
            <div class="text-center">
                <button type="button" data-id=${pet.id} class="btn btn-primary">Details</button>
                <button type="button" data-id=${pet.id} class="btn btn-warning">Edit</button>
                <button type="button" data-id=${pet.id} class="btn btn-danger text-light">Delete</button>
            </div>
        </div>
    </article>
    
    <article class="container my-3" >
    <form  class="needs-validation" id="form" action="./index.html" method="post">
      <div class="form-floating mb-3">
        <input type="text" class="form-control" id="name" name="Name" placeholder="Name(s)" required>
        <label for="floatingInput">Name(s)</label>
      </div>

      <div class="form-floating mb-3">
        <input type="text" class="form-control" id="last-name" name="last-name" placeholder="Last name(s)" required>
        <label for="floatingInput">Last name(s)</label>
      </div>

      <div class="form-floating mb-3">
        <input type="email" class="form-control" id="email" name="email" placeholder="example@email.com" required>
        <label for="floatingInput">Email</label>
      </div>

      <div class="text-center">
        <button id="btn-save" type="submit" class="btn btn-success">Save</button>
            <button type="reset" class="btn btn-danger">Cancel</button>
      </div>



    </form>
    <caption class="caption-top">List of coders</caption>
    <table class="table table-hover table-striped table-bordered border-primary text-center">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Email</th>
          <th scope="col">Options</th>
          <th scope="row">${pets.name}</th>
        <td>${pets.species}</td>
        <td>${pets.breed}</td>
        <td>${pets.status}</td>
        </tr>
      </thead>
      <tbody class="table-group-divider">

    </table>

  </article>
    `
}





console.table(pets)

table.addEventListener("click", function (event) {
    if (event.target.classList.contains("btn-danger")) {
      const IdToEliminate = event.target.getAttribute("data-id");
      eliminate(coders, IdToEliminate);
      listWithInner(coders, tbody);
      showSmallAlertSuccess("element deleted");
    }
  });