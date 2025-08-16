# 🧬 INTERFACES_AND_MODELS.md

## 📁 MongoDB Collections
```mermaid
erDiagram
  User ||--o{ Role : has
  User ||--o{ Brief : submits
  User ||--o{ Session : creates
  Session ||--|{ Idea : includes

  User {
    string _id
    string name
    string email
    string passwordHash
    string roleId
  }

  Role {
    string _id
    string name // User, Staff, Admin
  }

  Brief {
    string _id
    string userId
    string clientName
    string audience
    string goals
    string notes
    date createdAt
  }

  Session {
    string _id
    string userId
    string briefId
    date createdAt
    array ideaIds
  }

  Idea {
    string _id
    string sessionId
    string title
    string description
    array tags
    float score // from Pinecone
    string justification
  }
```

## 🔠 TypeScript Interfaces
```ts
interface User {
  _id: string;
  name: string;
  email: string;
  passwordHash: string;
  roleId: string;
}

interface Role {
  _id: string;
  name: 'User' | 'Staff' | 'Admin';
}

interface Brief {
  _id: string;
  userId: string;
  clientName: string;
  audience: string;
  goals: string;
  notes?: string;
  createdAt: Date;
}

interface Session {
  _id: string;
  userId: string;
  briefId: string;
  ideaIds: string[];
  createdAt: Date;
}

interface Idea {
  _id: string;
  sessionId: string;
  title: string;
  description: string;
  tags: string[];
  score?: number;
  justification?: string;
}
```

