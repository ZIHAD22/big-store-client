import axios from '../axios'
import { useEffect, useState } from 'react'

const useInventoryProducts = (productRerander) => {
  const [products, setProducts] = useState([])
  const [dataLoading, setDataLoading] = useState(true)

  useEffect(() => {
    axios.get('products').then((res) => {
      const { data } = res
      setProducts(data)
      if (res.status) {
        setDataLoading(false)
      }
    })
  }, [productRerander])

  return [products, setProducts, dataLoading]
}

export default useInventoryProducts
