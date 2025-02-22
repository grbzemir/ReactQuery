import { useEffect, useState } from 'react';
import { useMutation, useQuery } from "@tanstack/react-query";
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  /*Redux da state durum yönetimi yapılır */
  /*Query de endpointlerle alakalı yani verilerle alakalı işlem yapılcaksa da bu kullanılır*/

  /*user her değiştiğinde fonksiyon güncelleniyor*/
  //https://jsonplaceholder.org/posts
  //https://jsonplaceholder.org/users
  // const { data, isLoading, refetch } = useQuery({
  //   queryKey: ['posts'],
  //   queryFn: () => fetch('https://jsonplaceholder.org/posts').then(res => res.json()),
  //   enabled: false
  // });

  const [newPost, setNewPost] = useState({
    title: "foo",
    body: "bar",
    userId: 1
  });

  const { mutate, isLoading } = useMutation({
    mutationKey: ['users'], (newPost) => {
    mutationFn: () => fetch('https://jsonplaceholder.org/users', {
      method: "POST",
      body: JSON.stringify(newPost),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    }).then(response => response.json())
  });

  console.log(mutateData, "mutateData");

  // console.log(data, isLoading, "fetchData");

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div>
      {/* <button onClick={() => refetch()}>Veri Çek</button> */}
      <button onClick={() => { }}>Veri Çek</button>
      <div>
        {/* {data &&
          data.map((dt, i) => {
            return (
              <div key={i}>
                <h1>{dt.title}</h1>
                <p>{dt.body}</p>
              </div>
            );
          })} */}
      </div>
    </div>
  );
}

export default App;
