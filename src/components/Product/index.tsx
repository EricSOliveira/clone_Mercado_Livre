import React from 'react';

import Gallery from './Gallery';
import SellerInfo from '../SellerInfo';
import ProductAction from '../ProductAction';
import Features from './Features';

import { Container, Row, Panel, Column, Section, Description } from './styles';

const Product: React.FC = () => {
  return (
    <Container>
      <Row>
        <a href="#">Compartilhar</a>
        <a href="#">Vender um igual</a>
      </Row>

      <Panel>
        <Column>
          <Gallery />

          <Features />
          <Info />
        </Column>

        <Column>
          <ProductAction />
          <SellerInfo />

          <WarrantySection />
          <WarrantySection />
          <WarrantySection />
        </Column>
      </Panel>
    </Container>
  );
};

const WarrantySection = () => (
  <Section>
    <h4>Garantia</h4>

    <div>
      <span>
        <p className="title">Compra garantida com o Lorem Ipsum</p>
        <p className="description">Receba o produto que está esperando ou devolvemos o seu dinheiro.</p>
      </span>

      <span>
        <p className="title">Garantia do vendedor</p>
        <p className="description">Sem garantia</p>
      </span>
    </div>

    <a href="#">Saiba mais sobre garantia</a>
  </Section>
)

const Info = () => (
  <Description>
    <h2>Descrição</h2>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempus lobortis facilisis. 
      Donec feugiat tempus ligula, vitae eleifend nisi vulputate sit amet. Vestibulum eget augue dolor. Phasellus porta laoreet ligula, 
      eu semper tortor suscipit eget. Nullam sed convallis felis. Proin faucibus odio eget commodo volutpat. Duis ornare, sapien a tincidunt tincidunt, 
      felis magna condimentum libero, vel aliquet lectus magna lobortis leo.
      <br />
      <br />
      Itens inclusos: <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      <br />
      Etiam ut massa orci. Donec at tempor turpis. 
      Maecenas finibus eleifend ex, sed dictum dolor semper nec. 
      Quisque vitae dolor orci. Nunc nunc enim, imperdiet at est non, egestas venenatis tortor. 
      Donec mollis pharetra dapibus. Mauris vestibulum ligula ut iaculis blandit.
    </p>
  </Description>
)

export default Product;
