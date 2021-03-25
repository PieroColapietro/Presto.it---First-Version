function populateCategories() {
    let categories = ['Motori', 'Telefonia', 'Immobili', 'Lavoro', 'Servizi', 'Elettronica', 'Accessori', 'Musica', 'pinco']
    let categoryWrapper = document.querySelector('#category-wrapper');
    categories.forEach(categoria => {
        let card = document.createElement('div')
        card.classList.add('col-12', 'col-lg-4', 'py-3', )
        card.innerHTML = `
        <i class="fas fa-carrot card-carrot"></i>
                      <div class="card card-custom">
                        <div class="card-body">
                        <i class="fas fa-tshirt fs-1 pb-4"></i>
                            <h4 class="card-text fw-bold">${categoria}</h4>
                       
                            <a href="#" class="btn btn-primary btn-custom">Vai alla sezione</a>
                        </div>
                    </div>
                </div>
                `
                categoryWrapper.appendChild(card)
               
    })

}
populateCategories()

