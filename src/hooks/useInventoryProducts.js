import axios from '../axios'
import { useEffect, useState } from 'react'

const useInventoryProducts = (productRerander, page, pageSize) => {
  const [products, setProducts] = useState([])
  const [dataLoading, setDataLoading] = useState(true)

  useEffect(() => {
    axios.get(`products?page=${page}&size=${pageSize}`).then((res) => {
      const { data } = res
      setProducts(data)
      if (res.status) {
        setDataLoading(false)
      }
    })
  }, [productRerander, page, pageSize])

  return [products, setProducts, dataLoading]
}

export default useInventoryProducts
