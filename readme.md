# AI Joke Generator

## Overview
This project is a Next.js application that generates customized jokes using AI. Users can specify parameters like topic, tone, and joke type to get personalized humor content. The application also includes an evaluation feature that analyzes jokes for humor, appropriateness, and potential offensiveness.

## Features
- **Customizable Joke Generation**: Select from various topics, tones, and joke types
- **Temperature Control**: Adjust the creativity level of generated jokes
- **Joke Evaluation**: AI-powered analysis of joke quality and appropriateness
- **Responsive Design**: Works on both desktop and mobile devices

## Technologies Used
- Next.js
- React
- TypeScript
- Tailwind CSS
- OpenRouter API (with DeepSeek R1 Zero model)

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation
1. Clone the repository
```bash
git clone https://github.com/yourusername/joke-generator.git
cd joke-generator
```

2. Install dependencies
```bash
npm install
```

3. Create a `.env.local` file in the root directory and add your OpenRouter API key:
```
OPENROUTER_API_KEY=your_openrouter_api_key_here
```

4. Start the development server
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Usage
1. Select a topic for your joke (e.g., Work, Animals, Food)
2. Choose a tone (e.g., Witty, Sarcastic, Silly)
3. Select the joke type (e.g., Pun, Knock-knock, One-liner)
4. Adjust the temperature slider to control creativity
5. Click "Generate Joke" to create your customized joke
6. Use the "Evaluate This Joke" button to get AI analysis of the joke

## Project Structure
- `/app`: Main application code
  - `/components`: React components
  - `/api`: API routes for AI integration
- `/lib`: Utility functions
- `/public`: Static assets

## License
MIT

## Acknowledgments
- DeepSeek R1 Zero model via OpenRouter
- Next.js team for the application framework

Citations:
[1] https://pplx-res.cloudinary.com/image/upload/v1742186459/user_uploads/pPYfbLipkoJcMbA/image.jpg

---
Answer from Perplexity: pplx.ai/share
