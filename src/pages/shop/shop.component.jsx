import React from 'react';
import SHOP_DATA from './shop-data';
import PreviewCollection from '../../component/preview-collection/preview-collection.component'

class Shop extends React.Component{
    constructor(){
        super();
        this.state={
            collection:SHOP_DATA
        }
    }

    render(){
        const {collection}=this.state
        return(
            <div className="shop-page">
                {
                collection.map(({id,...collection})=>(
                    <PreviewCollection key={id} {...collection} />
                ))
                }
            </div>
        )
    }
}
export default Shop