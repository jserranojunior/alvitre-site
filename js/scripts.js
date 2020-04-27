
    var $portfolio = document.querySelector('.columns-portfolio')
    var portfolios = [


        { nome: "lsstar", thumbnail: "./images/portfolio/thumbnail/lsstar.webp", tipo: "site" },
        { nome: "abcp", thumbnail: "./images/portfolio/thumbnail/abcp.webp", tipo: "site" },
        { nome: "ajz", thumbnail: "./images/portfolio/thumbnail/ajz.webp", tipo: "blog" },
        { nome: "bella", thumbnail: "./images/portfolio/thumbnail/bella.webp", tipo: "blog" },

        { nome: "bressan", thumbnail: "./images/portfolio/thumbnail/bressan.webp", tipo: "site" },
        { nome: "casadelpueblo", thumbnail: "./images/portfolio/thumbnail/casadelpueblo.webp", tipo: "blog" },
        { nome: "espacovitoria", thumbnail: "./images/portfolio/thumbnail/espacovitoria.webp", tipo: "site" },
        { nome: "fazao", thumbnail: "./images/portfolio/thumbnail/fazao.webp", tipo: "blog" },
        { nome: "fenix", thumbnail: "./images/portfolio/thumbnail/fenix.webp", tipo: "blog" },
        { nome: "fso", thumbnail: "./images/portfolio/thumbnail/fso.webp", tipo: "site" },
        { nome: "papeis", thumbnail: "./images/portfolio/thumbnail/papeis.webp", tipo: "blog" },

        { nome: "projetoeducar", thumbnail: "./images/portfolio/thumbnail/projetoeducar.webp", tipo: "blog" },

        { nome: "criançamaissaudavel", thumbnail: "./images/portfolio/thumbnail/criançamaissaudavel.webp", tipo: "blog" },

        { nome: "maquinas", thumbnail: "./images/portfolio/thumbnail/maquinas.webp", tipo: "site" },
        { nome: "mistersalad", thumbnail: "./images/portfolio/thumbnail/mistersalad.webp", tipo: "site" },
        { nome: "naturelle", thumbnail: "./images/portfolio/thumbnail/naturelle.webp", tipo: "site" },
        { nome: "nnobre", thumbnail: "./images/portfolio/thumbnail/nnobre.webp", tipo: "site" },
        { nome: "oneello", thumbnail: "./images/portfolio/thumbnail/oneello.webp", tipo: "site" },

        { nome: "psd", thumbnail: "./images/portfolio/thumbnail/psd.webp", tipo: "site" },
        { nome: "sandwich", thumbnail: "./images/portfolio/thumbnail/sandwich.webp", tipo: "site" },
        { nome: "setup", thumbnail: "./images/portfolio/thumbnail/setup.webp", tipo: "site" },
        { nome: "sindimei", thumbnail: "./images/portfolio/thumbnail/sindimei.webp", tipo: "site" },
        { nome: "sorveteriamadrid", thumbnail: "./images/portfolio/thumbnail/sorveteriamadrid.webp", tipo: "blog" },
        { nome: "telecon", thumbnail: "./images/portfolio/thumbnail/telecon.webp", tipo: "site" },
        { nome: "temperato", thumbnail: "./images/portfolio/thumbnail/temperato.webp", tipo: "site" },
        { nome: "universidadesabor", thumbnail: "./images/portfolio/thumbnail/universidadesabor.webp", tipo: "blog" },

        { nome: "vitastiq", thumbnail: "./images/portfolio/thumbnail/vitastiq.webp", tipo: "site" },

        { nome: "lsstar-sistema", thumbnail: "./images/portfolio/thumbnail/lsstar-sistema.webp", tipo: "sistema" },
        { nome: "vdlap-financeiro", thumbnail: "./images/portfolio/thumbnail/vdlap-financeiro.webp", tipo: "sistema" },
        { nome: "vdlap", thumbnail: "./images/portfolio/thumbnail/vdlap.webp", tipo: "sistema" },
        { nome: "megamed", thumbnail: "./images/portfolio/thumbnail/megamed.webp", tipo: "sistema" },
        { nome: "megamed-estoque", thumbnail: "./images/portfolio/thumbnail/megamed-estoque.webp", tipo: "sistema" },
        { nome: "contadigital", thumbnail: "./images/portfolio/thumbnail/contadigital.webp", tipo: "sistema" },
    ];

    Array.prototype.forEach.call(portfolios, function (portfolio) {
        $portfolio.innerHTML += '<div class="column is-4 portfolio ' + portfolio.tipo + '"><div class="card"><div class="card-content"><img class="" src="' + portfolio.thumbnail + '" alt=""></div></div></div>';

    });






    function changePortfolio(tab) {
        var spotlight = document.getElementsByClassName(tab)
        var portfolio = document.getElementsByClassName('portfolio')

        if (tab == 'todos') {
            Array.prototype.forEach.call(portfolio, function (port) {
                port.classList.remove('display-none');
            });
        } else {
            Array.prototype.forEach.call(portfolio, function (port) {
                port.classList.add('display-none');
            });
            Array.prototype.forEach.call(spotlight, function (el) {
                el.classList.remove('display-none');
            });
        }
    }

    function modalToggle() {
        document.querySelector('html').classList.toggle('is-clipped');
        document.querySelector('.modal').classList.toggle('is-active');
    }

    function navBarToggle() {
        document.querySelector('.navbar-burger').classList.toggle('is-active');
        document.querySelector('.navbar-menu').classList.toggle('is-active');
    }

    function efeitoMaquinaDeEscrever(elemento) {
        const textoArray = elemento.innerHTML.split('');
        elemento.innerHTML = ' ';
        textoArray.forEach(function (letra, i) {
            setTimeout(function () {
                elemento.innerHTML += letra;
            }, 100 * i)
        });
    }
    efeitoMaquinaDeEscrever(document.querySelector('.titulo-principal'));
