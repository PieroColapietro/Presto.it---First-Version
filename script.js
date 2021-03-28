let btnMenu = document.querySelector('.btn-menu')
btnMenu.addEventListener('click', () => {
    let iconMenu = document.querySelector('#icon-menu')
    iconMenu.classList.toggle('rotate')
})
let navBar = document.querySelector('#navbar-presto')
document.addEventListener('scroll', () => {
    // console.log(window.scrollY)
    if(window.scrollY > 300) {
        navBar.classList.add('navbar-active')
    } else {
        navBar.classList.remove('navbar-active')
    }
})


let categoryWrapper = document.querySelector('.categ-carus');
function populateCategories() {
    // let categories = ['Motori', 'Telefonia', 'Immobili', 'Lavoro', 'Servizi', 'Elettronica', 'Accessori', 'Musica', 'pinco']
    let categories = [
        { nome: 'Motori', icon: '<i class="fas fa-tshirt fs-1 pb-4"></i>' },
        { nome: 'Telefonia', icon: '<i class="fas fa-tshirt fs-1 pb-4"></i>' },
        { nome: 'Immobili', icon: '<i class="fas fa-tshirt fs-1 pb-4"></i>' },
        { nome: 'Lavoro', icon: '<i class="fas fa-tshirt fs-1 pb-4"></i>' },
        { nome: 'Servizi', icon: '<i class="fas fa-tshirt fs-1 pb-4"></i>' },
        { nome: 'Elettronica', icon: '<i class="fas fa-tshirt fs-1 pb-4"></i>' },
        { nome: 'Accessori', icon: '<i class="fas fa-tshirt fs-1 pb-4"></i>' },
        { nome: 'Musica', icon: '<i class="fas fa-tshirt fs-1 pb-4"></i>' },
        { nome: 'pinco', icon: '<i class="fas fa-tshirt fs-1 pb-4"></i>' },
    ]

    categories.forEach(categoria => {
        let card = document.createElement('div')
        card.classList.add('col-12', 'col-lg-4', 'py-3',)
        card.innerHTML = `
                
                    <div class="card card-custom my-5 mx-5">
                        <div class="card-body">
                         ${categoria.icon}
                            <h4 class="card-text fw-bold">${categoria.nome}</h4>
                            <a href="#" class="btn btn-primary btn-custom">Vai alla sezione</a>
                        </div>
                            <i class="fas fa-carrot card-carrot "></i>
                    </div>
                </div>
                `
        categoryWrapper.appendChild(card)

    })

}


if (categoryWrapper) {
    populateCategories()
}





// popolamento carosello home degli annunci
let lastAdsWrapper = document.querySelector('.pronto-carousel')
function populateLastAds() {

    let ads = [
        { title: 'Moto', description: 'Lorem impsum mannag getta ma nnagge tta mannaggetta', price: '12100' },
        { title: 'Auto', description: 'Lorem impsum mannag getta ma nnagge tta mannaggetta', price: '50' },
        { title: 'Gonna', description: 'Lorem impsum mannag getta ma nnagge tta mannaggetta', price: '1500' },
        { title: 'Occhiali', description: 'Lorem impsum mannag getta ma nnagge tta mannaggetta', price: '100' },
        { title: 'Orologio', description: 'Lorem impsum mannag getta ma nnagge tta mannaggetta', price: '210' },
        { title: 'Mouse', description: 'Lorem impsum mannag getta ma nnagge tta mannaggetta', price: '3200' },
        { title: 'Monitor', description: 'Lorem impsum mannag getta ma nnagge tta mannaggetta', price: '900' },
        { title: 'Tavolino', description: 'Lorem impsum mannag getta ma nnagge tta mannaggetta', price: '7200' },
        { title: 'Caffè', description: 'Lorem impsum mannag getta ma nnagge tta mannaggetta', price: '0.800' },
        { title: 'Cucina', description: 'Lorem impsum mannag getta ma nnagge tta mannaggetta', price: '9200' },
        { title: 'Ombrellone', description: 'Lorem impsum mannag getta ma nnagge tta mannaggetta', price: '3100' },
        { title: 'Sedia', description: 'Lorem impsum mannag getta ma nnagge tta mannaggetta', price: '123' },
        { title: 'Bicchiere', description: 'Lorem impsum mannag getta ma nnagge tta mannaggetta', price: '1200' },
    ]

    ads.forEach(ad => {
        let card = document.createElement('div')
        card.innerHTML = `
                        <div class="car-cont">
                            <div class="card card-car bg-dark text-white mx-2">
                                <img src="https://picsum.photos/800/500"
                                    class="card-img p-radius" alt="...">
                                    <div class="card-img-overlay presto-card-overlay">
                                    <div class="card-text card-text-title font-main fs-1">${ad.title}</div>
                                    <div class="card-text card-text-off font-main mt-3">${ad.description}</div>
                                    <div class="card-text card-text-off font-main">${ad.price} $ </div>
                                    <div class="container-fluid footercard d-flex justify-content-around align-middle my-3">
                                    <button button type="button" class="col-7 col-md-8 btn btn-car btn-primary font-main">Click
                                        for more info </button>
                                    <button class="btn like tc-main fs-5">
                                       
                                        <i class="far fa-thumbs-up pollice"></i>
                                
                                    </button>
                                    </div>
                                </div>
                            </div>
                        </div>                       
        `
        lastAdsWrapper.appendChild(card)
    })
}

