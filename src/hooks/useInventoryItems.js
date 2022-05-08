import axios from 'axios'
import { useEffect, useState } from 'react'

const useInventoryItem = () => {
  const [items, setItems] = useState([])
  const [dataLoading, setDataLoading] = useState(true)

  useEffect(() => {
    axios
      .get('https://tranquil-anchorage-25651.herokuapp.com/products-home')
      .then((res) => {
        const { data } = res
        setItems(data)
        if (res.status) {
          setDataLoading(false)
        }
      })
  }, [])

  return [items, setItems, dataLoading]
}

export default useInventoryItem
