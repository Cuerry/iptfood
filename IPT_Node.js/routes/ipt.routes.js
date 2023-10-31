import express from 'express'
import {
  CRUDUser,
  CRUDRestaurante,
  CRUDCatalogo,
  CRUDC_restaurantes,
  CRUDPedido,
  CRUDC_estafeta,
  CRUDPublicidade,
  CRUDPagamento,
  CRUDURestaurante,
  CRUDHistorico,
  editIPT,
} from '../controllers/ipt.controller.js'

const router = express.Router()

/**
 * @openapi
 * '/api/user':
 *  post:
 *     tags:
 *     - User
 *     summary: Create a new user
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - id_user
 *              - username
 *              - password
 *              - name
 *              - cargo
 *              - contacto
 *              - morada
 *              - met_pagamento
 *              - nif
 *              - data_nascimento
 *            properties:
 *              username:
 *                type: string
 *                default: Username
 *              password:
 *                type: string
 *                default: Password
 *              name:
 *                type: string 
 *                default: Name
 *              cargo:
 *                type: string
 *                default: Cargo
 *              contacto:
 *                type: number
 *                maxLength: 13
 *                default: Contacto
 *              morada:
 *                type: string
 *                default: Morada
 *              met_pagamento:
 *                type: string
 *                default: MetodoP
 *              nif:
 *                type: number
 *                maxLength: 9
 *                default: Nif
 *              data_nascimento:
 *                type: string
 *                format: date
 *                default: 2000-01-10
 *     responses:
 *      201:
 *        description: Created
 *      409:
 *        description: Conflict
 *      404:
 *        description: Not Found
 */
router.post('/api/user', CRUDUser.CreateUser)

/**
 * @openapi
 * '/api/user':
 *  get:
 *     tags:
 *     - User
 *     summary: Get all users
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                type: object
 *                properties:
 *                  id:
 *                    type: number
 *                  name:
 *                    type: string
 *       400:
 *         description: Bad request
 */
router.get('/api/user', CRUDUser.ReadUser)

/**
 * @openapi
 * '/api/user':
 *  put:
 *     tags:
 *     - User
 *     summary: Modify a user
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *            properties:
 *              id_user:
 *                type: integer
 *                default: 1
 *              name:
 *                type: string
 *                default: Hulk
 *     responses:
 *      200:
 *        description: Modified
 *      400:
 *        description: Bad Request
 *      404:
 *        description: Not Found
 */
router.put('/api/user', editIPT)

/**
 * @openapi
 * '/api/user':
 *  delete:
 *     tags:
 *     - User
 *     summary: Remove user by id
 *     parameters:
 *      - name: id
 *        in: path
 *        description: The unique id of the hero
 *        required: true
 *     responses:
 *      200:
 *        description: Removed
 *      400:
 *        description: Bad request
 *      404:
 *        description: Not Found
 */
router.delete('/api/user', CRUDUser.DeleteUser)

/* ---------------------Restaurante---------------------------*/

/**
 * @openapi
 * '/api/restaurante':
 *  post:
 *     tags:
 *     - Restaurante
 *     summary: Create a new restaurante
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - r_nome
 *              - r_morada
 *              - r_email
 *              - r_contacto
 *              - r_nif
 *              - status_disponibilidade
 *              - disponibilidade
 *            properties:
 *              r_nome:
 *                type: string
 *                default: Name
 *              r_morada:
 *                type: string
 *                default: Morada
 *              r_email:
 *                type: string
 *                format: email
 *                default: Email
 *              r_contacto:
 *                type: number
 *                maxLength: 13
 *                default: 123456789
 *              r_nif:
 *                type: number
 *                maxLength: 9
 *                default: 123456789
 *              status_disponibilidade:
 *                type: boolean
 *                default: true
 *              disponibilidade:
 *                type: string
 *                default: Horario
 *     responses:
 *      201:
 *        description: Created
 *      409:
 *        description: Conflict
 *      404:
 *        description: Not Found
 */
router.post('/api/restaurante', CRUDRestaurante.CreateRestaurante)

/**
 * @openapi
 * '/api/restaurante':
 *  get:
 *     tags:
 *     - Restaurante
 *     summary: Get all restaurantes
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                type: object
 *                properties:
 *                  id:
 *                    type: number
 *                  name:
 *                    type: string
 *       400:
 *         description: Bad request
 */
router.get('/api/restaurante', CRUDRestaurante.ReadRestaurante)

