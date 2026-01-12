import { IsNumber, IsString, IsNotEmpty } from 'class-validator';

export class CreateRiderCoordinateDto {
  @IsNumber()
  @IsNotEmpty()
  lat: number;

  @IsNumber()
  @IsNotEmpty()
  lng: number;

  @IsString()
  @IsNotEmpty()
  rider: string;
}
