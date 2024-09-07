


## **Users API**

### **1. Get All Users**

**Endpoint:** `GET /api/users`

**Request:**
- **Method:** GET
- **URL:** `/api/users`
- **Headers:** None

**Response:**
- **Status Code:** 200 OK
- **Body:**

```json
{
    "users": [
        {
            "name": "John Doe",
            "userid": "johndoe",
            "password": "hashedpassword",
            "address": "123 Elm Street",
            "contact": "+1234567890",
            "emailAddress": "john@example.com",
            "gender": "Male",
            "dateOfBirth": "1990-01-01T00:00:00.000Z",
            "occupation": "Engineer",
            "gstNumber": "GST123456",
            "emergencyContactNumber": "+0987654321",
            "amountPaid": 1000,
            "paymentMode": "Credit Card",
            "paymentDoneOn": "2024-01-01T00:00:00.000Z",
            "paymentDetails": "Payment for membership",
            "status": "active",
            "height": 180,
            "weight": 75,
            "BMI": 23.1,
            "BMR": 1800,
            "otherDetails": "No additional info"
        }
    ],
    "executed": true
}
```

**Error Response:**
- **Status Code:** 500 Internal Server Error
- **Body:**

```json
{
    "error": "Error message",
    "executed": false
}
```

---

### **2. Create a New User**

**Endpoint:** `POST /api/users`

**Request:**
- **Method:** POST
- **URL:** `/api/users`
- **Headers:** `Content-Type: application/json`
- **Body:**

```json
{
    "name": "John Doe",
    "userid": "johndoe",
    "password": "password",
    "address": "123 Elm Street",
    "contact": "+1234567890",
    "emailAddress": "john@example.com",
    "gender": "Male",
    "dateOfBirth": "1990-01-01T00:00:00.000Z",
    "occupation": "Engineer",
    "gstNumber": "GST123456",
    "emergencyContactNumber": "+0987654321",
    "amountPaid": 1000,
    "paymentMode": "Credit Card",
    "paymentDoneOn": "2024-01-01T00:00:00.000Z",
    "paymentDetails": "Payment for membership",
    "status": "active",
    "height": 180,
    "weight": 75,
    "BMI": 23.1,
    "BMR": 1800,
    "otherDetails": "No additional info"
}
```

**Response:**
- **Status Code:** 201 Created
- **Body:**

```json
{
    "message": "User registered successfully",
    "user": {
        "name": "John Doe",
        "userid": "johndoe",
        "password": "hashedpassword",
        "address": "123 Elm Street",
        "contact": "+1234567890",
        "emailAddress": "john@example.com",
        "gender": "Male",
        "dateOfBirth": "1990-01-01T00:00:00.000Z",
        "occupation": "Engineer",
        "gstNumber": "GST123456",
        "emergencyContactNumber": "+0987654321",
        "amountPaid": 1000,
        "paymentMode": "Credit Card",
        "paymentDoneOn": "2024-01-01T00:00:00.000Z",
        "paymentDetails": "Payment for membership",
        "status": "active",
        "height": 180,
        "weight": 75,
        "BMI": 23.1,
        "BMR": 1800,
        "otherDetails": "No additional info"
    },
    "executed": true
}
```

**Error Response:**
- **Status Code:** 400 Bad Request
- **Body:**

```json
{
    "message": "User with this userid already exists.",
    "executed": false
}
```

- **Status Code:** 500 Internal Server Error
- **Body:**

```json
{
    "message": "Error registering user",
    "error": "Error message",
    "executed": false
}
```

---

## **User by ID API**

### **1. Get User by ID**

**Endpoint:** `GET /api/users/[userid]`

**Request:**
- **Method:** GET
- **URL:** `/api/users/{userid}`
- **Headers:** None

**Response:**
- **Status Code:** 200 OK
- **Body:**

```json
{
    "user": {
        "name": "John Doe",
        "userid": "johndoe",
        "password": "hashedpassword",
        "address": "123 Elm Street",
        "contact": "+1234567890",
        "emailAddress": "john@example.com",
        "gender": "Male",
        "dateOfBirth": "1990-01-01T00:00:00.000Z",
        "occupation": "Engineer",
        "gstNumber": "GST123456",
        "emergencyContactNumber": "+0987654321",
        "amountPaid": 1000,
        "paymentMode": "Credit Card",
        "paymentDoneOn": "2024-01-01T00:00:00.000Z",
        "paymentDetails": "Payment for membership",
        "status": "active",
        "height": 180,
        "weight": 75,
        "BMI": 23.1,
        "BMR": 1800,
        "otherDetails": "No additional info"
    },
    "message": "User fetched successfully.",
    "executed": true
}
```

**Error Response:**
- **Status Code:** 200 OK (User not found)
- **Body:**

```json
{
    "message": "User not found",
    "executed": false
}
```

- **Status Code:** 500 Internal Server Error
- **Body:**

```json
{
    "error": "Error message",
    "executed": false
}
```

---

### **2. Update User by ID**

**Endpoint:** `PUT /api/users/[userid]`

**Request:**
- **Method:** PUT
- **URL:** `/api/users/{userid}`
- **Headers:** `Content-Type: application/json`
- **Body:**

```json
{
    "updatedata": {
        "name": "John Smith",
        "emailAddress": "johnsmith@example.com"
    }
}
```

**Response:**
- **Status Code:** 200 OK
- **Body:**

```json
{
    "executed": true,
    "message": "User updated successfully."
}
```

**Error Response:**
- **Status Code:** 404 Not Found
- **Body:**

```json
{
    "error": "User not found",
    "executed": false
}
```

