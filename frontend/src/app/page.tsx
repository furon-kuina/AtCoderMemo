import { StringifyOptions } from "querystring";

type Album = {
  id: string;
  title: string;
  artist: string;
  price: number;
}

const getData = async (): Promise<Album[]> => {
  const res = await fetch('http://localhost:4000/albums')
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

export default async function Home() {
  const data = await getData()
  console.log(data)
  return (
    <main>
      {data[0].title}
    </main>
  )
}
