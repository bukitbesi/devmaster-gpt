 (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
diff --git a/backend/index.js b/backend/index.js
index a32474e279b15b734428e9d562fcabd36ac30f4b..a891838ef931ea759b40f156d9163e1a0b548fa4 100644
--- a/backend/index.js
+++ b/backend/index.js
@@ -1,15 +1,10 @@
-diff --git a//dev/null b/index.js
-index 0000000000000000000000000000000000000000..a891838ef931ea759b40f156d9163e1a0b548fa4 100644
---- a//dev/null
-+++ b/index.js
-@@ -0,0 +1,10 @@
-+import express from 'express';
-+import loginRoute from './routes/loginRoute.js';
-+
-+const app = express();
-+app.use(express.json());
-+app.use('/api', loginRoute);
-+
-+app.listen(3000, () => {
-+  console.log('Server running on http://localhost:3000');
-+});
+import express from 'express';
+import loginRoute from './routes/loginRoute.js';
+
+const app = express();
+app.use(express.json());
+app.use('/api', loginRoute);
+
+app.listen(3000, () => {
+  console.log('Server running on http://localhost:3000');
+});
 
EOF
)