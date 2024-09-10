import { useRouter } from 'next/router'

export default function Page() {
  const router = useRouter()
  const { id } = router.query

  return (
    <div>
      <h1 className="text-4xl font-bold">{id} 영화 상세 페이지</h1>
    </div>
  )
}
