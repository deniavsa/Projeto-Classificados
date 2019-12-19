import React, { Component, Fragment } from 'react';
import './Cabecalho.css';
import img1 from '../../assets/img/logo-nt.png';
import img2 from '../../assets/img/perfil.png'

import {
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavItem,
    MDBNavLink,
    MDBNavbarToggler,
    MDBCollapse,
    MDBContainer
} from 'mdbreact';

import { BrowserRouter as Router } from 'react-router-dom';

class Cabecalho extends Component {
    state = {
        collapseID: ''
    };

    toggleCollapse = collapseID => () => {
        this.setState(prevState => ({
            collapseID: prevState.collapseID !== collapseID ? collapseID : ''
        }));
    };

    render() {
        return (
            <Fragment>
                <header class="cabecalho">
                    <nav class="nav_menu">
                        <div class="nav_menu_img">
                            <a href="/"><img src={img1} alt="" /></a>
                        </div>

                        <form action="#" method="GET">
                            <input type="text" name="search" placeholder="Buscar..." />
                            <i class="fas fa-search" aria-hidden="true"></i>
                        </form>
                        <div class="nav_menu_items">
                            <ul>
                                <li><a href="/Historico">Interesses</a></li>
                                <li><a href="/Historico de compras">Compras</a></li>
                                <li><a>Sobre</a></li>
                            </ul>
                        </div>
                        <div class="nav_menu_img">
                            <a href="/"><img src={img2} alt="" /></a>
                        </div>

                        <Router>
                            <MDBContainer>
                                <MDBNavbar
                                    color='light-blue lighten-4'
                                    style={{ marginTop: '20px' }}
                                    light
                                >
                                    <MDBContainer>
                                        <MDBNavbarBrand></MDBNavbarBrand>
                                        <MDBNavbarToggler
                                            onClick={this.toggleCollapse('navbarCollapse1')}
                                        />
                                        <MDBCollapse
                                            id='navbarCollapse1'
                                            isOpen={this.state.collapseID}
                                            navbar
                                        >
                                            <MDBNavbarNav left>
                                                <MDBNavItem active>
                                                    <MDBNavLink to='#!'>Home</MDBNavLink>
                                                </MDBNavItem>
                                                <MDBNavItem>
                                                    <MDBNavLink to='#!'>Link</MDBNavLink>
                                                </MDBNavItem>
                                                <MDBNavItem>
                                                    <MDBNavLink to='#!'>Profile</MDBNavLink>
                                                </MDBNavItem>
                                            </MDBNavbarNav>
                                        </MDBCollapse>
                                    </MDBContainer>
                                </MDBNavbar>
                            </MDBContainer>
                        </Router>

                    </nav>
                </header>
            </Fragment>
        );
    }
}

export default Cabecalho;




// function Cabecalho() {

//     return (

//         <div>

//             <header class="cabecalho">
//                 <nav class="nav_menu">
//                     <div class="nav_menu_img">
//                         <a href="/"><img src={img1} alt="" /></a>
//                     </div>

//                     <form action="#" method="GET">
//                         <input type="text" name="search" placeholder="Buscar..." />
//                         <i class="fas fa-search" aria-hidden="true"></i>
//                     </form>
//                     <div class="nav_menu_items">
//                         <ul>
//                             <li><a href="/Historico">Interesses</a></li>
//                             <li><a href="/Historico de compras">Compras</a></li>
//                             <li><a>Sobre</a></li>
//                         </ul>
//                     </div>
//                     <div class="nav_menu_img">
//                         <a href="/"><img src={img2} alt="" /></a>
//                     </div>

//                 </nav>
//             </header>


//         </div>


//     );
// }

// export default Cabecalho;