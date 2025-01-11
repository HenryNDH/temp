# fragments
cloud-computing-for-programmers-winter-2025
# Express App Setup


This README provides instructions for setting up, running, and debugging the Express app.

---

## Prerequisites

Before you start, ensure you have the following installed:

- Node.js (version 14 or higher)
- npm (Node Package Manager)
- jq (optional, for JSON formatting)

---

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/HenryNDH/fragments.git
   cd fragments
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

---

## Scripts

### Linting

Run ESLint to check for code quality issues:

```bash
npm run lint
```

### Start the Server

Start the server in production mode:

```bash
npm start
```

### Development Mode

Start the server in development mode with automatic reload:

```bash
npm run dev
```

### Debug Mode

Start the server in debug mode (connects to a debugger on port `9229`):

```bash
npm run debug
```


## Testing the Server

1. Start the server (e.g., using `npm start`).
2. Open a browser or use `curl` to make a request:

   ```bash
   curl localhost:8080
   ```

   Example response:

   ```json
   {
     "status": "ok",
     "author": "Nguyen Duy Hoang",
     "githubUrl": "https://github.com/HenryNDH/fragments",
     "version": "0.0.1"
   }
   ```

3. Verify HTTP headers:

   ```bash
   curl -i localhost:8080
   ```

4. Format JSON responses using `jq`:

   ```bash
   curl -s localhost:8080 | jq
   ```

## File Structure

- `src/app.js`: Defines the Express app, routes, and middleware.
- `src/server.js`: Starts the server and enables graceful shutdown.
- `.vscode/launch.json`: Configuration for debugging in VSCode.


## Author

Nguyen Duy Hoang

[hoangnguyenduy7@gmail.com](mailto:hoangnguyenduy7@gmail.com)
