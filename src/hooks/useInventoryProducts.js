import axios from 'axios'
import { useEffect, useState } from 'react'

const useInventoryProducts = (productRerander) => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios
      .get('https://tranquil-anchorage-25651.herokuapp.com/products')
      .then((res) => {
        const { data } = res
        setProducts(data)
      })
  }, [productRerander])

  return [products, setProducts]
}

export default useInventoryProducts
