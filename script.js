


let categoryWrapper = document.querySelector('#category-wrapper')

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
                
                      <div class="card card-custom my-5">
                      
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

if(categoryWrapper) {
    populateCategories()
}

let lastAdsWrapper = document.querySelector('.pronto-carousel')

function populateLastAds() {
    
    let ads = [
        { title: 'moto', description: 'Lorem impsum mannag getta ma nnagge tta mannaggetta', price: '12100' },
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
                                <img src="https://picsum.photos/800/600"
                                    class="card-img p-radius" alt="...">
                                <div class="card-img-overlay presto-card-overlay">
                                   
                                    <div class="card-text font-main fs-4 mt-2 mb-3">${ad.title}</div>
                                    <div class="card-text font-main">${ad.description}</div>
                                    <div class="card-text font-main">${ad.price} $ </div>
                                    <button button type="button" class="btn btn-car btn-primary mt-3 font-main">Click
                                        for more info </button>
                                </div>
                            </div>
                        </div>
        `
        lastAdsWrapper.appendChild(card)
    })
}

if(lastAdsWrapper) {
    populateLastAds()
}


fetch('./annunci.json').then(data => data.json())
    .then(annunci =>{
        console.log(annunci);

        function populateAds() {
        let adsWrapper = document.querySelector ('#ads-wrapper')
         
        annunci.forEach(ad => {
        let card = document.createElement('div')

        card.classList.add( 'col-12' , 'col-sm-6' , 'col-lg-4' )

        card.innerHTML=`<div class="car-cont">
                            <div class="card card-car bg-dark text-white mx-2">
                                <img src="https://picsum.photos/800/600"
                                    class="card-img p-radius" alt="...">
                                <div class="card-img-overlay presto-card-overlay">
                                    <div class="card-text font-main fs-4 mt-2 mb-3">${ad.name}</div>
                                    <div class="card-text font-main"> lorem  ipsum dolor sit </div>
                                    <div class="card-text font-main">${ad.price} $ </div>
                                    <button button type="button" class="btn btn-car btn-primary mt-3 font-main">Click
                                        for more info </button>
                                </div>
                            </div>
                        </div>
                        `
        adsWrapper.appendChild(card)
    });
    }
    populateAds()
})
