import styled from 'styled-components';

export const Container = styled.div`
    border-top: 1px solid var(--color-border);
    padding: 44px 32px;

  > h1 {
    font-size: 2.4rem;
    margin: 4rem 0;
  }
`;

export const Panel = styled.div`
  display: grid;
  grid-template-columns: 50fr 50fr;
  line-height: 7rem;
  font-size: 1.4rem;
  font-weight: 600;
`;

export const FeaturesBox = styled.div``;

export const Carousel = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  cursor: pointer;
  
  .container {
    border-radius: 4px!important;
    border: 2px solid;
    margin: 0 1rem;
    max-width: 30%;
  }

  > div > img {
    background: var(--color-gray);
    padding: 1rem;
  }

  > div > img, p {
    max-width: 100%;
    margin: auto;
    display: flex;
    justify-content: space-around;
  }

  > div > p {
    line-height: 3rem;
    background-color: var(--color-black);
  }

  > div > p > span.price {
    font-size: 1.8rem;
  }

  > div > p > span.off {
    font-size: 1.1rem;
    color: var(--color-green);
  }

  > div > p.portion {
    font-size: 1.1rem;
    color: var(--color-green);
    text-align: initial;
    line-height: 2rem;
  }

  > div > a {
    display: none;
    font-size: 1.2rem;
    text-align: center;
    text-decoration: none;
    color: var(--color-blue);
    background-color: var(--color-black);
    line-height: 3rem;
    opacity: 1;
    transition: 5s ease-in-out;
  }

  > div:hover > a {
    display: block;
  }
`;