/**
 * @openapi
 * '/api/restaurante':
 *  put:
 *     tags:
 *     - Restaurante
 *     summary: Modify a restaurante
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *            properties:
 *              id_user:
 *                type: integer
 *                default: 1
 *              name:
 *                type: string
 *                default: Hulk
 *     responses:
 *      200:
 *        description: Modified
 *      400:
 *        description: Bad Request
 *      404:
 *        description: Not Found
 */
router.put('/api/restaurante', editIPT)

/**
 * @openapi
 * '/api/restaurante':
 *  delete:
 *     tags:
 *     - Restaurante
 *     summary: Remove Restaurante by id
 *     parameters:
 *      - name: id
 *        in: path
 *        description: The unique id of the hero
 *        required: true
 *     responses:
 *      200:
 *        description: Removed
 *      400:
 *        description: Bad request
 *      404:
 *        description: Not Found
 */
router.delete('/api/restaurante', CRUDRestaurante.DeleteRestaurante)

/*-------------------Catalogo----------------------------------- */

/**
 * @openapi
 * '/api/catalogo':
 *   post:
 *     tags:
 *       - Catalogo
 *     summary: Create a new catalogo
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - id_c
 *               - id_r
 *               - nome_prod
 *               - tipo
 *               - preco
 *               - stock
 *               - c_details
 *               - desconto
 *             properties:
 *               id_r:
 *                 type: integer
 *                 default: 2
 *               nome_prod:
 *                 type: string
 *                 default: NomeProd
 *               tipo:
 *                 type: string
 *                 default: Tipo
 *               preco:
 *                 type: number
 *                 default: 8
 *               stock:
 *                 type: number
 *                 default: 1
 *               c_details:
 *                 type: string
 *                 default: A sua descricao
 *               desconto:
 *                 type: string
 *                 default: 30% de desconto
 *     responses:
 *       201:
 *         description: Created
 *       409:
 *         description: Conflict
 *       404:
 *         description: Not Found
 */

router.post('/api/catalogo', CRUDCatalogo.CreateCatalogo)

/**
 * @openapi
 * '/api/catalogo':
 *  get:
 *     tags:
 *     - Catalogo
 *     summary: Get all catalogos
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                type: object
 *                properties:
 *                  id:
 *                    type: number
 *                  name:
 *                    type: string
 *       400:
 *         description: Bad request
 */
router.get('/api/catalogo', CRUDCatalogo.ReadCatalogo)

/**
 * @openapi
 * '/api/catalogo':
 *  put:
 *     tags:
 *     - Catalogo
 *     summary: Modify a catalogo
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *            properties:
 *              id_user:
 *                type: integer
 *                default: 1
 *              name:
 *                type: string
 *                default: Hulk
 *     responses:
 *      200:
 *        description: Modified
 *      400:
 *        description: Bad Request
 *      404:
 *        description: Not Found
 */
router.put('/api/catalogo', editIPT)

/**
 * @openapi
 * '/api/catalogo':
 *  delete:
 *     tags:
 *     - Catalogo
 *     summary: Remove catalogo by id
 *     parameters:
 *      - name: id
 *        in: path
 *        description: The unique id of the hero
 *        required: true
 *     responses:
 *      200:
 *        description: Removed
 *      400:
 *        description: Bad request
 *      404:
 *        description: Not Found
 */
router.delete('/api/catalogo', CRUDCatalogo.DeleteCatalogo)

/*-----------------------Classificacoes_restaurante---------------------------------- */

/**
 * @openapi
 * '/api/classificacoes_restaurantes':
 *  post:
 *     tags:
 *     - Classificacoes_restaurantes
 *     summary: Create a new classificacao de restaurante
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            properties:
 *     responses:
 *      201:
 *        description: Created
 *      409:
 *        description: Conflict
 *      404:
 *        description: Not Found
 */
router.post('/api/classificacoes_restaurantes', CRUDC_restaurantes.CreateClass_restaurantes)

/**
 * @openapi
 * '/api/classificacoes_restaurantes':
 *  get:
 *     tags:
 *     - Classificacoes_restaurantes
 *     summary: Get all classificacoes de restaurante
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                type: object
 *                properties:
 *                  id:
 *                    type: number
 *                  name:
 *                    type: string
 *       400:
 *         description: Bad request
 */
router.get('/api/classificacoes_restaurantes', CRUDC_restaurantes.ReadClass_restaurantes)

