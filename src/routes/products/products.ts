import { Router } from "express"
import pool from "../../config/database"

const router = Router()

router.get('/products', async (req, res) => {
  try {

    const [products] = await pool.query('SELECT * FROM products')
    res.json(products)

  } catch (error) {

    console.error(error)
    res.status(500).json({ message: 'Internal server error' })

  }
})

router.get('/products/:id', async (req: any, res: any) => {
  const { id } = req.params

  try {

    const [products]: any = await pool.query('SELECT * FROM products WHERE id = ?', [id])

    if (products.length === 0) {
      return res.status(404).json({ message: 'Product not found' })
    }

    res.json(products)

  } catch (error) {

    console.error(error)
    res.status(500).json({ message: 'Internal server error' })

  }
})

export default router
