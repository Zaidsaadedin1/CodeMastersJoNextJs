// src/types/dtos/userDtos.ts

export interface GetUserDto {
  id: string;
  userName: string;
  email: string;
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  phoneNumber: string;
  bio: string | null;
  occupation: string | null;
  location: string | null;
  interests: string[] | null;
}

export interface UpdateUserDto {
  userName: string;
  email: string;
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  phoneNumber: string;
  bio: string | null;
  occupation: string | null;
  location: string | null;
  interests: string[] | null;
}
