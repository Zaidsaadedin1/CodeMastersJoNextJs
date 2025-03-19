// src/types/dtos/userDtos.ts

export interface GetUserDto {
  id: string;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  birthDate: Date;
  phoneNumber: string;
  bio: string;
  occupation: string;
  location: string;
  interests: string[];
}

export interface UpdateUserDto {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  bio: string;
  occupation: string;
  location: string;
  interests: string[];
}
