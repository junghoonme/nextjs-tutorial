import Head from 'next/head';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ItemList from '../src/components/ItemList';
import { Divider, Header } from 'semantic-ui-react';

export default function Home() {
  const [list, setList] = useState([]);

  const API_URL =
    'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline';

  useEffect(() => {
    axios.get(API_URL).then((res) => {
      setList(res.data);
    });
  }, []);

  return (
    <div>
      <Head>
        <title>Next.js Tutorial</title>
      </Head>
      <Header as='h3' style={{ paddingTop: 40 }}>
        베스트 상품
      </Header>
      <Divider />
      <ItemList list={list.slice(0, 9)} />
      <Header as='h3' style={{ paddingTop: 40 }}>
        신상품
      </Header>
      <Divider />
      <ItemList list={list.slice(9)} />
    </div>
  );
}
