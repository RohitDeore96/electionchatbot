# Election Assistant

An application designed to help users understand the election process, timelines, and voting requirements in an interactive and accessible way.

## Overview

This project includes multiple implementations of the Election Assistant:
1. **React/Vite Application**: A modern frontend architecture for interactive civic tech.
2. **Vanilla Offline PWA** (in the `election-assistant-v2` folder): An offline-first, client-side application featuring an automated help assistant that guides users through voting questions using a deterministic decision tree—without relying on AI or requiring a backend server.

## Features
- **Eligibility Checker**: A quick tool to determine voting eligibility based on state or local rules.
- **Offline Rule-Based Chatbot** *(in Vanilla version)*: Guides users through voting questions.
- **Progressive Web App (PWA)**: Installable on mobile devices with full offline support.

## Getting Started

To run the React application in the root directory:
```bash
npm install
npm run dev
```

To run the Vanilla offline-first version:
```bash
cd election-assistant-v2
npx http-server -p 8080
```

## Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
