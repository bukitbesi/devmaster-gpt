import { Router } from 'express';

/**
 * Mock authentication service.
 * @param {string} username
 * @param {string} password
 * @returns {Promise<object>} resolved user data
 */
async function authenticate(username, password) {
  // Replace with real authentication logic
  if (username === 'admin' && password === 'password') {
    return { id: 1, username };
  }
  throw new Error('Invalid credentials');
}

const router = Router();

/**
 * Handle user login.
 *
 * @param {import('express').Request} req HTTP request object
 * @param {import('express').Response} res HTTP response object
 * @param {import('express').NextFunction} next Express next middleware function
 */
router.post('/login', async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await authenticate(username, password);
    res.json({ success: true, user });
  } catch (err) {
    next(err);
  }
});

export default router;
