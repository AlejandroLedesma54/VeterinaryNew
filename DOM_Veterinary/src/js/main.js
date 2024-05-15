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
    `
}



console.table(pets)