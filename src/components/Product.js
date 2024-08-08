import React from 'react'

function Product() {
  return (
          <div class="col-xs-6 col-sm-4 col-md-3 col-lg-2">
                    <article>
                        <div class="info">
                            <span class="add-favorite">
                                <a href="javascript:void(0);" data-title="Add to favorites" data-title-added="Added to favorites list"><i class="icon icon-heart"></i></a>
                            </span>
                            <span>
                                <a href="#productid1" class="mfp-open" data-title="Quick wiew"><i class="icon icon-eye"></i></a>
                            </span>
                        </div>
                        <div class="btn btn-add">
                            <i class="icon icon-cart"></i>
                        </div>
                        <div class="figure-grid">
                            <div class="image">
                                <a href="#productid1" class="mfp-open">
                                    <img  src={`${process.env.PUBLIC_URL}/assets/images/product-7.png`} alt="" width="360" />
                                </a>
                            </div>
                            <div class="text">
                                <h2 class="title h5">
                                    <a href="product.html">Coffee machine</a>
                                </h2>
                                <sub>$ 159,-</sub>
                                <sup>$ 139,-</sup>
                                <span class="description clearfix">Gubergren amet dolor ea diam takimata consetetur facilisis blandit et aliquyam lorem ea duo labore diam sit et consetetur nulla</span>
                            </div>
                        </div>
                    </article>
                </div>

  )
}

export default Product