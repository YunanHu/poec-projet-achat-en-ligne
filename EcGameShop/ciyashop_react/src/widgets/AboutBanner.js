/**
 * About Banner
 */
import React , {Component} from 'react';
import { Row, Col, Container } from 'reactstrap';

import { Collapse } from 'reactstrap';
import { Link } from 'react-router-dom';

class AboutBanner extends Component {

    constructor(){
        super();
        this.state = { showText: false };
      }
      getMoreTextDiv(){
        if (this.state.showText) {
            return  <p>Nous sommes des professionnels du jeu passionnés et souhaitons diffuser notre enthousiasme pour le jeu à travers cette plateforme.</p>;
          } else {
            return null;
          }
      }
   render() {
    var expandedDiv = this.getMoreTextDiv();
    return (
        <Row className="section-ptb align-items-center">
            <Col md={6} className="order-md-1 mb-4 mb-md-0">
                <div className="single_image-wrapper" style={{textAlign:"right"}}>
                  <img src={require(`../assets/images/categories/default/about-img.png`)}   className="attachment-full img-fluid" alt />
                </div>
            </Col>
            <Col md={6}>
                <div className="text-wrapper">
                   <span>En savoir plus</span>
                </div>
                <div className="section-title mb-4">
                  <h2 className="title text-left"> A propos de eGame</h2>
                <div className="text-wrapper">
                    <p>eGame est une boutique en ligne de jeux vidéo multiplateforme et toutes catégories de jeux. Nous offrons une large sélection de produits, en prévente et également dématérialisés.</p>
                    { expandedDiv }
                 </div>
                 </div>
                <div className="ciyashop_button_wrapper ciyashop_button_width_default">
                    <div className="inline_hover ciyashop_button_link ciyashop_button_size_medium button-underline">
                        <Link Style="cursor:pointer;" className="inline_hover"  onClick={() => this.setState({ showText: !this.state.showText }) }> {(this.state.showText) ? "Masquer.." : "Afficher.."} </Link>

                    </div>
                </div>
            </Col>
        </Row>
      )
   }
}

export default AboutBanner;
