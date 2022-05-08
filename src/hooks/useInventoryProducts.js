import axios from 'axios'
import { useEffect, useState } from 'react'

const useInventoryProducts = (productRerander) => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/products').then((res) => {
      const { data } = res
      setProducts(data)
    })
  }, [productRerander])

  return [products, setProducts]
}

export default useInventoryProducts
