# Math Operations API

A Node.js application with RESTful APIs for various mathematical operations using Express, Prisma, and SQLite.

## Design Pattern

This application follows the **Model-View-Controller (MVC)** pattern with a **Service Layer**:

- **Model**: Prisma schema defines the data models for calculations
- **View**: JSON responses serve as the view layer
- **Controller**: Handles HTTP requests and responses
- **Service**: Contains business logic for mathematical operations

This separation of concerns makes the code more maintainable, testable, and scalable.


## API Endpoints

### Addition
- **URL**: `/api/addition`
- **Method**: POST
- **Body**: `{ "num1": 5, "num2": 10 }`
- **Response**: `{ "sum": 15, "id": 1 }`

### Factorial
- **URL**: `/api/factorial/:number`
- **Method**: GET
- **Response**: `{ "factorial": "120", "id": 1 }`

### Fibonacci
- **URL**: `/api/fibonacci/:count`
- **Method**: GET
- **Response**: `{ "sequence": ["0", "1", "1", "2", "3"], "id": 1 }`

### Calculation History
- **URL**: `/api/history`
- **Method**: GET
- **Response**: Array of previous calculations

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
git clone https://github.com/yourusername/math-api.git
cd math-api


2. Install dependencies
npm install


3. Set up the database
npx prisma migrate dev --name init


4. Start the server
npm run dev


5. The API will be available at `http://localhost:3000`