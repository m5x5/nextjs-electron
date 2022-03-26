import Head from 'next/head';
import { styled } from '../stitches.config';

const Container = styled('div', {
  width: '100vw',
  height: '100vh',
  backgroundColor: '$gray900',
  display: 'grid',
  placeItems: 'center',
});

const Title = styled('h1', {
  fontSize: '$4',
  color: '$white',
  fontWeight: '500',
});

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Container>
        <Title>Welcome to the Template!</Title>
      </Container>
    </>
  );
}
