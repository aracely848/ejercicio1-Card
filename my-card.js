class myCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open"});

        this.brand = this.getAttribute("brand");
        this.img = this.getAttribute("img");
        this.title = this.getAttribute("title");
        this.collection = this.getAttribute("collection");
        this.description = this.getAttribute("description");
        this.price = this.getAttribute("price");
    }

    getTemplate(){
        const template = document.createElement("template");
        template.innerHTML = `
            <section class="container">
                <div class="card_img">
                    <h3>${this.brand}</h3>
                    <img src=${this.img} alt=${this.description} />
                </div>
                <div class="card_text">
                    <h1> ${this.title} </h1>
                    <h3> ${this.collection} </h3>
                    <p> ${this.description} </p>
                    <div>
                        <p> ${this.price} </p>
                        <a href="www.google.com">Buy</a>
                    </div>
                </div>
            </section>
            ${this.getStyles()}
        `;
        return template;
    }

    getStyles(){
        return `
        <style>
            :host{
                --primary-background: #5f5fb7;
                width: 80%;
                max-width: 900px;
                min-width: 280px;
                margin: 0 auto;
                padding:15px;
            }
            .container {
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                justify-content: space-between;
            }
            .container .card_img{
                background-color: var(--primary-background);
                padding:15px 15px 0;
                position:relative;

            }
            .container .card_img h3{
                margin: 0;
                font-size: 3rem;
                color: #000000;
                opacity: 0.2;
                font-weight: 700;
                text-transform: uppercase;
                position: absolute;
                top: 15%;
                
            }
            .container .card_img img {
                width: 100%;
                height: auto;
                position: relative;
                bottom: -18%;
                left: -5%;
            }
            .container .card_text{
                background-color:#FFFFFF;
                padding: 30px;
            }
            .container .card_text h1 {
                font-size: 2rem;
                color: #000000;
            }
            .container .card_text h3 {
                color: #8c8c8c;
                text-transform: uppercase;
                font-size: 1.5rem;
            }
            .container .card_text p {
                color: #000000;
                font-size: 1rem;
                margin-left:5%;
            }
            .container .card_text div {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
            }
            .container .card_text div p{
                margin-left:0;
                color: #8c8c8c;
                text-transform: uppercase;
                font-size: 1.5rem;
                font-weight: 700;
                margin: 0;
            }
            .container .card_text div a{
                background-color: var(--primary-background);
                padding: 5px 7px;
                border: 1px solid #000000;
                border-radius: 10px;
                text-decoration: none;
                color: #000000;

            }
            @media only screen and (min-width: 1024px ){
                .container {
                    flex-wrap: nowrap;
                    max-width: 900px;                 
                }
                .container > div{
                    width: 50%;
                }
                .container .card_img img {
                    width: 160%;
                    bottom: -9%;
                    left: -40%;
                    transform: rotate(-30deg);
                }
                .container .card_text{
                    padding: 40px;
                }
                .container .card_text p {
                    margin-left:10%;
                }
            }
        </style>
        `
    }

    render(){
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }

    connectedCallback() {
        this.render();
      }

}

customElements.define("my-card", myCard);