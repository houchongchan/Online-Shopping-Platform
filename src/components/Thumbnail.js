import React, {useState, useEffect} from 'react'


const Thumbnail = ({props:{category, colors, company, description, id, image, name, price, shipping}}) => {
    const [ productdesc, setProductdesc] = useState('Loading');


    const formatPrice = (number) => {
        return new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
        }).format(number / 100)
    }
    

    useEffect(() =>{
        setProductdesc(description);
    },[description])



    let productprice = formatPrice(price);

    return (
        <>  
            <img className = 'product-img' src = {image}/> 
            <div className = 'product-header'> 
                <h3 style = {{textTransform: "capitalize"}}> {name}</h3>
                <h4 style = {{color: 'red'}}> {productprice}</h4>
            </div>

            <p className = 'product-description' > {productdesc} ...</p>
        </>

    )
}

export default Thumbnail
