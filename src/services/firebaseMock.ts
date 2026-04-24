// Mock Firebase Setup
// Real implementation requires installing firebase and setting environment variables

const firebaseConfig = {
  apiKey: "AIzaSyMockApiKey1234567890",
  authDomain: "chess-assistant-mock.firebaseapp.com",
  projectId: "chess-assistant-mock",
  storageBucket: "chess-assistant-mock.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:mock123abc456def"
};

// Mock Auth
export const mockAuth = {
  currentUser: null,
  signInWithPopup: () => Promise.resolve({ user: { uid: 'mock-user-123' } }),
  signOut: () => Promise.resolve()
};

// Mock Firestore
export const mockDb = {
  collection: (path: string) => ({
    doc: (id: string) => ({
      get: () => Promise.resolve({ exists: true, data: () => ({ id }) }),
      set: (data: any) => Promise.resolve()
    }),
    get: () => Promise.resolve({ docs: [] })
  })
};

console.log("Firebase initialized with mock config:", firebaseConfig.projectId);
