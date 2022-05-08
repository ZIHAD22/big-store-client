import axios from 'axios'
import { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../fireBase.init'

const useMyProducts = (productRerander) => {
  const [myProducts, setMyProducts] = useState([])
  const [user] = useAuthState(auth)

  useEffect(() => {
    axios
      .get(
        `https://tranquil-anchorage-25651.herokuapp.com/products/my-items?email=${user.email}`,
      )
      .then((res) => {
        const { data } = res
        setMyProducts(data)
      })
  }, [productRerander, user?.email])

  return [myProducts, setMyProducts]
}

export default useMyProducts
