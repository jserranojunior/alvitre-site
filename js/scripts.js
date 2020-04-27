
    var $portfolio = document.querySelector('.columns-portfolio')
    var portfolios = [


        { nome: "lsstar", thumbnail: "./images/portfolio/thumbnail/lsstar.png", tipo: "site" },
        { nome: "abcp", thumbnail: "./images/portfolio/thumbnail/abcp.png", tipo: "site" },
        { nome: "ajz", thumbnail: "./images/portfolio/thumbnail/ajz.png", tipo: "blog" },
        { nome: "bella", thumbnail: "./images/portfolio/thumbnail/bella.png", tipo: "blog" },

        { nome: "bressan", thumbnail: "./images/portfolio/thumbnail/bressan.png", tipo: "site" },
        { nome: "casadelpueblo", thumbnail: "./images/portfolio/thumbnail/casadelpueblo.png", tipo: "blog" },
        { nome: "espacovitoria", thumbnail: "./images/portfolio/thumbnail/espacovitoria.png", tipo: "site" },
        { nome: "fazao", thumbnail: "./images/portfolio/thumbnail/fazao.png", tipo: "blog" },
        { nome: "fenix", thumbnail: "./images/portfolio/thumbnail/fenix.png", tipo: "blog" },
        { nome: "fso", thumbnail: "./images/portfolio/thumbnail/fso.png", tipo: "site" },
        { nome: "papeis", thumbnail: "./images/portfolio/thumbnail/papeis.png", tipo: "blog" },

        { nome: "projetoeducar", thumbnail: "./images/portfolio/thumbnail/projetoeducar.png", tipo: "blog" },

        { nome: "criançamaissaudavel", thumbnail: "./images/portfolio/thumbnail/criançamaissaudavel.png", tipo: "blog" },

        { nome: "maquinas", thumbnail: "./images/portfolio/thumbnail/maquinas.png", tipo: "site" },
        { nome: "mistersalad", thumbnail: "./images/portfolio/thumbnail/mistersalad.png", tipo: "site" },
        { nome: "naturelle", thumbnail: "./images/portfolio/thumbnail/naturelle.png", tipo: "site" },
        { nome: "nnobre", thumbnail: "./images/portfolio/thumbnail/nnobre.png", tipo: "site" },
        { nome: "oneello", thumbnail: "./images/portfolio/thumbnail/oneello.png", tipo: "site" },

        { nome: "psd", thumbnail: "./images/portfolio/thumbnail/psd.png", tipo: "site" },
        { nome: "sandwich", thumbnail: "./images/portfolio/thumbnail/sandwich.png", tipo: "site" },
        { nome: "setup", thumbnail: "./images/portfolio/thumbnail/setup.png", tipo: "site" },
        { nome: "sindimei", thumbnail: "./images/portfolio/thumbnail/sindimei.png", tipo: "site" },
        { nome: "sorveteriamadrid", thumbnail: "./images/portfolio/thumbnail/sorveteriamadrid.png", tipo: "blog" },
        { nome: "telecon", thumbnail: "./images/portfolio/thumbnail/telecon.png", tipo: "site" },
        { nome: "temperato", thumbnail: "./images/portfolio/thumbnail/temperato.png", tipo: "site" },
        { nome: "universidadesabor", thumbnail: "./images/portfolio/thumbnail/universidadesabor.png", tipo: "blog" },

        { nome: "vitastiq", thumbnail: "./images/portfolio/thumbnail/vitastiq.png", tipo: "site" },

        { nome: "lsstar-sistema", thumbnail: "./images/portfolio/thumbnail/lsstar-sistema.png", tipo: "sistema" },
        { nome: "vdlap-financeiro", thumbnail: "./images/portfolio/thumbnail/vdlap-financeiro.png", tipo: "sistema" },
        { nome: "vdlap", thumbnail: "./images/portfolio/thumbnail/vdlap.png", tipo: "sistema" },
        { nome: "megamed", thumbnail: "./images/portfolio/thumbnail/megamed.png", tipo: "sistema" },
        { nome: "megamed-estoque", thumbnail: "./images/portfolio/thumbnail/megamed-estoque.png", tipo: "sistema" },
        { nome: "contadigital", thumbnail: "./images/portfolio/thumbnail/contadigital.png", tipo: "sistema" },
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
