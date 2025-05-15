# Mainmator

A full-stack application that integrates with Ollama AI to process and generate Manim code based on user prompts.

## Project Structure

```
├── backend/           # Express.js backend server
│   ├── src/          # TypeScript source files
│   └── package.json  # Backend dependencies
└── frontend/         # React frontend application
    ├── src/          # TypeScript + React source files
    └── package.json  # Frontend dependencies
```

## Features

- React-based frontend with TypeScript
- Express.js backend with TypeScript
- Integration with Ollama AI using the deepseek-r1 model
- Real-time chat interface
- Environment variable configuration support

## Prerequisites

- Node.js (Latest LTS version recommended)
- TypeScript
- npm or yarn package manager

### Installing Ollama

1. Install Ollama by following the official installation instructions for your operating system:

   - Linux: `curl https://ollama.ai/install.sh | sh`
   - macOS: Download from [Ollama.ai](https://ollama.ai)
   - Windows: Download from [Ollama.ai](https://ollama.ai)

2. After installation, start the Ollama service:

   - Linux/macOS: The service starts automatically
   - Windows: Launch the Ollama application

3. Pull the deepseek-r1 model:

```bash
ollama pull deepseek-r1
```

4. Verify the installation:

```bash
ollama list
```

You should see `deepseek-r1` in the list of available models.

## Installation

### Backend Setup

1. Navigate to the backend directory:

```bash
cd backend
```

2. Install dependencies:

```bash
npm install
```

3. Create a .env file in the backend directory with:

```
PORT=3000
```

4. Build and start the server:

```bash
npm run dev
```

### Frontend Setup

1. Navigate to the frontend directory:

```bash
cd frontend
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

## Technologies Used

- **Frontend**:

  - React 19
  - TypeScript
  - Vite
  - Axios
  - ESLint

- **Backend**:
  - Express
  - TypeScript
  - Ollama
  - dotenv

## Available Scripts

### Backend

- `npm run dist` - Build TypeScript files
- `npm run start` - Start the server
- `npm run dev` - Build and start the server

### Frontend

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## API Endpoints

### POST `/api/v1/chat`

Send user prompts to get AI-generated responses.

**Request Body:**

```json
{
  "userPrompt": "string"
}
```

**Response:**

```json
{
  "message": {
    "content": "string"
  }
}
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License.
