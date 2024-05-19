"use client"
import Image from 'next/image'
import React from 'react'
import './ProductWrapper.css'

const ProductWrapper = ({ data }) => {
    console.log(data)
    let productItem = data?.products?.map(el => (
        <div key={el.id} className="card">
            <Image src={el.thumbnail} alt={el.title} width={200} height={200} />
            <h2>{el.title}</h2>
            <br />
            <div className="price">
                <h2>${el.price}</h2>
                <h3>${el.discountPercentage}</h3>
            </div>
            <div className="star">
                <div class="rating">
                    <input type="radio" id="star5" name="rate" value="5" />
                    <label for="star5" title="text"></label>
                    <input type="radio" id="star4" name="rate" value="4" />
                    <label for="star4" title="text"></label>
                    <input type="radio" id="star3" name="rate" value="3" />
                    <label for="star3" title="text"></label>
                    <input type="radio" id="star2" name="rate" value="2" />
                    <label for="star2" title="text"></label>
                    <input checked="" type="radio" id="star1" name="rate" value="1" />
                    <label for="star1" title="text"></label>
                </div>
                <h4>( {el.rating} )</h4>
            </div>
        </div>
    ))
    return (
        <>
            <div className="container">
                <div className="wrapper__title">
                    <h2>Our Latest Product</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas facilisis nunc ipsum aliquam, ante. </p>
                    <div className="catalog__buton">
                        <button>SIMPLE</button>
                        <button>SIMPLE ALCANTARA</button>
                        <button>ADVANCED</button>
                        <button>ADVANCED ALCANTARA</button>

                    </div>
                </div>
                <div className="wrapper">
                    {productItem}
                </div>
            </div>
        </>
    )
}

export default ProductWrapper