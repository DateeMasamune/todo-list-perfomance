import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class Task {
  @IsNumber()
  id: number;

  @IsBoolean()
  is_checked: boolean;

  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  description: string;
}
