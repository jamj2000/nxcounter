# Contador en el lado cliente

**Contador que NO pierde el estado al cambiar de página.**

Para ello se guarda el valor en el **sessionStorage** haciendo uso de:
- **sessionStorage.setItem** para guardar valor
- **sessionStorage.getItem** para recuperar valor

También se utilizan los hooks siguientes:
- **useLayoutEffect** que ejecuta un efecto antes de visualizar el cambio de estado del componente
- **useEffect** que ejecuta un efecto después de visualizar el cambio de estado del componente


## Referencias

- https://plainenglish.io/blog/next-js-keep-state-7eb68984c54e
- https://matiashernandez.dev/blog/post/cuando-usar-el-hook-uselayouteffect



## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
