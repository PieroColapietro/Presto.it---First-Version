function populateCategories() {
    let categories = ['Motori', 'Telefonia', 'Immobili', 'Lavoro', 'Servizi', 'Elettronica', 'Accessori', 'Musica']
    let categoryWrapper = document.querySelector('#category-wrapper');
    categories.forEach(categoria => {
        let card = document.createElement('div')
        card.classList.add('col-12', 'col-lg-3', 'd-flex')
        card.innerHTML = `
                <div class="col-12 col-lg-3 d-flex">
                    <div class="card card-custom">
                        <div class="card-body">
                            
                            <h4 class="card-text fw-bold">${categoria}</h4>
                       
                            <a href="#" class="btn btn-primary">Vai alla sezione</a>
                        </div>
                    </div>
                </div>
                `
                categoryWrapper.appendChild(card)
               
    })

}
populateCategories()