/**
 * @openapi
 * '/api/classificacoes_restaurantes':
 *  put:
 *     tags:
 *     - Classificacoes_restaurantes
 *     summary: Modify a classificacao de restaurante
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *            properties:
 *              id_user:
 *                type: integer
 *                default: 1
 *              name:
 *                type: string
 *                default: Hulk
 *     responses:
 *      200:
 *        description: Modified
 *      400:
 *        description: Bad Request
 *      404:
 *        description: Not Found
 */
router.put('/api/classificacoes_restaurantes', editIPT)

/**
 * @openapi
 * '/api/classificacoes_restaurantes':
 *  delete:
 *     tags:
 *     - Classificacoes_restaurantes
 *     summary: Remove classificacao de restaurante by id
 *     parameters:
 *      - name: id
 *        in: path
 *        description: The unique id of the hero
 *        required: true
 *     responses:
 *      200:
 *        description: Removed
 *      400:
 *        description: Bad request
 *      404:
 *        description: Not Found
 */
router.delete('/api/classificacoes_restaurantes', CRUDC_restaurantes.DeleteClass_restaurantes)

/*---------------------------Pedido--------------------------------------- */

/**
 * @openapi
 * '/api/pedido':
 *   post:
 *     tags:
 *       - Pedido
 *     summary: Create a new pedido
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - id_p
 *               - id_user
 *               - id_estafeta
 *               - p_details
 *               - status
 *             properties:
 *               id_p:
 *                 type: number
 *                 default: 1
 *               id_user:
 *                 type: number
 *                 default: 1
 *               id_estafeta:
 *                 type: number
 *                 default: 1
 *               p_details:
 *                 type: text
 *                 default: Detalhe pedido
 *               status:
 *                 type: boolean
 *                 default: true
 *     responses:
 *       201:
 *         description: Created
 *       409:
 *         description: Conflict
 *       404:
 *         description: Not Found
 */

router.post('/api/pedido', CRUDPedido.CreatePedido)

/**
 * @openapi
 * '/api/pedido':
 *  get:
 *     tags:
 *     - Pedido
 *     summary: Get all pedidos
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                type: object
 *                properties:
 *                  id:
 *                    type: number
 *                  name:
 *                    type: string
 *       400:
 *         description: Bad request
 */
router.get('/api/pedido', CRUDPedido.ReadPedido)

/**
 * @openapi
 * '/api/pedido':
 *  put:
 *     tags:
 *     - Pedido
 *     summary: Modify a pedido
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *            properties:
 *              id_user:
 *                type: integer
 *                default: 1
 *              name:
 *                type: string
 *                default: Hulk
 *     responses:
 *      200:
 *        description: Modified
 *      400:
 *        description: Bad Request
 *      404:
 *        description: Not Found
 */
router.put('/api/pedido', editIPT)

/**
 * @openapi
 * '/api/pedido':
 *  delete:
 *     tags:
 *     - Pedido
 *     summary: Remove pedido by id
 *     parameters:
 *      - name: id
 *        in: path
 *        description: The unique id of the hero
 *        required: true
 *     responses:
 *      200:
 *        description: Removed
 *      400:
 *        description: Bad request
 *      404:
 *        description: Not Found
 */
router.delete('/api/pedido', CRUDPedido.DeletePedido)

/*---------------------------------------Classificacoes_estafeta----------------------------- */

/**
 * @openapi
 * '/api/classificacoes_estafeta':
 *  post:
 *     tags:
 *     - Classificacoes_estafeta
 *     summary: Create a new classificacao do estafeta
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            properties:
 *     responses:
 *      201:
 *        description: Created
 *      409:
 *        description: Conflict
 *      404:
 *        description: Not Found
 */
router.post('/api/classificacoes_estafeta', CRUDC_estafeta.CreateClass_estafeta)

/**
 * @openapi
 * '/api/classificacoes_estafeta':
 *  get:
 *     tags:
 *     - Classificacoes_estafeta
 *     summary: Get all classificacoes do estafeta
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                type: object
 *                properties:
 *                  id:
 *                    type: number
 *                  name:
 *                    type: string
 *       400:
 *         description: Bad request
 */
router.get('/api/classificacoes_estafeta', CRUDC_estafeta.ReadClass_estafeta)

/**
 * @openapi
 * '/api/classificacoes_estafeta':
 *  put:
 *     tags:
 *     - Classificacoes_estafeta
 *     summary: Modify a classificacao do estafeta
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *            properties:
 *              id_user:
 *                type: integer
 *                default: 1
 *              name:
 *                type: string
 *                default: Hulk
 *     responses:
 *      200:
 *        description: Modified
 *      400:
 *        description: Bad Request
 *      404:
 *        description: Not Found
 */