- **Status Code:** 500 Internal Server Error
- **Body:**

```json
{
    "error": "Error message",
    "executed": false
}
```

---

## **Memberships API**

### **1. Create a New Membership**

**Endpoint:** `POST /api/memberships`

**Request:**
- **Method:** POST
- **URL:** `/api/memberships`
- **Headers:** `Content-Type: application/json`
- **Body:**

```json
{
    "title": "Gold Membership",
    "startdate": "2024-01-01T00:00:00.000Z",
    "enddate": "2024-12-31T00:00:00.000Z",
    "price": "1000",
    "registered": ["user1", "user2"]
}
```

**Response:**
- **Status Code:** 201 Created
- **Body:**

```json
{
    "message": "Membership created successfully.",
    "membership": {
        "title": "Gold Membership",
        "startdate": "2024-01-01T00:00:00.000Z",
        "enddate": "2024-12-31T00:00:00.000Z",
        "price": "1000",
        "classes": [],
        "registered": ["user1", "user2"]
    },
    "executed": true
}
```

**Error Response:**
- **Status Code:** 500 Internal Server Error
- **Body:**

```json
{
    "error": "Error message",
    "executed": false
}
```

---

### **2. Get All Memberships**

**Endpoint:** `GET /api/memberships`

**Request:**
- **Method:** GET
- **URL:** `/api/memberships`
- **Headers:** None

**Response:**
- **Status Code:** 200 OK
- **Body:**

```json
{
    "memberships": [
        {
            "title": "Gold Membership",
            "startdate": "2024-01-01T00:00:00.000Z",
            "enddate": "2024-12-31T00:00:

00.000Z",
            "price": "1000",
            "classes": [],
            "registered": ["user1", "user2"]
        }
    ],
    "executed": true
}
```

**Error Response:**
- **Status Code:** 500 Internal Server Error
- **Body:**

```json
{
    "error": "Error message",
    "executed": false
}
```

---

## **Classes API**

### **1. Create a New Class**

**Endpoint:** `POST /api/classes`

**Request:**
- **Method:** POST
- **URL:** `/api/classes`
- **Headers:** `Content-Type: application/json`
- **Body:**

```json
{
    "title": "Yoga Class",
    "description": "A class focusing on yoga exercises.",
    "startdate": "2024-01-01T00:00:00.000Z",
    "enddate": "2024-12-31T00:00:00.000Z",
    "price": "200",
    "registered": ["user1", "user2"]
}
```

**Response:**
- **Status Code:** 201 Created
- **Body:**

```json
{
    "message": "Class created successfully.",
    "class": {
        "title": "Yoga Class",
        "description": "A class focusing on yoga exercises.",
        "startdate": "2024-01-01T00:00:00.000Z",
        "enddate": "2024-12-31T00:00:00.000Z",
        "price": "200",
        "registered": ["user1", "user2"]
    },
    "executed": true
}
```

**Error Response:**
- **Status Code:** 500 Internal Server Error
- **Body:**

```json
{
    "error": "Error message",
    "executed": false
}
```

---

### **2. Get All Classes**

**Endpoint:** `GET /api/classes`

**Request:**
- **Method:** GET
- **URL:** `/api/classes`
- **Headers:** None

**Response:**
- **Status Code:** 200 OK
- **Body:**

```json
{
    "classes": [
        {
            "title": "Yoga Class",
            "description": "A class focusing on yoga exercises.",
            "startdate": "2024-01-01T00:00:00.000Z",
            "enddate": "2024-12-31T00:00:00.000Z",
            "price": "200",
            "registered": ["user1", "user2"]
        }
    ],
    "executed": true
}
```

**Error Response:**
- **Status Code:** 500 Internal Server Error
- **Body:**

```json
{
    "error": "Error message",
    "executed": false
}
```

---

## **Class Details API**

### **1. Get Class Details**

**Endpoint:** `GET /api/classes/[classid]`

**Request:**
- **Method:** GET
- **URL:** `/api/classes/{classid}`
- **Headers:** None

**Response:**
- **Status Code:** 200 OK
- **Body:**

```json
{
    "class": {
        "title": "Yoga Class",
        "description": "A class focusing on yoga exercises.",
        "startdate": "2024-01-01T00:00:00.000Z",
        "enddate": "2024-12-31T00:00:00.000Z",
        "price": "200",
        "registered": ["user1", "user2"]
    },
    "message": "Class fetched successfully.",
    "executed": true
}
```

**Error Response:**
- **Status Code:** 200 OK (Class not found)
- **Body:**

```json
{
    "message": "Class not found",
    "executed": false
}
```

- **Status Code:** 500 Internal Server Error
- **Body:**

```json
{
    "error": "Error message",
    "executed": false
}
```

---

### **2. Update Class Details**

**Endpoint:** `PUT /api/classes/[classid]`

**Request:**
- **Method:** PUT
- **URL:** `/api/classes/{classid}`
- **Headers:** `Content-Type: application/json`
- **Body:**

```json
{
    "updatedata": {
        "title": "Advanced Yoga Class",
        "description": "An advanced class focusing on complex yoga exercises."
    }
}
```

**Response:**
- **Status Code:** 200 OK
- **Body:**

```json
{
    "executed": true,
    "message": "Class updated successfully."
}
```

**Error Response:**
- **Status Code:** 404 Not Found
- **Body:**

```json
{
    "error": "Class not found",
    "executed": false
}
```

- **Status Code:** 500 Internal Server Error
- **Body:**

```json
{
    "error": "Error message",
    "executed": false
}
```

---

