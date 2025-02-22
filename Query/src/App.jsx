import { useEffect, useState } from 'react';
import { useQuery } from "@tanstack/react-query";
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  /*Redux da state durum yönetimi yapılır */
  /*Query de endpointlerle alakalı yani verilerle alakalı işlem yapılcaksa da bu kullanılır*/

  /*user her değiştiğinde fonksiyon güncelleniyor*/
  //https://jsonplaceholder.org/posts
  const { data, isLoading, refetch } = useQuery({
    queryKey: ['posts'],
    queryFn: () => fetch('https://jsonplaceholder.org/posts').then(res => res.json()),
    enabled: false
  });

  console.log(data, isLoading, "fetchData");

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <button onClick={() => refetch()}>Veri Çek</button>
      <div>
        {data &&
          data.map((dt, i) => {
            return (
              <div key={i}>
                <h1>{dt.title}</h1>
                <p>{dt.body}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default App;