router.put('/api/classificacoes_estafeta', editIPT)

/**
 * @openapi
 * '/api/classificacoes_estafeta':
 *  delete:
 *     tags:
 *     - Classificacoes_estafeta
 *     summary: Remove classificacoes do estafeta by id
 *     parameters:
 *      - name: id
 *        in: path
 *        description: The unique id of the hero
 *        required: true
 *     responses:
 *      200:
 *        description: Removed
 *      400:
 *        description: Bad request
 *      404:
 *        description: Not Found
 */
router.delete('/api/classificacoes_estafeta', CRUDC_estafeta.DeleteClass_estafeta)

/*-----------------------------------------Publicidade----------------------------------- */

/**
 * @openapi
 * 'api/publicidade':
 *  post:
 *     tags:
 *     - Publicidade
 *     summary: Create a new publicidade
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            properties:
 *     responses:
 *      201:
 *        description: Created
 *      409:
 *        description: Conflict
 *      404:
 *        description: Not Found
 */
router.post('/api/publicidade', CRUDPublicidade.CreatePublicidade)

/**
 * @openapi
 * '/api/publicidade':
 *  get:
 *     tags:
 *     - Publicidade
 *     summary: Get all publicidade
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                type: object
 *                properties:
 *                  id:
 *                    type: number
 *                  name:
 *                    type: string
 *       400:
 *         description: Bad request
 */
router.get('/api/publicidade', CRUDPublicidade.ReadPublicidade)

/**
 * @openapi
 * '/api/publicidade':
 *  put:
 *     tags:
 *     - Publicidade
 *     summary: Modify a publicidade
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *            properties:
 *              id_user:
 *                type: integer
 *                default: 1
 *              name:
 *                type: string
 *                default: Hulk
 *     responses:
 *      200:
 *        description: Modified
 *      400:
 *        description: Bad Request
 *      404:
 *        description: Not Found
 */
router.put('/api/publicidade', editIPT)

/**
 * @openapi
 * '/api/publicidade':
 *  delete:
 *     tags:
 *     - Publicidade
 *     summary: Remove publicidade by id
 *     parameters:
 *      - name: id
 *        in: path
 *        description: The unique id of the hero
 *        required: true
 *     responses:
 *      200:
 *        description: Removed
 *      400:
 *        description: Bad request
 *      404:
 *        description: Not Found
 */
router.delete('/api/publicidade', CRUDPublicidade.DeletePublicidade)

/*--------------------------------------Metodos_de_Pagamento-------------------------- */

/**
 * @openapi
 * '/api/metodos_de_pagamento':
 *  post:
 *     tags:
 *     - Metodos_de_Pagamento
 *     summary: Create a new metodo de pagamento
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            properties:
 *     responses:
 *      201:
 *        description: Created
 *      409:
 *        description: Conflict
 *      404:
 *        description: Not Found
 */
router.post('/api/metodos_de_pagamento', CRUDPagamento.CreatePagamento)

/**
 * @openapi
 * '/api/metodos_de_pagamento':
 *  get:
 *     tags:
 *     - Metodos_de_Pagamento
 *     summary: Get all metodos de pagamento
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                type: object
 *                properties:
 *                  id:
 *                    type: number
 *                  name:
 *                    type: string
 *       400:
 *         description: Bad request
 */
router.get('/api/metodos_de_pagamento', CRUDPagamento.ReadPagamento)

/**
 * @openapi
 * '/api/metodos_de_pagamento':
 *  put:
 *     tags:
 *     - Metodos_de_Pagamento
 *     summary: Modify a metodo de pagamento
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *            properties:
 *              id_user:
 *                type: integer
 *                default: 1
 *              name:
 *                type: string
 *                default: Hulk
 *     responses:
 *      200:
 *        description: Modified
 *      400:
 *        description: Bad Request
 *      404:
 *        description: Not Found
 */
router.put('/api/metodos_de_pagamento', editIPT)

/**
 * @openapi
 * '/api/metodos_de_pagamento':
 *  delete:
 *     tags:
 *     - Metodos_de_Pagamento
 *     summary: Remove metodo de pagamento by id
 *     parameters:
 *      - name: id
 *        in: path
 *        description: The unique id of the hero
 *        required: true
 *     responses:
 *      200:
 *        description: Removed
 *      400:
 *        description: Bad request
 *      404:
 *        description: Not Found
 */
router.delete('/api/metodos_de_pagamento', CRUDPagamento.DeletePagamento)

/*------------------------------------User_Restaurante-------------------------------------- */

