export const currentUser = {
  id: "tapabrata_gayen",
  name: "Tapabrata Gayen",
  avatar: "https://i.pravatar.cc/150?u=john_doe",
};

export const users = {
  "Subho_09": {
    id: "Subho_09",
    name: "Subhadip Ghanta",
    email: "subhadip_ghantasya@gmail.com",
    avatar: "https://i.pravatar.cc/150?u=Subho_09",
    status: "Active User",
    lastMessage: "hhfsudbhvufksabhvfkfjasbfvufkbjsdcsdubc...",
  },
  "Ushree_2004": {
    id: "Ushree_2004",
    name: "Ushree Das",
    avatar: "https://i.pravatar.cc/150?u=Ushree_2004",
    status: "Offline",
    lastMessage: "Hey there, Adwitiyo this side",
  },
  "Deb_2004": {
    id: "Deb_2004",
    name: "Debajyoti Samanta",
    avatar: "https://i.pravatar.cc/150?u=Deb_2004",
    status: "Active User",
    lastMessage: "Hey Adwitiyo, what is the update on chitchat",
  },
  "Atre_5002": {
    id: "Atre_5002",
    name: "Atreyee Das",
    avatar: "https://i.pravatar.cc/150?u=Atre_5002",
    status: "Away",
    lastMessage: "The model is done",
  },
  "Guha_20": {
    id: "Guha_20",
    name: "Didipsha Guha",
    avatar: "https://i.pravatar.cc/150?u=Guha_20",
    status: "Active User",
    lastMessage: "Bring the Project documentation",
  },
  // --- New Users Added ---
  "jane_doe": {
    id: "jane_doe",
    name: "Jane Doe",
    email: "jane@example.com",
    avatar: "https://i.pravatar.cc/150?u=jane_doe",
    status: "Active User",
  },
  "john_smith": {
    id: "john_smith",
    name: "John Smith",
    email: "john@example.com",
    avatar: "https://i.pravatar.cc/150?u=john_smith",
    status: "Away",
  },
};

export const groups = {
  "hackerspace_01": {
    id: "hackerspace_01",
    name: "Hackerspace",
    avatar: "https://i.pravatar.cc/150?u=hackerspace", // A placeholder avatar for the group
    members: [currentUser, ...Object.values(users)], // All users including current user
    lastMessage: "John Smith: Let's start the project.",
    description: "A group for all the project members.",
    createdBy: "Tapabrata Gayen",
  }
};

export const messages = {
  // Messages for Subhadip Ghanta
  "Subho_09": [
    { id: 1, text: "Hey", time: "12:34", sender: "Subho_09" },
    { id: 2, text: "Hey bro", time: "12:34", sender: currentUser.id },
    { id: 3, text: "How are you", time: "12:36", sender: "Subho_09" },
    { id: 4, text: "I am good. what about you?", time: "12:34", sender: currentUser.id },
    { id: 5, text: "Me too, are you going to college", time: "12:37", sender: "Subho_09" },
    { id: 6, text: "Hey, I have a Design Idea", time: "12:34", sender: currentUser.id },
    { id: 7, text: "okay", time: "12:25", sender: currentUser.id },
    { id: 8, text: "hhfsudbhvufksabhvfkfjasbfvufkbjsdcsdubcjksdfbsdjkvbsudvb", time: "12:28", sender: currentUser.id },
  ],
  // Other existing conversations
  "Ushree_2004": [{ id: 1, text: "Hey there, Adwitiyo this side", time: "11:30", sender: "Ushree_2004" }],
  "Deb_2004": [{ id: 1, text: "Hey Adwitiyo, what is the update on chitchat", time: "10:00", sender: "Deb_2004" }],
  "Atre_5002": [{ id: 1, text: "The model is done", time: "Yesterday", sender: "Atre_5002" }],
  "Guha_20": [{ id: 1, text: "Bring the Project documentation", time: "Yesterday", sender: "Guha_20" }],
  // Messages for Hackerspace Group
  "hackerspace_01": [
    { id: 1, text: "Welcome everyone to the project group!", time: "09:00", sender: currentUser.id },
    { id: 2, text: "Glad to be here!", time: "09:01", sender: "jane_doe" },
    { id: 3, text: "Let's start the project.", time: "09:05", sender: "john_smith" },
  ],
};