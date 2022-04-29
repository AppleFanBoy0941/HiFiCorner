

function productSpecs(product) {
    const element = document.createElement('section')
    element.classList.add('productSpecs')
    element.classList.add('standardMargin')

    let productSpecsLinesSound = document.createElement("div")
    productSpecsLinesSound.classList.add("productSpecs__lines")
    element.appendChild(productSpecsLinesSound)

    let productSpecsSoundArticle = document.createElement("article")
    productSpecsSoundArticle.classList.add("productSpecs__soundArticle")

  

    productSpecsSoundArticle.innerHTML = `
        <div class="productSpecs__specHead">
                    <h3 class="productSpecs__header">Sound</h3>
                    <i data-feather="arrow-down-circle"></i>
                </div>
                <ul class="productSpecs__sound">
                    <li class="productSpecs__soundDesc">
                        ${product.specs.sound}

                    </li>

                </ul>
        `
    element.appendChild(productSpecsSoundArticle)

    let productSpecsSoundUL = element.querySelector(".productSpecs__sound")

    console.log("soundUL", productSpecsSoundUL)

    element.querySelector(".productSpecs__soundArticle").addEventListener("click", function(){
        console.log("soundVis")
        productSpecsSoundUL.classList.toggle("productSpecs__sound--visible")
        
    })

    //style: closed: opaci 0, height: 0 overfl: hidden 
    //style: --visible: opacity 1 height "define" transition: "define"
    
    let productSpecsLinesDesign = document.createElement("div")
    productSpecsLinesDesign.classList.add("productSpecs__lines")
    element.appendChild(productSpecsLinesDesign)

    // Code here


    
    return element
}
export default productSpecs

/*
<section class="productSpecs standardMargin">
       
            <div class="productSpecs__lines"></div>
            <article class="productSpecs__designArticle">

                <div class="productSpecs__specHead">

                    <h3 class="productSpecs__header">Design</h3>
                    <i data-feather="arrow-down-circle"></i>
                </div>
                <ul class="productSpecs__design">
                    <li class="productSpecs__height"></li>
                    <li class="productSpecs__width"></li>
                    <li class="productSpecs__weight"></li>
                    <li class="productSpecs__designDesc"></li>
                </ul>
            </article>
            <div class="productSpecs__lines"></div>
            <article class="productSpecs__connectivityArticle">

                <div class="productSpecs__specHead">

                    <h3 class="productSpecs__header">Connectivity</h3>
                    <i data-feather="arrow-down-circle"></i>
                </div>
                <ul class="productSpecs__connectivity">
                    <li class="productSpecs__battery"></li>
                    <li class="productSpecs__powerSupply"></li>
                    <ul class="productSpecs__type">


                    </ul>
                </ul>
            </article>
            <div class="productSpecs__lines"></div>
            <article class="productSpecs__reviewsArticle">

                <div class="productSpecs__specHead">
                    <h3 class="productSpecs__header">Reviews</h3>
                    <i data-feather="arrow-down-circle"></i>
                </div>
                <article class="productSpecs__reviews">


                </article>
            </article>
            <div class="productSpecs__lines"></div>
            <article class="productSpecs__stockArticle">

                <div class="productSpecs__specHead">
                    <h3 class="productSpecs__header">Inventory</h3>
                    <i data-feather="arrow-down-circle"></i>
                </div>
                <ul class="productSpecs__stock">
                    <li>Number of items in stock: <span class="productSpecs__stockAmount"></span></li>
                </ul>
            </article>



        </section>
        <div class="reviewpr" style="cursor: pointer;">
            <div class="reviewThisProduct">
                <i data-feather="message-square"></i>
                <p class="reviewThisProductParagraph">Review<br>Product</p>
            </div>

        </div>*/