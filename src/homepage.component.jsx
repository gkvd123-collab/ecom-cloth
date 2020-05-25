import React from 'react';
import './homepage.style.scss'

const HomePage=(k)=>{
 return(
      <div className="homepage">
        <div className="directory-menu">
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">
                      {k.name}
                    </h1>
                    <span className="subtitle">
                       Sub-Title
                    </span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">
                    {k.name}
                    </h1>
                    <span className="subtitle">
                       Sub-Title
                    </span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">
                    {k.name}
                    </h1>
                    <span className="subtitle">
                       Sub-Title
                    </span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">
                    {k.name}
                    </h1>
                    <span className="subtitle">
                       Sub-Title
                    </span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">
                    {k.name}
                    </h1>
                    <span className="subtitle">
                       Sub-Title
                    </span>
                </div>
            </div>
        </div>
    </div>
    )
}

export default HomePage