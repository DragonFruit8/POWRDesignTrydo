import React, { Component } from "react";
import {Helmet} from 'react-helmet'

class PageHelmet extends Component{
    render(){
        return(
            <React.Fragment>
                <Helmet>
                    <title>{this.props.pageTitle} | POWR Design </title>
                    <meta name="description" content=" " />
                </Helmet>
            </React.Fragment>
        )
    }
}


export default PageHelmet;
