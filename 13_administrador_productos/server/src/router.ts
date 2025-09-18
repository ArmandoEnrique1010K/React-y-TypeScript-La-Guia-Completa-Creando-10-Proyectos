import { Router } from "express"
import { body, param } from "express-validator"
import { getProducts, getProductById, createProduct, updateProduct, updateAvailability, deleteProduct } from "./handlers/product"
import { handleInputErrors } from "./middleware"

const router = Router()

/**
* @swagger
* components:
*  schemas:
*    Product:
*      type: object
*      properties:
*         id:
*           type: integer
*           description: The Product ID
*           example: 1
*         name:
*           type: string
*           description: The Product Name
*           example: Monitor Curvo de 32 pulgadas
*         price:
*           type: number
*           description: The Product Price
*           example: 300
*         availability:
*           type: boolean
*           description: The Product Availability
*           example: true
*/

/**
* @swagger
* /api/products:
*   get:
*     summary: Get a list of products
*     tags:
*       - Products
*     description: Return a list of products
*     responses:
*       200:
*         description: Succesfull response
*         content:
*           application/json:
*             schema:
*               type: array
*               items:
*                 $ref: '#/components/schemas/Product'
*/
router.get("/", getProducts)

/**
* @swagger
* /api/products/{id}:
*   get:
*     summary: Get a product by ID
*     tags:
*       - Products
*     description: Return a product based on its unique ID
*     parameters:
*       - in: path
*         name: id
*         description: The ID of the product to retrieve
*         required: true
*         schema:
*           type: integer
*     responses: 
*       200:
*         description: Successful Response
*         content: 
*           application/json:
*             schema:
*               $ref: '#/components/schemas/Product'
*       404:
*         description: Not Found
*       400:
*         description: Bad Request - Invalid ID *   
*/
router.get("/:id",
  param("id").isInt().withMessage("ID no válido"),
  handleInputErrors,
  getProductById
)

/**
* @swagger
* /api/products:
*   post:
*     summary: Creates a new product
*     tags:
*       - Products
*     description: Return a new record in the database
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             type: object
*             properties:
*               name:
*                 type: string
*                 example: Monitor Curvo de 32 pulgadas
*               price:
*                 type: number
*                 example: 300
*     responses: 
*       201:
*         description: Successful Response
*         content: 
*           application/json:
*             schema:
*               $ref: '#/components/schemas/Product'
*       400:
*         description: Bad Request - Invalid input data   
*/
router.post("/",
  body("name")
    .notEmpty().withMessage("El nombre del producto no puede ir vacío"),
  body("price")
    .isNumeric().withMessage("Valor no válido")
    .notEmpty().withMessage("El precio del producto no puede ir vacío")
    .custom(value => value > 0).withMessage("Precio no válido"),
  handleInputErrors,
  createProduct
)

/**
 * @swagger
 * /api/products/{id}:
 *   put:
 *     summary: Updates a product with user input
 *     tags:
 *       - Products
 *     description: Return the updated product
 *     parameters:
 *       - in: path
 *         name: id
 *         description: The ID of the product to retrieve
 *         required: true
 *         schema:
 *           type: integer 
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Monitor Curvo de 32 pulgadas
 *               price:
 *                 type: number
 *                 example: 300
 *               availability:
 *                 type: boolean
 *                 example: true
 * 
 *     responses: 
 *       200:
 *         description: Successful Response
 *         content: 
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       404:
 *         description: Not Found
 *       400:
 *         description: Bad Request - Invalid ID or Invalid input data
 */
router.put("/:id",
  param("id").isInt().withMessage("ID no válido"),
  body("name")
    .notEmpty().withMessage("El nombre de Producto no puede ir vacio"),
  body("price")
    .isNumeric().withMessage("Valor no válido")
    .notEmpty().withMessage("El precio de Producto no puede ir vacio")
    .custom(value => value > 0).withMessage("Precio no válido"),
  body("availability")
    .isBoolean().withMessage("Valor para disponibilidad no válido"),
  handleInputErrors,
  updateProduct
)

/**
 * @swagger
 * /api/products/{id}:
 *   patch:
 *     summary: Update product availability
 *     tags:
 *       - Products
 *     description: Return the updated availability
 *     parameters:
 *       - in: path
 *         name: id
 *         description: The ID of the product to retrieve
 *         required: true
 *         schema:
 *           type: integer 
 *     responses: 
 *       200:
 *         description: Successful Response
 *         content: 
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       404:
 *         description: Not Found
 *       400:
 *         description: Bad Request - Invalid ID
 */
router.patch("/:id",
  param("id").isInt().withMessage("ID no válido"),
  handleInputErrors,
  updateAvailability
)

/**
 * @swagger
 * /api/products/{id}:
 *   delete:
 *     summary: Delete a product by a given ID
 *     tags:
 *       - Products
 *     description: Return a confirmation message
 *     parameters:
 *       - in: path
 *         name: id
 *         description: The ID of the product to delete
 *         required: true
 *         schema:
 *           type: integer 
 *     responses: 
 *       200:
 *         description: Successful Response
 *         content: 
 *           application/json:
 *             schema:
 *               type: string
 *               value: "Producto Eliminado"
 *       404:
 *         description: Not Found
 *       400:
 *         description: Bad Request - Invalid ID
 */
router.delete("/:id",
  param("id").isInt().withMessage("ID no válido"),
  handleInputErrors,
  deleteProduct
)

export default router