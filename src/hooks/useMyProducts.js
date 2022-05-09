import axios from '../axios'
import { signOut } from 'firebase/auth'
import { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom'
import auth from '../fireBase.init'
import { toast } from 'react-toastify'

const useMyProducts = (productRerander, page, pageSize) => {
  const [myProducts, setMyProducts] = useState([])
  const [user, loading] = useAuthState(auth)
  const [dataLoading, setDataLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get(
        `products/my-items?email=${user.email}&page=${page}&size=${pageSize}`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        },
      )
      .then((res) => {
        const { data } = res
        setMyProducts(data)
        if (res.status) {
          setDataLoading(false)
        }
      })
      .catch((e) => {
        console.log(e.response.status)
        if (e.response.status === 403) {
          signOut(auth)
          toast.warning('Please Sign in again')
          navigate('/')
        }
      })
  }, [productRerander, user?.email, page, pageSize])

  return [myProducts, setMyProducts, dataLoading]
}

export default useMyProducts
