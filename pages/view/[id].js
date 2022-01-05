import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Item from '../../src/components/Item';

const Post = () => {
  const router = useRouter();
  const { id } = router.query;
  const [item, setItem] = useState({});

  const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;

  useEffect(() => {
    if (id && id > 0) {
      axios.get(API_URL).then((res) => {
        setItem(res.data);
      });
    }
  }, [API_URL, id]);

  return <Item item={item} />;
};

export default Post;
