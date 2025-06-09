 (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
diff --git a/backend/eslint.config.js b/backend/eslint.config.js
index 362c1bdd6d565ae43ca5e3ecb9f6996c730e40ba..9723b57b16558112996d01736593e7ba8253e6cd 100644
--- a/backend/eslint.config.js
+++ b/backend/eslint.config.js
@@ -1,16 +1,11 @@
-diff --git a//dev/null b/eslint.config.js
-index 0000000000000000000000000000000000000000..9723b57b16558112996d01736593e7ba8253e6cd 100644
---- a//dev/null
-+++ b/eslint.config.js
-@@ -0,0 +1,11 @@
-+export default [
-+  {
-+    ignores: ['node_modules/**'],
-+    languageOptions: {
-+      ecmaVersion: 2020,
-+      sourceType: 'module'
-+    },
-+    plugins: {},
-+    rules: {},
-+  },
-+];
+export default [
+  {
+    ignores: ['node_modules/**'],
+    languageOptions: {
+      ecmaVersion: 2020,
+      sourceType: 'module'
+    },
+    plugins: {},
+    rules: {},
+  },
+];
 
EOF
)