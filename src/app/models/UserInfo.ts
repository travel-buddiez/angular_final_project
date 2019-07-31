
export interface User {
    email: string;
    username: string;
    public_id: string;
    bio: string;
    profilePic?: File
    registered_on: Date;
    modified_at: Date;
  }