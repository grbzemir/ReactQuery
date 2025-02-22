import { useEffect, useState } from 'react'
import { useQuery } from "@tanstack/react-query";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  /*Redux da state durum yönetimi yapılır */
  /*Query de endpointlerle alakalı yani verilerle alakalı işlem yapılcaksa da bu kullanılır*/

  /*user her değiştiğinde fonksiyon güncelleniyor*/
  //https://jsonplaceholder.org/posts
  const fetchData = useQuery(['posts'], () => {
    return fetch('https://jsonplaceholder.org/posts').then(response => response.json())
  })

  console.log(fetchData, 'fetchData');



  return (
    <div className="App">React</div>
  )
}

export default App
