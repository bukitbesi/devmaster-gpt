 (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
diff --git a/backend/routes/loginRoute.js b/backend/routes/loginRoute.js
index cfa76614ced8994c1debe87cbe9061ba4e198fab..e05fdd71c0da56a2050d271c002a36503fbbf764 100644
--- a/backend/routes/loginRoute.js
+++ b/backend/routes/loginRoute.js
@@ -1,41 +1,36 @@
-diff --git a//dev/null b/routes/loginRoute.js
-index 0000000000000000000000000000000000000000..e05fdd71c0da56a2050d271c002a36503fbbf764 100644
---- a//dev/null
-+++ b/routes/loginRoute.js
-@@ -0,0 +1,36 @@
-+import { Router } from 'express';
-+
-+/**
-+ * Mock authentication service.
-+ * @param {string} username
-+ * @param {string} password
-+ * @returns {Promise<object>} resolved user data
-+ */
-+async function authenticate(username, password) {
-+  // Replace with real authentication logic
-+  if (username === 'admin' && password === 'password') {
-+    return { id: 1, username };
-+  }
-+  throw new Error('Invalid credentials');
-+}
-+
-+const router = Router();
-+
-+/**
-+ * Handle user login.
-+ *
-+ * @param {import('express').Request} req HTTP request object
-+ * @param {import('express').Response} res HTTP response object
-+ * @param {import('express').NextFunction} next Express next middleware function
-+ */
-+router.post('/login', async (req, res, next) => {
-+  try {
-+    const { username, password } = req.body;
-+    const user = await authenticate(username, password);
-+    res.json({ success: true, user });
-+  } catch (err) {
-+    next(err);
-+  }
-+});
-+
-+export default router;
+import { Router } from 'express';
+
+/**
+ * Mock authentication service.
+ * @param {string} username
+ * @param {string} password
+ * @returns {Promise<object>} resolved user data
+ */
+async function authenticate(username, password) {
+  // Replace with real authentication logic
+  if (username === 'admin' && password === 'password') {
+    return { id: 1, username };
+  }
+  throw new Error('Invalid credentials');
+}
+
+const router = Router();
+
+/**
+ * Handle user login.
+ *
+ * @param {import('express').Request} req HTTP request object
+ * @param {import('express').Response} res HTTP response object
+ * @param {import('express').NextFunction} next Express next middleware function
+ */
+router.post('/login', async (req, res, next) => {
+  try {
+    const { username, password } = req.body;
+    const user = await authenticate(username, password);
+    res.json({ success: true, user });
+  } catch (err) {
+    next(err);
+  }
+});
+
+export default router;
 
EOF
)