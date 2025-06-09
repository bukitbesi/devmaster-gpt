diff --git a//dev/null b/eslint.config.js
index 0000000000000000000000000000000000000000..9723b57b16558112996d01736593e7ba8253e6cd 100644
--- a//dev/null
+++ b/eslint.config.js
@@ -0,0 +1,11 @@
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
