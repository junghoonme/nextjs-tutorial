import { Grid } from 'semantic-ui-react';
import Image from 'next/image';
import styles from '../../styles/ItemList.module.css';
import Link from 'next/link';

export default function ItemList({ list }) {
  return (
    <Grid columns={3}>
      <Grid.Row>
        {list.map((item) => (
          <Grid.Column key={item.id}>
            <Link href='/detail/[id]' as={`/detail/${item.id}`}>
              <a>
                <div className={styles.wrap}>
                  <Image
                    src={item.image_link}
                    alt={item.name}
                    width={160}
                    height={160}
                    className={styles.img_item}
                  />
                  <strong className={styles.tit_item}>{item.name}</strong>
                  <span className={styles.txt_info}>
                    {item.category} {item.product_type}
                  </span>
                  <strong className={styles.num_price}>${item.price}</strong>
                </div>
              </a>
            </Link>
          </Grid.Column>
        ))}
      </Grid.Row>
    </Grid>
  );
}
