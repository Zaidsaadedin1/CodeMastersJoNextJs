// src/types/dtos/authDtos.ts

export interface RegisterUserDto {
  email: string;
  userName: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
  birthDate: Date;
  phoneNumber: string;
  termsAccepted: boolean;
}

export interface LoginUserDto {
  email: string;
  password: string;
}

export interface ResetPasswordDto {
  emailOrPhone: string;
  otp: string;
  newPassword: string;
  confirmPassword: string;
}

export interface ResetPasswordWithTokenDto {
  email: string;
  token: string;
  newPassword: string;
}
