import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Button } from 'semantic-ui-react';

export default function Admin() {
  const router = useRouter();

  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    axios.get('/api/isLogin').then((res) => {
      if (res.status === 200 && res.data.name) {
        //로그인 성공
        router.push('/admin');
        setIsLogin(true);
      } else {
        //로그인 실패
        router.push('/login');
        setIsLogin(false);
      }
    });
  }, []);

  const handleLogout = () => {
    axios.get('/api/logout').then((res) => {
      if (res.status === 200) {
        //로그아웃 성공
        router.push('/');
        setIsLogin(false);
      }
    });
  };

  return (
    <div>admin {isLogin && <Button onClick={handleLogout}>Logout</Button>}</div>
  );
}
