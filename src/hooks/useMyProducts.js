import axios from '../axios'
import { signOut } from 'firebase/auth'
import { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom'
import auth from '../fireBase.init'

const useMyProducts = (productRerander) => {
  const [myProducts, setMyProducts] = useState([])
  const [user, loading] = useAuthState(auth)
  const [dataLoading, setDataLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    axios.get(`products/my-items?email=${user.email}`).then((res) => {
      const { data } = res
      setMyProducts(data)
      if (res.status) {
        setDataLoading(false)
      }
    })
  }, [productRerander, user?.email])

  return [myProducts, setMyProducts, dataLoading]
}

export default useMyProducts
