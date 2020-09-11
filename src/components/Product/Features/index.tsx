import React from 'react';

import { Container, Panel, FeaturesBox, Carousel } from './styles';

import tshirtImage from '../../../assets/tshirt.png';

const Features: React.FC = () => {
  return (
    <Container>

      <h1>Mais anúncios de Lorem Ipsum</h1>

      <Carousel>
        <div className="container">
          <img src={tshirtImage} alt="T-Shirt" />
          <p>
            <span className="price">R$ 25</span>
            <span className="off">18% OFF</span>
          </p>
          <p className="portion">
            2x R$ 12,50 sem juros <br />
            Frete Grátis
          </p>
          <a href="#"> Adicionar ao carrinho </a>
        </div>

        <div className="container">
          <img src={tshirtImage} alt="T-Shirt" />
          <p>
            <span className="price">R$ 25</span>
            <span className="off">18% OFF</span>
          </p>
          <p className="portion">
            2x R$ 12,50 sem juros <br />
            Frete Grátis
          </p>
          <a href="#"> Adicionar ao carrinho </a>
        </div>

        <div className="container">
          <img src={tshirtImage} alt="T-Shirt" />
          <p>
            <span className="price">R$ 25</span>
            <span className="off">18% OFF</span>
          </p>
          <p className="portion">
            2x R$ 12,50 sem juros <br />
            Frete Grátis
          </p>
          <a href="#"> Adicionar ao carrinho </a>
        </div>        
      </Carousel>


      <h1>Características</h1>

      <Panel>
        <FeaturesBox>
          <div>Marca: Desconhecida</div>
          <div>Tipo: Vestimenta</div>
        </FeaturesBox>

        <FeaturesBox>
          <div>Modelo: Desconhecido</div>
        </FeaturesBox>
      </Panel>

    </Container>
  );
};

export default Features;
