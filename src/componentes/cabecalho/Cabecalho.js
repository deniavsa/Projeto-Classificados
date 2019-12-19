import React from 'react';
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

function Cabecalho() {
    
    return (

        <div>

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

                </nav>
            </header>
            

        </div>


    );
}

export default Cabecalho;