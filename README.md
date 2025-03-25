### Notas de clase

Proceso de transpilación + build:
- Primero convertimos ts a js
- build
- Análisis estático:
  - Determinar las dependencias que está usando nuestro proyecto
  - Eliminar dependencias importadas que no se estén usando : TreeShaking (Dead code elimination) https://www.patterns.dev/vanilla/tree-shaking
  - Minificar
  - Archivo .js .cjs /dist /build


Dependencias necesarias

1. npm i -D @types/node vite-plugin-dts

- Pasos:
  - crear vite.config.ts
  - entry point para el arbol de dependencias
  - plugin para generación de types
  - Configuración de modulo en package.json 
    - eliminar private true para poder publicar en registry
      

### ESLINT

Es una herramienta open source enfocada en el proceso de linting "reglas" para ECMAScript.

- Mostrar errores de sintaxis
- Mostrar errores de buenas prácticas
- Mantener estilo consistente (espaciado, imports, comillas, etc)

Dependencias 
```bash
npm init @eslint/config
npm i -D eslint-plugin-simple-import-sort // configurar import y export de archivos
```

### Import aliases

```bash
  npm i -D vite-tsconfig-paths
```

Modificar archivos tsconfig y vite.config.ts

### Husky 

Ejecutar scripts en diferentes estadios del flujo. Debe ser un repositorio válido.

```bash
git init
npx husky-init && npm i
npx husky add .husky/pre-commit "npm run lint"
npx husky add .husky/pre-push "npm run build"
```

Flujo ideal

- V1
  - Codear una feature 
  - Cambiar la versión del package json
  - Deberíamos correr test y eslint
  - hacer la build manual / automatica 
  - deberíamos publicar en npm / yarn / etc

- V2
  - Codear una feature 
  - Cambiar la versión del package json
  - Deberíamos correr test + eslint
  - hacemos un push a una branch feature de github
  - review del PR
  - Merge del PR contra rama estable
  - GITHUB ACTION para hacer test , build y publish en npm


### Commitlint

```bash
npm install -D @commitlint/config-conventional @commitlint/cli
echo "module.exports = {extends: ['@commitlint/config-conventional']}" > commitlint.config.js
npx husky add .husky/commit-msg  'npx --no -- commitlint --edit ${1}'
```


### Pruebas unitarias

Conjunto de pruebas automatizadas (idealmente) que verifican que cada parte del codigo funciona correctamente

```javascript
yarn add -D vitest
```
