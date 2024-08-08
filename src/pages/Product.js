import React from 'react'
import Header from '../components/Header'
import ProductInfo from '../components/ProductInfo'
import Products from '../components/Products'
import Popup from '../components/Popup'
function Product() {
  return (
    <div class="wrapper">
        <Header/>
        <section class="product">
            <div class="main">
                <div class="container">
                    <div class="row product-flex">

                        <!-- product flex is used only for mobile order -->
                        <!-- on mobile 'product-flex-info' goes bellow gallery 'product-flex-gallery' -->

                        <div class="col-md-4 col-sm-12 product-flex-info">
                            <div class="clearfix">

                                <!-- === product-title === -->

                                <h1 class="title" data-title="Wireless">
                                    Headphones Wireless
                                    <small>Free shipping</small>
                                </h1>

                                <div class="clearfix">

                                    <!-- === price wrapper === -->

                                    <div class="price">
                                        <span class="h3">
                                            $ 1999,00
                                            <small>$ 2999,00</small>
                                        </span>
                                    </div>
                                    <hr />

                                    <!-- === info-box === -->

                                    <div class="info-box">
                                        <span><strong>Maifacturer</strong></span>
                                        <span>Brand name</span>
                                    </div>

                                    <!-- === info-box === -->

                                    <div class="info-box">
                                        <span><strong>Materials</strong></span>
                                        <span>Wood, Leather, Acrylic</span>
                                    </div>

                                    <!-- === info-box === -->

                                    <div class="info-box">
                                        <span><strong>Availability</strong></span>
                                        <span><i class="fa fa-check-square-o"></i> In stock</span>
                                        <span class="hidden"><i class="fa fa-truck"></i> Out of stock</span>
                                    </div>

                                    <hr />

                                    <div class="info-box info-box-addto added">
                                        <span>
                                            <i class="add"><i class="fa fa-heart-o"></i> Add to favorites</i>
                                            <i class="added"><i class="fa fa-heart"></i> Remove from favorites</i>
                                        </span>
                                    </div>

                                    <div class="info-box info-box-addto">
                                        <span>
                                            <i class="add"><i class="fa fa-eye-slash"></i> Add to Watch list</i>
                                            <i class="added"><i class="fa fa-eye"></i> Remove from Watch list</i>
                                        </span>
                                    </div>

                                    <div class="info-box info-box-addto">
                                        <span>
                                            <i class="add"><i class="fa fa-star-o"></i> Add to Collection</i>
                                            <i class="added"><i class="fa fa-star"></i> Remove from Collection</i>
                                        </span>
                                    </div>

                                    <hr />

                                    <!-- === info-box === -->

                                    <div class="info-box">
                                        <span><strong>Available Colors</strong></span>
                                        <div class="product-colors clearfix">
                                            <span class="color-btn color-btn-red"></span>
                                            <span class="color-btn color-btn-blue checked"></span>
                                            <span class="color-btn color-btn-green"></span>
                                            <span class="color-btn color-btn-gray"></span>
                                            <span class="color-btn color-btn-biege"></span>
                                        </div>
                                    </div>

                                    <!-- === info-box === -->

                                    <div class="info-box">
                                        <span><strong>Choose size</strong></span>
                                        <div class="product-colors clearfix">
                                            <span class="color-btn color-btn-biege">
                                                <span class="product-size" data-text="">S</span>
                                            </span>
                                            <span class="color-btn color-btn-biege checked">M</span>
                                            <span class="color-btn color-btn-biege">XL</span>
                                            <span class="color-btn color-btn-biege">XXL</span>
                                        </div>
                                    </div>

                                </div> <!--/clearfix-->
                            </div> <!--/product-info-wrapper-->
                        </div> <!--/col-md-4-->
                        <!-- === product item gallery === -->

                        <div class="col-md-8 col-sm-12 product-flex-gallery">

                            <!-- === add to cart === -->

                            <button type="submit" class="btn btn-buy" data-text="Buy"></button>


                            <!-- === product gallery === -->

                            <div class="owl-product-gallery open-popup-gallery">
                                <a href="assets/images/product-10.png"><img src="assets/images/product-10.png" alt="" height="500" /></a>
                                <a href="assets/images/product-10a.png"><img src="assets/images/product-10a.png" alt="" height="500" /></a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <ProductInfo/>
        </section>
        <section class="products">
            <Products/>
            <Popup/>
        </section>

    </div>
  )
}

export default Product