if (lastAdsWrapper) {
    populateLastAds()
}
let likebtns = document.querySelectorAll('.like')
// console.log(likebtns)

likebtns.forEach(btn => {
    btn.addEventListener('click', () => {
        console.log(btn)
        // btn.addEventListener.toggle('')
        btn.classList.toggle('heart')
        btn.children[0].classList.toggle('fas')
        btn.children[0].classList.toggle('far')
    })

})

// pagina annunci
fetch('./annunci.json').then(data => data.json())
    .then(annunci => {

        function populateAds(annunci) {
            let adsWrapper = document.querySelector('#ads-wrapper')
            adsWrapper.innerHTML = ''

            annunci.forEach(ad => {
                let card = document.createElement('div')

                card.classList.add('col-12', 'col-lg-5', 'p-2',)

                card.innerHTML = `<div class="car-cont m-2">
                            <div class="card card-car bg-dark text-white mx-2">
                                <img src="https://picsum.photos/800/600"
                                    class="card-img p-radius" alt="...">
                                <div class="card-img-overlay presto-card-overlay">
                                    <div class="card-text font-main fs-4 mt-2 mb-3 tc-accent">${ad.name}</div>
                                    <div class="card-text font-main"> lorem  ipsum dolor sit </div>
                                    <div class="card-text font-main tc-accent">${ad.price} $ </div>
                                    <button button type="button" class="btn btn-custom btn-primary mt-3 font-main">Click
                                        for more info 
                                    </button>
                                </div>
                            </div>
                        </div>
                        `
                adsWrapper.appendChild(card)
            });
        }

        populateAds(annunci)

        function populateFilterCategories() {
            let setCategories = new Set();
            let categoriesWrapper = document.querySelector('#category-filter')
            annunci.forEach(ad => {
                setCategories.add(ad.category)
            })

            setCategories = Array.from(setCategories)

            setCategories.forEach(cat => {

                let input = document.createElement('div')

                input.classList.add('form-check')

                input.innerHTML = `
                <input class="form-check-input" type="radio" category-filter="${cat}" name="category-filter" >
                <label class="form-check-label" for="flexRadioDefault1">
                  ${cat}
                </label>
            `
                categoriesWrapper.appendChild(input)

            })
        }
        populateAds(annunci)

        // filtri per categoria

        populateFilterCategories()

        function filterCategory() {
            let filters = document.querySelectorAll('[category-filter]')
            filters.forEach(filter => {
                filter.addEventListener('input', () => {
                    let query = filter.getAttribute('category-filter')
                    let filtered;
                    if (query === 'All') {
                        filtered = annunci
                    } else {
                        filtered = annunci.filter(ad => ad.category === query)
                    }


                    populateAds(filtered)

                })

            })
        }
        filterCategory()

        // filtro ricerca per parola

        function filterSearch() {
            let searchInput = document.querySelector('#input-search')
            // console.log(searchInput)
            searchInput.addEventListener('input', () => {
                let search = searchInput.value.toLowerCase()

                filtered = annunci.filter(ad => ad.name.toLowerCase().includes(search))
                populateAds(filtered)
            })

        }filterSearch()
    })

// function likeHeart() {
//     let likeId =  document.querySelector('#likes-id') 
//         likeId.classList.toggle(`heart`)
// }
// likeheart()