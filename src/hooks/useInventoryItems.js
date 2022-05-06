import axios from 'axios'
import { useEffect, useState } from 'react'

const useInventoryItem = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    axios.get('InventoryItem.json').then((res) => {
      const { data } = res
      setItems(data)
    })
  }, [])

  return [items, setItems]
}

export default useInventoryItem
