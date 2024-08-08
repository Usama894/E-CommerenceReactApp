import React from 'react'
import Heading from './Heading'
import Product from './Product'
function Products() {
  return (
    <section class="products">
            <Heading/>
            <div class="row row-clean">
                <Product/>
            </div> 
            <div class="wrapper-more">
                <a href="products-grid.html" class="btn btn-lg">View all</a>
            </div>
        </section>
  )
}

export default Products