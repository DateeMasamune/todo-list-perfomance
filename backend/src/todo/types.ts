import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class Task {
  @IsBoolean()
  is_checked: boolean;

  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  description: string;
}
