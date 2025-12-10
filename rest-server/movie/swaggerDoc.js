
/**
 * @swagger
 * definitions:
 *   Movie In:
 *     properties:
 *       title:
 *         type: string
 *         example: Iron Man
 *       year:
 *         type: integer
 *         example: 2008
 *       author:
 *         type: integer
 *         example: 1
 *       ispublic:
 *         type: integer
 *         example: 1
 */

/**
 * @swagger
 * definitions:
 *   Movie:
 *     properties:
 *       id:
 *         type: integer
 *         example: 1
 *       title:
 *         type: string
 *         example: Iron Man
 *       year:
 *         type: integer
 *         example: 2008
 *       author:
 *         type: integer
 *         example: 1
 *       ispublic:
 *         type: integer
 *         example: 1
 */

/**
 * @swagger
 * /movie:
 *   get:
 *     tags:
 *       - movies
 *     description: Return all Movies
 *     produces:
 *       - application/json
 *       - application:xml
 *     responses:
 *       200:
 *         description: Array of movies
 *         schema:
 *           type: array
 *           items:
 *             $ref: '#/definitions/Movie'
 */

/**
 * @swagger
 * /movie{movieId}:
 *   get:
 *     tags:
 *       - movies
 *     description: Return a Movie
 *     parameters:
 *       - in: path
 *         name: movieId
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of Movie
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Movie
 *         schema:
 *           $ref: '#/definitions/Movie'
 */

/**
 * @swagger
 * /movie:
 *   post:
 *     tags:
 *       - movies:
 *     description: Create new Moive
 *     parameters:
 *       - in: body
 *         name: movie
 *         schema:
 *           $ref: '#/definitions/Movie In'
 *         required: true
 *         description: Movie In
 *     produces:
 *       - application/json
 *     responses:
 *       201:
 *         description: Movie
 *         schema:
 *           $ref: '#/definitions/Movie'
 */

/**
 * @swagger
 * /movie/{movieId}:
 *   put:
 *     tags:
 *       - movies:
 *     description: Create new Moive
 *     parameters:
 *       - in: path
 *         name: movieId
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of Movie
 *       - in: body
 *         name: movie
 *         schema:
 *           $ref: '#/definitions/Movie In'
 *         required: true
 *         description: Movie In
 *     produces:
 *       - application/json
 *     responses:
 *       201:
 *         description: Movie
 *         schema:
 *           $ref: '#/definitions/Movie'
 */

/**
 * @swagger
 * /movie/{movieId}:
 *   delete:
 *     tags:
 *       - movies:
 *     description: Create new Moive
 *     parameters:
 *       - in: path
 *         name: movieId
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of Movie
 *     responses:
 *       204:
 *         description: Deleted
 */
