import { useRouter } from 'next/router'

export default function Page() {
  const router = useRouter()
  const q = router.query.q

  return (
    <div>
      <h1 className="text-4xl font-bold">검색 결과 : {q}</h1>
    </div>
  )
}
