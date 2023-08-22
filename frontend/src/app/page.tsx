import Form from "@/components/form"
type Memo = {
  id: string;
  content: string;
  problem: string;
}

const getData = async (): Promise<Memo[]> => {
  const res = await fetch('http://localhost:4000/v1/memo')
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
      <Form/>
    </main>
  ) 
}
