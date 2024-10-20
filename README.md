# Images from the app:

Home Page:

![desgin](https://res.cloudinary.com/dvgqyejfc/image/upload/v1729435371/Screenshot_2024-10-20_173153_voefep.png)

About Page:
![design](https://res.cloudinary.com/dvgqyejfc/image/upload/v1729435462/Screenshot_2024-10-20_174403_kldlcb.png)



Articles Page:
![design](https://res.cloudinary.com/dvgqyejfc/image/upload/v1729435652/Screenshot_2024-10-20_174655_kcx3zi.png)

![design](https://res.cloudinary.com/dvgqyejfc/image/upload/v1729435658/Screenshot_2024-10-20_174644_u16xco.png)




Built with:
- **[Next.js 14](https://nextjs.org/docs)** - React framework for server-side rendering and static site generation.
- **[React](https://react.dev/)** - Library for building user interfaces.
- **[JavaScript](https://www.typescriptlang.org/docs/)** - Typed JavaScript for better code quality and maintainability.
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework for rapid UI development.
- **[shadcn/ui](https://ui.shadcn.com/docs)** - Modern UI components built for React and Tailwind.
- **[brijr/craft](https://github.com/brijr/craft)** - Advanced build setup for developing Next.js projects.
- **[Framer Motion](https://www.framer.com/motion/)** - A powerful animation library for React, used to create smooth transitions and interactive motion effects.


## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm start

```
### Key Features
- **Fetch WordPress Content**: Built-in functions to fetch Articles, categories, tags, authors,data information and featured media via the WordPress REST API.
- **Dynamic Sitemaps**: Automatically generated sitemaps for better SEO.
- **Filterable Content**: Includes components to filter posts by tags, categories, and authors.
- **Type Safety**: TypeScript types provided for all WordPress entities, ensuring robust and error-free code.



To connect your Next.js application with WordPress, update the `.env.local` file:
```bash
WORDPRESS_URL="https://admin.toggle.com/"
WORDPRESS_HOSTNAME="admin.toggle.com
