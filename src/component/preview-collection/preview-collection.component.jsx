import React from 'react';
import './preview-collection.style.scss'
import CollectionItem from '../../component/collection-item/collection-item.component'

const PreivewCollection=({title,items})=>(
    <div className="collection-preview">
        <h1 className="title">{title}</h1>
        <div className="preview">
         {
             
             items.filter((items,idx)=>idx<4).map(({id,...otherProps})=>(
                //  <div key={id}> {item.name}</div>
                <CollectionItem key={id} {...otherProps}/>
             ))
         }
        </div>
    </div>
)

export default PreivewCollection