/**
 * @openapi
 * '/api/user_restaurante':
 *  post:
 *     tags:
 *     - User_Restaurante
 *     summary: Create a new user para restaurante
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            properties:
 *     responses:
 *      201:
 *        description: Created
 *      409:
 *        description: Conflict
 *      404:
 *        description: Not Found
 */
router.post('/api/user_restaurante', CRUDURestaurante.CreateUser_restaurante)

/**
 * @openapi
 * '/api/user_restaurante':
 *  get:
 *     tags:
 *     - User_Restaurante
 *     summary: Get all users do restaurante
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                type: object
 *                properties:
 *                  id:
 *                    type: number
 *                  name:
 *                    type: string
 *       400:
 *         description: Bad request
 */
router.get('/api/user_restaurante', CRUDURestaurante.ReadUser_restaurante)

/**
 * @openapi
 * '/api/user_restaurante':
 *  put:
 *     tags:
 *     - User_Restaurante
 *     summary: Modify a user do restaurante
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *            properties:
 *              id_user:
 *                type: integer
 *                default: 1
 *              name:
 *                type: string
 *                default: Hulk
 *     responses:
 *      200:
 *        description: Modified
 *      400:
 *        description: Bad Request
 *      404:
 *        description: Not Found
 */
router.put('/api/user_restaurante', editIPT)

/**
 * @openapi
 * '/api/user_restaurante':
 *  delete:
 *     tags:
 *     - User_Restaurante
 *     summary: Remove user do restaurante by id
 *     parameters:
 *      - name: id
 *        in: path
 *        description: The unique id of the hero
 *        required: true
 *     responses:
 *      200:
 *        description: Removed
 *      400:
 *        description: Bad request
 *      404:
 *        description: Not Found
 */
router.delete('/api/user_restaurante', CRUDURestaurante.DeleteUser_restaurante)

/*--------------------------------------Historico---------------------------------- */

/**
 * @openapi
 * '/api/historico':
 *  post:
 *     tags:
 *     - Historico
 *     summary: Create a new historico
 *     requestBody:
 *      required:
 *        - id_user
 *        - data
 *        - log
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            properties:
 *              id_user:
 *                type: number
 *                default: 1
 *              data:
 *                type: string
 *                format: date
 *                default: 2020-01-01
 *              log:
 *                type: string
 *                default: a tabela foi atualizada
 *     responses:
 *      201:
 *        description: Created
 *      409:
 *        description: Conflict
 *      404:
 *        description: Not Found
 */
router.post('/api/historico', CRUDHistorico.CreateHistorico)

/**
 * @openapi
 * '/api/historico':
 *  get:
 *     tags:
 *     - Historico
 *     summary: Get all historico
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                type: object
 *                properties:
 *                  id:
 *                    type: number
 *                  name:
 *                    type: string
 *       400:
 *         description: Bad request
 */
router.get('/api/historico', CRUDHistorico.ReadHistorico)

/**
 * @openapi
 * '/api/historico':
 *  put:
 *     tags:
 *     - Historico
 *     summary: Modify a historico
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *            properties:
 *              id_user:
 *                type: integer
 *                default: 1
 *              name:
 *                type: string
 *                default: Hulk
 *     responses:
 *      200:
 *        description: Modified
 *      400:
 *        description: Bad Request
 *      404:
 *        description: Not Found
 */
router.put('/api/historico', editIPT)

/**
 * @openapi
 * '/api/historico':
 *  delete:
 *     tags:
 *     - Historico
 *     summary: Remove historico by id
 *     parameters:
 *      - name: id
 *        in: path
 *        description: The unique id of the hero
 *        required: true
 *     responses:
 *      200:
 *        description: Removed
 *      400:
 *        description: Bad request
 *      404:
 *        description: Not Found
 */
//router.delete('/api/historico', CRUDHistorico.DeleteHistorico)

export default router

/*
 *            properties:
 *              id_user:
 *                type: integer
 *                default: 2
 *              username:
 *                type: char
 *                default: New Username
 *              password:
 *                type: char
 *                default: New Password
 *              name:
 *                type: char 
 *                default: New Name
 *              cargo:
 *                type: char
 *                default: New Cargo
 *              contacto:
 *                type: character(13)
 *                default: New Contacto
 *               morada:
 *                type: char
 *                default: New Morada
 *              met_pagamento:
 *                type: char
 *                default: New Metodo de Pagamento
 *              nif:
 *                type: numeric(9,0)
 *                default: New Nif
 *              data_nascimento:
 *                type: date
 *                default: New Data de Nascimento
*/