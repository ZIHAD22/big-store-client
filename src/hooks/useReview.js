import axios from '../axios'
import { useEffect, useState } from 'react'

const useReview = () => {
  const [reviews, setReviews] = useState([])
  const [dataLoading, setDataLoading] = useState(true)

  useEffect(() => {
    axios.get('/reviews').then((res) => {
      setReviews(res.data[0])
      if (res.status) {
        setDataLoading(false)
      }
    })
  }, [])

  return [reviews, setReviews, dataLoading]
}

export default useReview
