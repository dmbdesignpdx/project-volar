# Project Codename: Volar

Ambitious attempt to create a proof of concept application that uses generative AI to enhance the user experience.

## Getting Started

This project uses:
- [Bun](https://bun.sh/) - A fast all-in-one JavaScript runtime.
- [Next.js](https://nextjs.org/) - A React framework for production.
- [Gemini API](https://ai.google.dev/gemini-api/docs) - Generative AI models by Google.
- [Chakra UI](https://chakra-ui.com/) - A simple, modular and accessible component library.

Install dependencies:

```bash
bun install
```

Provide your own Gemini API key in a `.env.local` file at the root:

```txt
GEMINI_API_KEY=XXXXXXXXXXXXXXXX
```

Run the development server:

```bash
bun run dev
```

## Dataset

If you want to re-create the dataset of products, just run:

```bash
bun run generate
```
