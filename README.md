# Practica

## Compilar

compilamos `demo.jsx`

```cmd
npx tsc demo.tsx
```

compilamos `demo.jsx` con el target ES6

```cmd
npx tsc demo.tsx --target es6
```

compilamos `demo.jsx` con el target ES6 y en el directorio dist

```cmd
npx tsc demo.tsx --target es6 --outDir dist
```

## creando el archivo tsconfig.json

````
$> npx tsc --init
Created a new tsconfig.json with:                                                                                       
                                                                                                                     TS 
  target: es2016
  module: commonjs
  strict: true
  esModuleInterop: true
  skipLibCheck: true
  forceConsistentCasingInFileNames: true


You can learn more at https://aka.ms/tsconfig
```

[typescript-jsx](https://runebook.dev/es/docs/typescript/jsx)


[Las anotaciones de tipo solo se pueden usar en los archivos TypeScript.ts(8010)](https://stackoverflow.com/questions/48859169/error-types-can-only-be-used-in-a-ts-file-visual-studio-code-using-ts-che)

```JavaScrips
{
  "javascript.validate.enable": false
}
```
