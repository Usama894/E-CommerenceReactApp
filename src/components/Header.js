import React from 'react'

function Header() {
  return (
    <section class="main-header text-center" style="background-image:url(assets/images/gallery-2.jpg)">
            <header>
                <div class="container">
                    <h1 class="h2 title">Product category</h1>
                    <ol class="breadcrumb breadcrumb-inverted">
                        <li>
                            <a href="index.html"><span class="icon icon-home"></span></a>
                        </li>
                        <li>
                            <a href="category.html">Product Category</a>
                        </li>
                        <li>
                            <a href="products-grid.html">Product Sub-category</a>
                        </li>
                        <li>
                            <a class="active" href="product.html">Product overview</a>
                        </li>
                    </ol>
                </div>
            </header>
        </section>
  )
}

export default Header